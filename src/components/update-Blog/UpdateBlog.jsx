"use client";
import { SquarePen } from "lucide-react";
import Link from "next/link";

export default function UpdateBlog() {
  return (
    <>
      <div>
        <Link
          href={"/write"}
          className="flex cursor-pointer items-center gap-1 rounded-sm border bg-white p-1.5 text-indigo-500 hover:border hover:border-indigo-500 hover:bg-slate-50"
        >
          <SquarePen />
          <p className="text-sm">Edit</p>
        </Link>
      </div>
    </>
  );
} 
