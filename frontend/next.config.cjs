const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    test: /\.(ts)x?$/,
    images: {
      unoptimized: true,
    },
    output: "export",
    distDir: "out",
    assetPrefix:"",
    transpilePackages: [ 'antd', '@ant-design', 'rc-util', 'rc-pagination', 'rc-picker', 'rc-notification', 'rc-tooltip' ],
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
}
module.exports = nextConfig