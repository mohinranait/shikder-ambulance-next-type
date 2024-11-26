/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'images.app.goo.gl' },
          
        ],
    },
};

export default nextConfig;