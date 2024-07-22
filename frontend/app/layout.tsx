import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:8080"),
  title: {
    default: "Blog",
    template: "%s | Blog",
  },
  description: "Family blog with photos",
  openGraph: {
    title: "Blog",
    description: "Family blog with photos",
    type: "website",
    locale: "en_US",
    url: "http://localhost:8080",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className="container py-8 mx-auto">{children}</body>
      </html>
  );
}
