"use client";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteBlog({ postId }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch(`/api/delete-blog-post/${postId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.error) {
        toast.error(data.error);
        return;
      }

      toast.success("Blog deleted successfully");
      router.push("/");
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <>
      <div className="">
        <Button
          onClick={handleDelete}
          className="cursor-pointer bg-white text-red-500 hover:border hover:border-indigo-500 hover:bg-slate-50"
        >
          <Trash />
        </Button>
      </div>
    </>
  );
}
