import { getBlogPostsAction } from "@/src/actions/blog";
import { verifyAuth } from "@/src/lib/auth";
import { cookies } from "next/headers";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default async function CommonLayout({ children }) {
  const token = (await cookies()).get("token")?.value;
  const user = await verifyAuth(token);
  const posts = await getBlogPostsAction();
 
  return (
    <>
      <div>
        {user && <Header posts={posts} />}
        {children}
        {user && <Footer />}
      </div>
    </>
  );
}
