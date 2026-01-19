import { createBlogPostAction } from "@/src/actions/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const token = req.cookies.get("token")?.value;
  const isSuspicious = req.headers.get("x-arcjet-suspicious") === "true";

  const result = await createBlogPostAction(body, {
    token,
    isSuspicious,
  });

  return NextResponse.json(result);
}
