import { Inter } from "next/font/google";
import CommonLayout from "../components/layout/layout";
import "./globals.css";

export const metadata = {
  title: "Write",
  description: "Write is a blog app",
};

const inter = Inter();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
