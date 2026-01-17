"use client";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.bubble.css";
import "./style.css";

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
export default function ReactQuillComponent() {
  return (
    <>
      <div className="mt-5 border-t py-3 text-2xl shadow-sm rounded-sm">
        <ReactQuill
          className="text-2xl text-gray-900"
          theme="bubble"
          modules={modules}
          formats={formats}
          placeholder="Write something here..."
        />
      </div>
    </>
  );
}
