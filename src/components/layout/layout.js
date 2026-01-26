import { verifyAuth } from "@/src/lib/auth";
import { cookies } from "next/headers";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default async function CommonLayout({ children }) {
  const token = (await cookies()).get("token")?.value;
  const user = await verifyAuth(token);
  return (
    <>
    
      <div className="">
        {user && <Header />}
        {children}
        <Footer />
      </div>
    </>
  );
}
