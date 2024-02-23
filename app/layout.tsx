import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import MyProfilePic from "./components/MyProfilePic";
import 'katex/dist/katex.min.css';
// import 'rehype-code-titles/rehype-code-titles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aerospace Helper",
  description: "In Thrust we trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
