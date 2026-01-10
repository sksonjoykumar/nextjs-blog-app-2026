import { verifyAuth } from "@/src/lib/auth";
import { cookies } from "next/headers";
import Header from "../header/Header";

export default async function CommonLayout({ children }) {
  const token = (await cookies()).get("token")?.value;
  const user = await verifyAuth(token);
  return (
    <>
      <div className="mx-auto min-h-screen max-w-350 scroll-smooth">
        {user && <Header />}
        {children}
      </div>
    </>
  );
}
