"use client";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UpdateBlog({ postId }) {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => router.push(`/blog/edit/${postId}`)}
        className="flex cursor-pointer items-center gap-1 rounded-sm border bg-white p-1.5 text-indigo-500 hover:border hover:border-indigo-500 hover:bg-slate-50"
      >
        <SquarePen />
        <p className="text-sm">Edit</p>
      </Button>
    </>
  );
}
