/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'images.app.goo.gl' },
            { hostname: 'res.cloudinary.com' },
          
        ],
    },
};

export default nextConfig;