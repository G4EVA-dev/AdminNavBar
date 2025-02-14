import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdminNavbar from "@/components/adminNavbar"; // Ensure the path matches your file structure

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Navbar",
  description: "Generated by Glenzzy for Team Anchor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased flex">
        <AdminNavbar />

        <main className="flex-1 m-auto text-2xl ">{children}</main>
      </body>
    </html>
  );
}
