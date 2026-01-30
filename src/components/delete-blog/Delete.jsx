"use client";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function Delete() {
  return (
    <>
      <div className="">
        <Button className="cursor-pointer bg-white text-red-500 hover:border hover:border-indigo-500 hover:bg-slate-50">
          <Trash />
        </Button>
      </div>
    </>
  );
}
