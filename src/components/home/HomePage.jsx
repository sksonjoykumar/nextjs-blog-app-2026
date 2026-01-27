"use client";
import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Categories from "../categories/Categories";
import LatestBlog from "../latest-blog/LatestBlog";
import BlogPagination from "../pagination/BlogPagination";

export default function HomePage({ posts }) {
  const [isGridView, setIsGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  // safePosts
  const safePosts = Array.isArray(posts)
    ? posts
    : Array.isArray(posts?.posts)
      ? posts.posts
      : Array.isArray(posts?.data)
        ? posts.data
        : [];

  // categories
  const categories = useMemo(() => {
    const all = safePosts.map((p) => p.category).filter(Boolean);
    return ["All", ...new Set(all)];
  }, [safePosts]);

  // filteredPosts
  const filteredPosts = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All") {
      return safePosts;
    }
    return safePosts.filter(
      (post) => post.category?.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }, [safePosts, selectedCategory]);

  function htmlToText(html = "") {
    return html
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // previewText
  const previewText = (html, length = 50) =>
    htmlToText(html).slice(0, length) + "...";

  // latestBlog
  const latestBlogs = [...safePosts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  console.log(filteredPosts);

  return (
    <section className="mt-6 mb-12 px-6 md:px-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-semibold">All Blogs</h2>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsGridView(false)}
            className={
              !isGridView
                ? "cursor-pointer bg-indigo-50 transition-all duration-300 hover:bg-indigo-100"
                : ""
            }
          >
            <LayoutList />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsGridView(true)}
            className={
              isGridView
                ? "cursor-pointer bg-indigo-50 transition-all duration-300 hover:bg-indigo-100"
                : ""
            }
          >
            <LayoutGrid />
          </Button>
        </div>
      </div>
      {/* Posts */}
      {/*  */}
      <div className="flex flex-col gap-3 md:gap-6 lg:flex-row">
        {/* POSTS */}
        <div className="order-1 w-full lg:order-1">
          <div
            className={`mt-8 gap-3 lg:gap-6 ${
              isGridView
                ? "grid sm:grid-cols-2 md:grid-cols-3"
                : "flex flex-col"
            }`}
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post._id}
                  className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  {isGridView ? (
                    /* GRID VIEW */
                    <>
                      <Image
                        src={post.coverImage}
                        alt="blog image"
                        width={500}
                        height={300}
                        className="w-full rounded-md object-cover transition-all duration-300 hover:scale-95 sm:h-32 lg:h-40"
                      />

                      <div className="mt-4">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                          <span className="font-medium text-indigo-500 capitalize">
                            {post.category.slice(0, 15)} ...
                          </span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold text-gray-800">
                          {post.title}
                        </h3>

                        <p className="mt-2 line-clamp-4 text-sm break-words text-gray-700">
                          {previewText(post.content, 170)}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {post.author?.name}
                          </span>
                          <Link
                            href={`/blog/${post._id}`}
                            className="border-b-2 border-indigo-600 text-sm text-indigo-600 hover:opacity-80"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* LIST VIEW */
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Image
                        src={post.coverImage}
                        alt="blog image"
                        width={1200}
                        height={400}
                        className="h-44 w-full rounded-md object-cover transition-all duration-300 hover:scale-95 sm:w-72 md:h-60 md:w-60 md:w-96"
                      />

                      <div className="flex min-w-0 flex-1 flex-col justify-between">
                        <div>
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>
                              {new Date(post.createdAt).toLocaleDateString()}
                            </span>
                            <span className="font-medium text-indigo-500 capitalize">
                              {post.category.slice(0, 30)}
                            </span>
                          </div>

                          <h3 className="mt-2 text-xl font-semibold text-gray-800">
                            {post.title}
                          </h3>

                          <p className="mt-2 line-clamp-3 text-sm break-words text-gray-700">
                            {previewText(post.content, 200)}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {post.author?.name}
                          </span>
                          <Link
                            href={`/blog/${post._id}`}
                            className="border-b-2 border-indigo-600 text-sm text-indigo-600 hover:opacity-80"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No blogs found
              </p>
            )}
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="order-2 lg:order-2">
          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {/* LatestBlog */}
          <LatestBlog latestBlogs={latestBlogs} previewText={previewText} />
        </div>
      </div>
      {/* Pagination */}
      <BlogPagination safePosts={safePosts} />
    </section>
  );
}
