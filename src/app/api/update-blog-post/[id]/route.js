import { updateBlogPostAction } from "@/src/actions/blog";

export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const { id } = params;

    const result = await updateBlogPostAction(id, body);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: "Update failed" }, { status: 500 });
  }
}
