import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelXOXO",
  description: "No 1 travel agency ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$ antialiased`}>{children}</body>
    </html>
  );
}
