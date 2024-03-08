/** @type {import('next').NextConfig} */
const nextConfig = {images: {
	remotePatterns: [
	  {
		protocol: 'https',
		hostname: 'cdn.weatherapi.com',
		port: '',
		pathname: '/weather/**',
	  },
	],
  },};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
	
//   }
  
//   module.exports = nextConfig