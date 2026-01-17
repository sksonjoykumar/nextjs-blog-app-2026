"use client";

import { Button } from "@/components/ui/button";
import { useUploadThing } from "@/src/lib/uploadthing";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // UploadThing hook
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      console.log("Upload success:", res);
      toast.success("Image Upload successfully.", {
        description: res.success,
      });
      setFile(null);
      setPreview(null);
    },
    onUploadError: (error) => {
      console.error("Upload error:", error.message);
      toast.error("Image Upload failed!", {
        description: error.message,
      });
    },
  });

  // Dropzone
  const onDrop = useCallback((acceptedFiles) => {
    const f = acceptedFiles[0];
    if (!f) return;

    setFile(f);
    setPreview(URL.createObjectURL(f));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // Short filename
  const shortName =
    file?.name.length > 15
      ? file.name.slice(0, 10) +
        "..." +
        file.name.slice(file.name.lastIndexOf("."))
      : file?.name;

  return (
    <div className="mt-10">
      <div
        {...getRootProps()}
        className={`mx-auto  cursor-pointer rounded-md border p-2 text-center transition lg:p-8 ${
          isDragActive
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
          <div className="w-full space-y-4">
            <Image
              src={preview}
              alt="Preview"
              width={500}
              height={400}
              className="mx-auto max-h-96 w-full rounded-md border object-cover object-center"
            />
            <p className="text-sm text-gray-700">{shortName}</p>
          </div>
        )}
      </div>

      {file && (
        <div className="mt-4 flex justify-center">
          <Button
            disabled={isUploading}
            onClick={() => startUpload([file])}
            className="bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
          >
            {isUploading ? "Uploading..." : "Upload Image"}
          </Button>
        </div>
      )}
    </div>
  );
}
