import AdminLayout from '@/components/main/app-component/admin-component/adminLayout/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Vendor',
	description: 'Welcome to Next.js'
};
export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}: {
	children: React.ReactNode;
}) {
	return (
			<html>
				<body>
					<AdminLayout>{children}</AdminLayout>
				</body>
			</html>
	);
}