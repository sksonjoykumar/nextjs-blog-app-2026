import { verifyAuth } from "@/src/lib/auth";
import { cookies } from "next/headers";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async (req) => {
      const token = (await cookies()).get("token")?.value;
      const user = await verifyAuth(token);
      return {
        userId: user?.userId,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log(metadata.userId);
      return { url: file.url };
    }),
};
