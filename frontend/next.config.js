const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
		unoptimized: true
	},
  output: "export",
	distDir: 'out',
	assetPrefix: '',
	transpilePackages: [
		'antd',
		'@ant-design',
		'rc-util',
		'rc-pagination',
		'rc-picker',
		'rc-notification',
		'rc-tooltip'
	],
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	publicRuntimeConfig: {
		MAX_SIZE_IMAGE: 5 // Example value, replace with your actual configuration
	}
};
module.exports = nextConfig;