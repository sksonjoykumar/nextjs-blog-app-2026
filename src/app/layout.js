import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import CommonLayout from "../components/layout/layout";
import "./globals.css";

export const metadata = {
  title: "Write",
  description: "Write is a blog app",
};

const inter = Inter();

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <CommonLayout>{children}</CommonLayout>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
