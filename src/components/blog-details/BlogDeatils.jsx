"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Clock, Eye, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Delete from "../delete-blog/Delete";
import UpdateBlog from "../update-Blog/UpdateBlog";

export default function BlogDetails({ post }) {
  function htmlToText(html = "") {
    return html
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // userId
  const userId = post?.author?._id;

  console.log(post);
  console.log(userId);

  return (
    <>
      <div className="mx-auto max-w-350 px-4 md:px-24">
        <div className="mb my-10 rounded-md border-t border-gray-100 p-5 shadow-sm">
          <div className="flex flex-wrap justify-center gap-3 sm:justify-between">
            <h1 className="text-4xl font-semibold text-gray-700 sm:text-left">
              {post?.title}
            </h1>
            {userId === post.author._id && (
              <div className="flex items-center gap-4">
                <UpdateBlog />
                <Delete />
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 sm:justify-start">
            <div className="flex items-center gap-2">
              <Avatar className="h-7 w-7 cursor-pointer rounded-full text-gray-600">
                <AvatarImage
                  src="https://img.icons8.com/?size=160&id=fUUEbUbXhzOA&format=png"
                  alt="user-icon"
                />
              </Avatar>
              <div className="flex items-center gap-1">
                <p className="text-balance text-gray-600">By</p>
                <p className="font-bold text-gray-600">{post?.author?.name}</p>
              </div>
            </div>
            <span className="h-4 border border-r text-black"></span>
            <div className="flex items-center gap-1">
              <span className="inline-block text-gray-600">
                <Clock width={16} />
              </span>
              <p className="text-sm text-gray-700">
                {new Date(post?.createdAt).toLocaleDateString()}
              </p>
            </div>
            <span className="h-4 border border-r text-black"></span>
            <div className="flex gap-1">
              <span className="inline-block text-gray-600">
                <MessageCircleMore width={18} />
              </span>
              <p className="text-sm text-gray-700">Comments</p>
            </div>
            <span className="h-4 border border-r text-black"></span>
            <div className="flex gap-1">
              <span className="inline-block text-gray-600">
                <Eye width={18} />
              </span>
              <p className="text-sm text-gray-700">5 Minutes Read</p>
            </div>
          </div>

          <Image
            src={post?.coverImage}
            alt="Blog-Img"
            width={300}
            height={400}
            className="mt-8 max-h-125 w-full rounded-xl border object-cover shadow-sm"
          />
          <p className="text-body mt-10 leading-7 text-gray-700">
            {htmlToText(post?.content)}
          </p>
        </div>
        <div className="mt-16 mb-10 rounded-md border-t border-gray-100 p-5 shadow-sm">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold text-indigo-300">
              Write a Comment
            </h1>
            <form className="mt-5 w-full">
              <textarea
                className="mb-5 h-40 w-full resize-none rounded-md border border-gray-300 bg-slate-50 p-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Write Comment"
              />
              <Button
                type="submit"
                className="w-44 cursor-pointer bg-indigo-500 py-5 text-white hover:bg-[#6a67fc]"
              >
                Comment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
