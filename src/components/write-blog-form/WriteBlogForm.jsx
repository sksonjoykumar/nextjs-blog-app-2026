"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { blogCategory } from "@/src/lib/blog-category";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-quill-new/dist/quill.bubble.css";
import { toast } from "sonner";
import * as z from "zod";
import UploadFile from "../upload-file/UploadFile";
import "./style.css";

// ReactQuill
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});
// This modules object configures editor features like toolbar
const modules = {
  // toolbar what tools appear in the UI
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["link", "image"],
  ],
};

// Defines what is preserved in the content when editing
// (The functionality of the toolbar tools)
const formats = [
  "header",
  "bold",
  "color",
  "background",
  "italic",
  "underline",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "align",
  "size",
  "link",
  "image",
];

// blog Schema
const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "category is required"),
  content: z.string().min(1, "Content is required"),
  coverImage: z.string().min(1, "Image is required"),
});

// isSuspiciousContent
const isSuspiciousContent = (data) => {
  const suspiciousPatters = [
    /<scrip>/i,
    /javaScript:/i,
    /onload=/i,
    /onclick=/i,
    /'.*OR.*'/i,
    /UNION SELECT/i,
  ];
  return suspiciousPatters.some((pattern) => pattern.test(data.content));
};

// WriteBlogForm component
export default function WriteBlogForm({ user }) {
  const [isLoading, setIsLoading] = useState(false);
  const quillRef = useRef(null);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
      coverImage: "",
    },
  });
  const title = watch("title");
  const content = watch("content");
  const category = watch("category");
  const coverImage = watch("coverImage");

  const onBlogSubmit = async (data) => {
    const cleanContent = data.content.replace(/<p><br><\/p>/g, "").trim();

    if (!cleanContent) {
      toast.error("Content is required");
      return;
    }

    setIsLoading(true);
    try {
      const isSuspiciousInput = isSuspiciousContent(data);
      const result = await fetch("/api/create-blog-post", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-arcjet-suspicious": isSuspiciousInput.toString(),
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      console.log(data);

      if (result.success) {
        toast.success("Success", {
          description: result.success,
        });
        router.push("/");
      }
    } catch (error) {
      toast.error("Error", {
        description: "Some error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isBtnDisabled = () => {
    return !title || !content || !category || !coverImage;
  };

  const isUploadingImage = !coverImage;

  return (
    <>
      <main className="mx-auto mt-10 mb-12 max-w-350 px-10 md:px-24">
        <div>
          <form onSubmit={handleSubmit(onBlogSubmit)}>
            <div className="sticky top-0 flex justify-between gap-2">
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Title"
                    className="mb-8 border-0! py-5 pl-0! text-4xl! font-bold shadow-none placeholder:text-gray-500 focus-visible:ring-0!"
                  />
                )}
              />
              <button
                disabled={isBtnDisabled() || isUploadingImage || isLoading}
                type="submit"
                className="h-8 cursor-pointer rounded-3xl bg-indigo-500 px-4 py-1.5 text-sm text-white hover:bg-indigo-600"
              >
                {isLoading ? "Publishing..." : "Publish"}
              </button>
            </div>

            {errors.title && (
              <p className="text-sm text-red-600">{errors.title.message}</p>
            )}
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {blogCategory.map((categoryItem) => (
                      <SelectItem
                        key={categoryItem.key}
                        value={categoryItem.key}
                      >
                        {categoryItem.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            <UploadFile
              onUploadComplete={(url) => setValue("coverImage", url)}
            />

            <div className="mt-5 min-h-40 rounded-sm border border-t py-2">
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <ReactQuill
                    ref={quillRef}
                    {...field}
                    onChange={(content) => field.onChange(content)}
                    theme="bubble"
                    modules={modules}
                    formats={formats}
                    placeholder="Write something here..."
                  />
                )}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
