import WriteBlogForm from "@/src/components/write-blog-form/WriteBlogForm";
import { verifyAuth } from "@/src/lib/auth";
import { cookies } from "next/headers";

export default async function Write() {
  const token = (await cookies()).get("token")?.value;
  const user = await verifyAuth(token);

  return (
    <>
      <WriteBlogForm user={user} />
    </>
  );
}
