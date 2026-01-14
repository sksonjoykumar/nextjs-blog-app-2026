"use client";

import { Button } from "@/components/ui/button";
import { useUploadThing } from "@/src/lib/uploadthing";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadFile() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

const { startUpload, isUploading } = useUploadThing("imageUploader", {
  onClientUploadComplete: () => {
    setFile(null);
    setPreview(null);
  },
});

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [], "video/*": [] },
    maxFiles: 1,
    onDrop: (files) => {
      const f = files[0];
      console.log(files);
      setPreview(URL.createObjectURL(f));
      setFile(f);
    },
  });

  // shortName
  let fileName = file?.name;
  const shortName = fileName
    ? fileName.length > 15
      ? fileName.slice(0, 10) +
        "..." +
        fileName.slice(fileName.lastIndexOf("."))
      : fileName
    : "";

  // startUpload function
  // const startUpload =()=>{

  // }
  return (
    <div className="mt-10">
      <div
        {...getRootProps()}
        className={`mx-auto max-w-lg cursor-pointer rounded-md border p-8 text-center ${
          isDragActive
            ? "border-indigo-500 bg-blue-50"
            : "border-gray-300 bg-white"
        }`}
      >
        <input {...getInputProps()} />
        {!preview ? (
          <p className="text-gray-600">
            Drag & drop some files here, or click to select files
          </p>
        ) : (
          <div className="space-y-4">
            {file?.type.startsWith("image/") ? (
              <Image
                src={preview}
                alt="Preview"
                className="mx-auto max-h-64 w-full rounded-sm border"
                width={500}
                height={200}
              />
            ) : (
              <video
                src={preview}
                controls
                className="mx-auto max-h-64 rounded"
              />
            )}
            <p className="text-sm">{shortName}</p>
          </div>
        )}
      </div>
      {file && (
        <div className="mt-3 flex justify-center">
          <Button
            onClick={() => startUpload([file])}
            className="w-125 cursor-pointer bg-indigo-500 px-4 py-4 text-sm text-white transition-all duration-200 hover:bg-indigo-600"
          >
            Upload
          </Button>
        </div>
      )}
    </div>
  );
}
