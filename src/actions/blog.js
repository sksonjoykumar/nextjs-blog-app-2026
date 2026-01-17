import { request } from "@arcjet/next";
import { cookies } from "next/headers";
import { z } from "zod";
import { verifyAuth } from "../lib/auth";

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
  } catch (error) {
    return {
      error,
    };
  }
}
