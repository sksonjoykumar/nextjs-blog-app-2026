import { getBlogPostByIdAction } from "@/src/actions/blog";
import BlogDetails from "@/src/components/blog-details/BlogDeatils";
import { verifyAuth } from "@/src/lib/auth";
import { cookies } from "next/headers";

export default async function BlogPage({ params }) {
  const { id } = await params;
  const token = (await cookies()).get("token")?.value;
  const user = await verifyAuth(token);

  const result = await getBlogPostByIdAction(id);

  if (result?.error) {
    return <div className="text-red-500">{result.error}</div>;
  }

  return (
    <>
      <BlogDetails post={result.post} user={user} />
    </>
  );
}
