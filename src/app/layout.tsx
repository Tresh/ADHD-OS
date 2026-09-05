import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADHD OS",
  description: "An adaptive personal assistant for ADHD students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
