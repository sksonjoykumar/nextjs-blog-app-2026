import { revalidatePath } from "next/cache";
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
