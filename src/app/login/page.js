"use client";
import Img from "@/public/images/sign-up-img.jpg";
import LoginFrom from "@/src/components/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-linear-to-br from-gray-100 to-gray-200 md:flex-row">
        <div className="flex w-full items-center justify-center p-8 md:w-1/2 lg:p-12">
          <div className="w-full max-w-md space-y-8 rounded-lg border border-gray-100 p-8 shadow-lg">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Login
              </h1>
              <p className="text-sm text-gray-700">
                Welcome back! Please login.
              </p>
              <LoginFrom />
              <p className="text-center text-sm text-gray-700">
                Don't have an account?
                <Link
                  className="ml-2 text-base font-semibold text-gray-800 transition ease-in hover:text-black hover:underline"
                  href={"/register"}
                >
                  Register
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
