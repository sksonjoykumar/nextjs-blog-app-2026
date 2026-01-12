import WriteBlogForm from "@/src/components/write-blog-form/WriteBlogForm";
import { verifyAuth } from "@/src/lib/auth";
import { cookies } from "next/headers";

export default async function CreateBlog() {
  const token = (await cookies()).get("token")?.value;
  const user = await verifyAuth(token);
  console.log(user);
  return (
    <>
      <WriteBlogForm user={user} />
    </>
  );
}
