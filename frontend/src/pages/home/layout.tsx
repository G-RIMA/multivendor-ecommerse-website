import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";


const ubuntu = Ubuntu({ weight: ["700"], subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}