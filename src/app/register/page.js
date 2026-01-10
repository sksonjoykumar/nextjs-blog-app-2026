import Img from "@/public/images/sign.jpg";
import RegisterForm from "@/src/components/auth/RegisterForm";
import { Activity } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Register() {
  const token = (await cookies()).get("token")?.value;

  if (token) {
    redirect("/");
  }
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-linear-to-br from-gray-100 to-gray-200 md:flex-row">
        <div className="flex w-full items-center justify-center p-8 md:w-1/2 lg:p-12">
          <div className="w-full max-w-md space-y-8 rounded-lg border border-gray-200 p-8 shadow-md">
            <div className="space-y-2 text-center">
              <div className="flex justify-center">
                <Activity className="h-9 w-9 text-indigo-500" />
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-700">
                Register
              </h1>
              <p className="text-sm text-gray-700">
                Create your account to get started
              </p>
              <RegisterForm />
              <p className="text-center text-sm text-gray-700">
                Already have an account?{" "}
                <Link
                  className="text-base font-semibold text-gray-800 transition ease-in-out hover:text-indigo-500 hover:underline"
                  href={"/login"}
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden w-1/2 items-center justify-center p-12 md:flex">
          <div className="z-10 max-w-lg space-y-6 text-white">
            <Image
              src={Img}
              alt="signup-img"
              placeholder="blur"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
