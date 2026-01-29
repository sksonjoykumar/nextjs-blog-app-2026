export default function BlogDetails({ post }) {
 
  console.log(post?.title)
  return (
    <>
      <div className="mx-auto max-w-350 px-4 md:px-24">
        <h1>Blog Details Page</h1>
      </div>
    </>
  );
}
