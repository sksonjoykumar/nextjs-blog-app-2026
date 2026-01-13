"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

// blog category
const blogCategory = [
  { key: "technology", value: "Technology" },
  { key: "programming", value: "Programming" },
  { key: "webDevelopment", value: "Web Development" },
  { key: "dataScience", value: "Data Science" },
  { key: "artificialIntelligence", value: "Artificial Intelligence" },
  { key: "cyberSecurity", value: "Cyber Security" },
  { key: "cloudComputing", value: "Cloud Computing" },
  { key: "mobile Development", value: "Mobile Development" },
  { key: "devops", value: "Devops" },
  { key: "blockchain", value: "Blockchain" },
  { key: "digitalMarketing", value: "Digital Marketing" },
  { key: "videoEditing", value: "Video Editing" },
];

// blog Schema
const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "category is required"),
  content: z.string().min(1, "Content is required"),
  coverImage: z.string().min(1, "Image is required"),
});

export default function WriteBlogForm({ user }) {
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
  console.log(user);
  return (
    <>
      <main className="mt-10 px-10 md:px-24">
        <div>
          <form>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Title"
                  className="mb-8 border-0! pl-0! text-4xl! font-bold shadow-none placeholder:text-gray-400 focus-visible:ring-0!"
                />
              )}
            />
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
          </form>
        </div>
      </main>
    </>
  );
}
