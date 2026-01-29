import { getBlogPostByIdAction } from "@/src/actions/blog";
import BlogDetails from "@/src/components/blog-details/BlogDeatils";

export default async function BlogPage({ params }) {
  const { id } = await params;

  const result = await getBlogPostByIdAction(id);

  if (result?.error) {
    return <div className="text-red-500">{result.error}</div>;
  }

  return (
    <>
      <BlogDetails post={result.post} />
    </>
  );
}
