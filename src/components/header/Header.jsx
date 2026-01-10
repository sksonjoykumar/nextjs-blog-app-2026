"use client";
import { Activity, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const path = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="relative flex items-center justify-between gap-5 bg-white px-10 py-5 md:px-24">
          {/* logo */}
          <Link
            onClick={() => setToggleMenu(!toggleMenu)}
            href={"/"}
            className="flex justify-center"
          >
            <Activity className="h-9 w-9 text-indigo-500" />
          </Link>

          {/* nav items */}
          <ul className="hidden items-center gap-5 sm:flex md:gap-7">
            <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
              <Link href="/about">About</Link>
            </li>
            <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
              {path === "/write" ? (
                <button
                  className="cursor-pointer rounded-3xl bg-indigo-500 px-4 py-1.5 text-sm text-white transition-all duration-200 hover:bg-indigo-600"
                  type="button"
                >
                  Publish
                </button>
              ) : (
                <Link href="/write">Write</Link>
              )}
            </li>
            <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
              <Link href="/login">Logout</Link>
            </li>
          </ul>

          {/* mobile Menubar */}
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            type="button"
            className="cursor-pointer sm:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>

          {/* Mobile nav items */}
          {toggleMenu && (
            <div className="absolute top-0 right-0 block h-screen w-45 bg-white sm:hidden">
              <ul className="flex h-screen flex-col items-center gap-7 border-l pt-6 shadow-sm">
                <button
                  onClick={() => setToggleMenu(!toggleMenu)}
                  type="button"
                  className="cursor-pointer transition-all duration-300 hover:text-red-600"
                >
                  <X className="h-7 w-7" />
                </button>
                <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
                  <Link onClick={() => setToggleMenu(!toggleMenu)} href="/">
                    Home
                  </Link>
                </li>
                <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
                  <Link
                    onClick={() => setToggleMenu(!toggleMenu)}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
                  <Link
                    onClick={() => setToggleMenu(!toggleMenu)}
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
                  {path === "/write" ? (
                    <button
                      className="cursor-pointer rounded-3xl bg-indigo-500 px-4 py-1.5 text-sm text-white transition-all duration-200 hover:bg-indigo-600"
                      type="button"
                    >
                      Publish
                    </button>
                  ) : (
                    <Link
                      onClick={() => setToggleMenu(!toggleMenu)}
                      href="/write"
                    >
                      Write
                    </Link>
                  )}
                </li>
                <li className="text-base text-gray-900 transition-all duration-300 hover:text-indigo-500">
                  <Link
                    onClick={() => setToggleMenu(!toggleMenu)}
                    href="/login"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
