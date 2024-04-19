/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	webpack: (config) => {
		return config
	},
	output: 'export',
	distDir: '../build',
}
export default nextConfig
