'use client';

import React from 'react';
import { Table, Empty, Pagination } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface TableItem {
	key: string | number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

interface TableProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	columns: any;
	align?: 'start' | 'center' | 'end';
	data: TableItem[];
	onChange?: (currentPage: number) => void;
	totalData?: number;
	initialPage?: number;
	loading?: boolean;
	className?: string;
}

const DynamicTableComponent: React.FC<TableProps> = ({
	columns,
	data,
	onChange,
	totalData,
	align = 'end',
	initialPage,
	loading = false,
	className
}) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	return (
		<>
			<Table
				className={className}
				columns={columns}
				dataSource={data}
				loading={loading}
				pagination={false}
				locale={{ emptyText: <Empty description='No data available' /> }}
			/>

			<Pagination
				align={align}
				total={totalData}
				showSizeChanger={false}
				onChange={currentPage => {
					const params = new URLSearchParams(searchParams.toString());
					params.set('page', String(Number(currentPage)));
					router.push(`${pathname}?${params.toString()}`);
					onChange && onChange(currentPage);
				}}
				current={initialPage}
			/>
		</>
	);
};

export default DynamicTableComponent;