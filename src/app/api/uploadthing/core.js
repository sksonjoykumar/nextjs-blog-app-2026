import { createUploadthing } from "uploadthing/next";
const f = createUploadthing();

// export const ourFileRouter = {
//   imageUploader: f({
//     image: {
//       maxFileSize: "4MB",
//       maxFileCount: 1,
//     },
//     video: {
//       maxFileSize: "200MB",
//       maxFileCount: 1,
//     },
//   }).onUploadComplete(async ({ metadata, file }) => {
//     console.log("Upload complete for userId:", metadata.userId);
//     console.log("file url", file.ufsUrl);
//   }),
// };

export const ourFileRouter = {
  mediaUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
    video: {
      maxFileSize: "200MB",
      maxFileCount: 1,
    },
  }).onUploadComplete(async ({ file }) => {
    console.log("Uploaded:", file.ufsUrl);
  }),
};
