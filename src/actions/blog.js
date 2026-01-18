import { request } from "@arcjet/next";
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

export async function createBlogPostAction(data) {
  const token = (await cookies()).get("token")?.value;
  const user = await verifyAuth(token);

  if (!user) {
    return {
      error: "Unauth user",
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
    const req = await request();
    const headersList = await headers();
    const isSuspicious = headersList.get("x-arcjet-suspicious") === "true";

    const decision = await blogPostRules.protect(req, {
      shield: {
        params: {
          title,
          content,
          isSuspicious,
        },
      },
    });

    if (decision.isErrored) {
      return {
        error: "An error occurred",
      };
    }

    if (decision.isDenied()) {
      if (decision.reason.isShield()) {
        return {
          error:
            "Input validation failed! Potentially malicious content detected",
        };
      }

      if (decision.reason.isBot()) {
        return {
          error: "Bot activity detected",
        };
      }
      return {
        error: "Request denied!",
      };
    }

    await connectToDB();
    const post = new BlogPost({
      title,
      content,
      author: user.userId,
      coverImage,
      category,
      comments: [],
      upvotes: [],
    });

    await post.save();
    revalidatePath("/");
    return {
      success: true,
      post,
    };
  } catch (error) {
    return {
      error,
    };
  }
}
