"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutList } from "lucide-react";
import { useMemo, useState } from "react";

export default function HomePage({ posts }) {
  const safePosts = Array.isArray(posts)
    ? posts
    : Array.isArray(posts?.posts)
      ? posts.posts
      : Array.isArray(posts?.data)
        ? posts.data
        : [];

  const [isGridView, setIsGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useMemo(() => {
    const all = safePosts.map((p) => p.category).filter(Boolean);
    return ["All", ...new Set(all)];
  }, [safePosts]);

  const filteredPosts = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All") {
      return safePosts;
    }
    return safePosts.filter(
      (post) => post.category?.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }, [safePosts, selectedCategory]);

  return (
    <section className="mt-6 px-6 md:px-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">All Blogs</h2>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsGridView(false)}
            className={!isGridView ? "bg-indigo-50" : ""}
          >
            <LayoutList />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsGridView(true)}
            className={isGridView ? "bg-indigo-50" : ""}
          >
            <LayoutGrid />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-5 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full border px-4 py-1 text-sm ${
              selectedCategory === cat || (!selectedCategory && cat === "All")
                ? "border-indigo-600 bg-indigo-600 text-white"
                : "border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div
        className={`mt-8 gap-6 ${
          isGridView ? "grid sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col"
        }`}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post._id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                {post.description}
              </p>
              <div className="mt-3 flex justify-between text-xs text-gray-500">
                <span>{post.category}</span>
                <span>
                  {post.createdAt &&
                    new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No blogs found
          </p>
        )}
      </div>
    </section>
  );
}
