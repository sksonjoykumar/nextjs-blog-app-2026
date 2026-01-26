"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { logoutUserAction } from "@/src/actions/logOut";
import { Activity, LogOut, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const path = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const result = await logoutUserAction();
    if (result.success) {
      router.push("/login");
    } else {
      console.log(`Logout Error ${error.message}`);
    }
  }

  return (
    <>
      <div className="sticky top-0 z-50 border-b bg-white">
        <header className="mx-auto max-w-350">
          <nav className="relative flex items-center justify-between gap-3 px-10 py-5 sm:gap-5 md:px-24">
            {/* logo */}
            <Link href={"/"} className="flex justify-center">
              <Activity className="h-9 w-9 text-indigo-500" />
            </Link>

            {/* blog search  */}
            <div className="relative w-96">
              <Search className="absolute top-2 left-1.5 h-5 w-5 text-gray-600" />
              <Input
                type="search"
                className="border border-gray-300 py-4.5 pl-8 text-balance text-gray-900 shadow-none focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                placeholder="Search blogs..."
              />
            </div>

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
              <li
                className={`${path === "/write" ? "hidden" : "block"} text-base text-gray-900 transition-all duration-300 hover:text-indigo-500`}
              >
                <Link onClick={() => setToggleMenu(!toggleMenu)} href="/write">
                  Write
                </Link>
              </li>
              <li className="text-base text-gray-900">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-10 w-10 cursor-pointer rounded-full">
                      <AvatarImage
                        src="https://img.icons8.com/?size=160&id=fUUEbUbXhzOA&format=png"
                        alt="user-icon"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4" />
                      <span>Log Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
                  <li
                    className={`${path === "/write" ? "hidden" : "block"} text-base text-gray-900 transition-all duration-300 hover:text-indigo-500`}
                  >
                    <Link
                      onClick={() => setToggleMenu(!toggleMenu)}
                      href="/write"
                    >
                      Write
                    </Link>
                  </li>
                  <li className="text-base text-gray-900">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Avatar className="h-10 w-10 cursor-pointer rounded-full">
                          <AvatarImage
                            src="https://img.icons8.com/?size=160&id=fUUEbUbXhzOA&format=png"
                            alt="user-icon"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <LogOut className="h-4 w-4" />
                          <span>Log Out</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </header>
      </div>
    </>
  );
}
