
import { getBlogPostByIdAction } from "@/src/actions/blog";
import WriteBlogForm from "@/src/components/write-blog-form/WriteBlogForm";

export default async function EditBlogPage(props) {
  const params = await props.params;
  const { id } = params;

  const res = await getBlogPostByIdAction(id);

  if (res?.error) {
    return (
      <div className="mx-auto mt-20 max-w-xl text-center">
        <h2 className="text-xl font-semibold">{res.error}</h2>
      </div>
    );
  }

  return <WriteBlogForm post={res.post} />;
}
