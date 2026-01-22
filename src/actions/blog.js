import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";
import { z } from "zod";
import { blogPostRules } from "../lib/arcjet";
import { verifyAuth } from "../lib/auth";
import connectToDB from "../lib/db";
import BlogPost from "../models/BlogPost";

// blog Schema
const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "category is required"),
  content: z.string().min(1, "Content is required"),
  coverImage: z.string().min(1, "Image is required"),
});

// createBlogPostAction function
export async function createBlogPostAction(data, meta) {
  const user = await verifyAuth(meta.token);

  if (!user) {
    return {
      error: "Unauthorized user",
      status: 401,
    };
  }

  const validateFields = blogPostSchema.safeParse(data);
  if (!validateFields.success) {
    return {
      error: validateFields.error.errors[0].message,
    };
  }

  const { title, content, coverImage, category } = validateFields.data;

  try {
    const decision = await blogPostRules.protect(
      {}, // request object not needed here
      {
        shield: {
          params: {
            title,
            content,
            isSuspicious: meta.isSuspicious,
          },
        },
      },
    );

    if (decision.isDenied()) {
      return { error: "Request denied" };
    }

    await connectToDB();

    const post = await BlogPost.create({
      title,
      content,
      author: user.userId,
      coverImage,
      category,
      comments: [],
      upvotes: [],
    });

    revalidatePath("/");

    return {
      success: true,
      post,
    };
  } catch (error) {
    console.error("BLOG CREATE ERROR:", error);
    return {
      error: "Database error",
    };
  }
}

// getBlogPostsAction function
export async function getBlogPostsAction() {
  const token = (await cookies()).get("token")?.value;
  const user = await verifyAuth(token);

  if (!user) {
    return { error: "Unauthorized user", status: 401 };
  }

  try {
    const req = { headers: headers() };

    const decision = await blogPostRules.protect(req, { requested: 50 });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return { error: "Rate limit exceeded", status: 429 };
      }
      if (decision.reason.isBot()) {
        return { error: "Bot activity detected", status: 403 };
      }
      return { error: "Request denied", status: 403 };
    }

    await connectToDB();

    const posts = await BlogPost.find({})
      .sort({ createdAt: -1 })
      .populate({
        path: "author",
        select: "name",
        options: { strictPopulate: false },
      })
      .lean();

    const serializedPosts = posts.map((post) => ({
      _id: post._id.toString(),
      title: post.title,
      coverImage: post.coverImage,
      author: post.author
        ? {
            _id: post.author._id.toString(),
            name: post.author.name,
          }
        : null,
      content: post.content,
      category: post.category,
      createdAt: post.createdAt.toISOString(),
    }));

    return { success: true, posts: serializedPosts };
  } catch (error) {
    console.error("GET BLOG ERROR:", error);
    return { error: error.message };
  }
}
