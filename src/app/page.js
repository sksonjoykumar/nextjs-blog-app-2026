import { getBlogPostsAction } from "../actions/blog";
import HomePage from "../components/home/HomePage";

export default async function Home() {
  const posts = await getBlogPostsAction();
  

  return (
    <>
      <main>
        <HomePage posts={posts} />
      </main>
    </>
  );
}
