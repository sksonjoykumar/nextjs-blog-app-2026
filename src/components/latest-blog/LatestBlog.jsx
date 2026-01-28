"use client";
import Image from "next/image";
import Link from "next/link";

export default function LatestBlog({ latestBlogs, previewText }) {
  return (
    <>
      <div className="mx-auto mt-10 mb-5 flex min-h-72 flex-col justify-center px-3 sm:max-w-sm lg:mt-0">
        <h2 className="mt-3 text-center text-3xl font-semibold text-gray-800">
          Latest Blogs
        </h2>

        {latestBlogs.length > 0 ? (
          latestBlogs.map((post) => (
            <Link
              href={`/blog/${post._id}`}
              key={post._id}
              className="mt-5 inline-block cursor-pointer rounded-md border bg-white p-3 shadow-sm transition-all duration-200 hover:border hover:border-indigo-500 hover:shadow-md"
            >
              <div className="flex items-center gap-1 sm:flex-row">
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <h3 className="text-balance text-gray-800">
                    {post.title.slice(0, 15)}
                  </h3>

                  <p className="mt-1 line-clamp-3 text-xs wrap-break-word text-gray-800">
                    {previewText(post.content, 50)}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Date: {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <Image
                  src={post.coverImage}
                  alt="blog image"
                  width={300}
                  height={400}
                  className="h-full w-20 rounded-sm object-cover sm:w-28"
                />
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No blogs found
          </p>
        )}
      </div>
    </>
  );
}
