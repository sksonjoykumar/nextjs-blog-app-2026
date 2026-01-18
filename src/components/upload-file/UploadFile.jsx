"use client";

import { useUploadThing } from "@/src/lib/uploadthing";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

export default function UploadFile({ onUploadComplete }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      const imageUrl = res?.[0]?.url;

      if (imageUrl && onUploadComplete) {
        onUploadComplete(imageUrl);
      }

      toast.success("Image uploaded successfully");
      setFile(null);
      setPreview(null);
    },
    onUploadError: (error) => {
      toast.error("Upload failed", {
        description: error.message,
      });
    },
  });

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const f = acceptedFiles[0];
      if (!f) return;

      setFile(f);
      setPreview(URL.createObjectURL(f));

      // 🚀 auto upload
      await startUpload([f]);
    },
    [startUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    disabled: isUploading,
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="mt-6">
      <div
        {...getRootProps()}
        className={`cursor-pointer rounded-md border p-6 text-center transition ${
          isUploading
            ? "cursor-not-allowed opacity-60"
            : isDragActive
              ? "border-indigo-500 bg-indigo-50"
              : "border-gray-300 bg-white"
        }`}
      >
        <input {...getInputProps()} />

        {!preview ? (
          <p className="text-gray-600">
            Drag & drop an image here, or click to select
          </p>
        ) : (
          <div className="space-y-3">
            <Image
              src={preview}
              alt="Preview"
              width={500}
              height={400}
              className="mx-auto max-h-80 w-full rounded-md object-cover"
            />
            <p className="text-sm text-gray-600">
              {isUploading ? "Uploading..." : "Upload complete"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
