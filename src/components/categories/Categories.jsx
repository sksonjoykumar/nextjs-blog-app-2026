'use client'
import React from 'react'

export default function Categories({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <>
      <div className="order-1 mt-5 mb-5 sm:mt-0 lg:order-2 lg:justify-start">
        <h2 className="mt-3 text-center text-3xl font-semibold">Categories</h2>
        <div className="mt-5 flex h-10 flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border px-4 py-1 text-sm capitalize transition ${
                selectedCategory === cat || (!selectedCategory && cat === "All")
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-gray-300 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
