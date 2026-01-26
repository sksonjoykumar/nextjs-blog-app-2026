"use client";
import { Input } from "@/components/ui/input";
import { Activity, Search } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-t bg-indigo-50 pb-12">
        <div className="mx-auto max-w-350 px-10 md:px-24">
          <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              {/* logo */}
              <Link href={"/"} className="flex">
                <Activity className="h-9 w-9 text-indigo-500" />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam, officia aperiam! Voluptatum commodi iure obcaecati sunt
                voluptatem assumenda, sequi et!
              </p>
            </div>

            {/* Navbar items */}
            <div className="">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Links
              </h3>

              <ul className="mt-4 text-gray-700 dark:text-gray-300">
                <li className="cursor-pointer pb-1 text-sm transition-all duration-200 hover:text-indigo-500">
                  <Link href="/">Home</Link>
                </li>
                <li className="cursor-pointer pb-1 text-sm transition-all duration-200 hover:text-indigo-500">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="cursor-pointer pb-1 text-sm transition-all duration-200 hover:text-indigo-500">
                  <Link href="/about">About</Link>
                </li>
                <li className="cursor-pointer text-sm transition-all duration-200 hover:text-indigo-500">
                  <Link href="/write">Write</Link>
                </li>
              </ul>
            </div>

            {/* Tags */}

            <div className="">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Categories
              </h3>

              <ul className="mt-4 text-gray-700 dark:text-gray-300">
                <li className="cursor-pointer pb-1 text-sm transition-all duration-200 hover:text-indigo-500">
                  <Link href="/">Programming</Link>
                </li>
                <li className="cursor-pointer pb-1 text-sm transition-all duration-200 hover:text-indigo-500">
                  <Link href="/">Technology</Link>
                </li>
                <li className="cursor-pointer pb-1 text-sm transition-all duration-200 hover:text-indigo-500">
                  <Link href="/">Computer</Link>
                </li>
                <li className="cursor-pointer pb-1 text-sm transition-all duration-200 hover:text-indigo-500">
                  <Link href="/">Fashion</Link>
                </li>

                <li className="cursor-pointer text-sm transition-all duration-200 hover:text-indigo-500">
                  <Link href="/">Nature</Link>
                </li>
              </ul>
            </div>

            {/* E-mail subscription */}
            <div className="">
              <h3 className="text-lg font-semibold text-gray-800 uppercase dark:text-gray-200">
                Sign up for E-mail
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam,
              </p>

              <div className="mt-3 flex flex-col gap-1">
                {/* blog search  */}
                <div className="relative">
                  <Search className="absolute top-2 left-1.5 h-5 w-5 text-gray-600" />
                  <Input
                    type="search"
                    className="border border-gray-300 py-4.5 pl-8 text-balance text-gray-900 shadow-none focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Sign up..."
                  />
                </div>
                <button
                  className="mt-2 w-auto cursor-pointer rounded-md bg-indigo-500 px-4 py-2 text-sm text-white shadow-sm transition-all duration-300 hover:bg-indigo-600"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          {/* copyright */}
          <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
            © 2026. All Rights Reserved. Designed & Developed by{" "}
            <a
              target="blank"
              className="hover:text-logoColor text-blue-700 underline"
              href="https://sksonjoykumar.vercel.app/"
            >
              Sonjoy Kumar
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
