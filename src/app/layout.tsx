import type { Metadata } from "next";
import { proximaNova } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ranchers Finest",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.className} antialiased`}>{children}</body>
    </html>
  );
}
