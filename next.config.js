/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
				pathname: "/JAHMD/Blog-posts/main/images/**",
			},
		],
	},
};

module.exports = nextConfig;
