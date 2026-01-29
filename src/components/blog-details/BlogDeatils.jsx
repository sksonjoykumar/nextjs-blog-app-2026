"use client";
import { MessageCircleMore, User } from "lucide-react";

export default function BlogDetails({ post }) {
  console.log(post?.title);
  return (
    <>
      <div className="mx-auto max-w-350 px-4 md:px-24">
        <div className="m-10 rounded-md border-t border-gray-100 p-5 shadow-sm">
          <h1 className="text-3xl font-semibold text-gray-700">
            {post?.title}
          </h1>
          <span>|</span>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <User /> <span className="text-gray-600">By</span>
              <p className="font-semibold text-gray-700">
                {post?.author?.name}
              </p>
            </div>
            <p>
              <span>{new Date(post?.createdAt).toLocaleDateString()}</span>
            </p>
            <span>|</span>
            <div className="flex gap-2">
              <MessageCircleMore />
              <p>Comments</p>
            </div>
            {/* <Avatar className="h-10 w-10 cursor-pointer rounded-full">
              <AvatarImage
                src="https://img.icons8.com/?size=160&id=fUUEbUbXhzOA&format=png"
                alt="user-icon"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum
            accusamus. Cumque, exercitationem animi dignissimos non eius laborum
            autem totam. At vel deserunt quas, repellendus aut facilis
            voluptates porro perspiciatis!
          </p>
        </div>
      </div>
    </>
  );
}
