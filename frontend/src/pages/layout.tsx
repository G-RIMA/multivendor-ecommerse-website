import Header from '@/components/main/navigation/header.component';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-mint'>
        <Header />
        <AntdRegistry>{children}</AntdRegistry>
    </div>
  );
}