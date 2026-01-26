import { getBlogPostsAction } from "../actions/blog";
import HomePage from "../components/home/HomePage";

export default async function Home() {
  const posts = await getBlogPostsAction();
  

  return (
    <>
      <main className="mx-auto min-h-screen max-w-350 scroll-smooth">
        <HomePage posts={posts} />
      </main>
    </>
  );
}
