import { deleteBlogPostAction } from "@/src/actions/blog";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = await params;

  try {
    const result = await deleteBlogPostAction(id);

    if (result.error) {
      return NextResponse.json(
        { error: result.error },
        { status: result.status || 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
