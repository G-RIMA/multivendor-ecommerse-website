import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const ubuntu = Ubuntu({ weight: ["400"], subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}