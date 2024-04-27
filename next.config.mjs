/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com' , 'img.clerk.com' , 'asset.cloudinary.com' , 'images.unsplash.com' ],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'res.cloudinary.com'
            },
            {
                protocol:'https',
                hostname:'img.clerk.com'
            },
            {
                protocol:'https',
                hostname:'asset.cloudinary.com'
            },
            {
                protocol:'https',
                hostname:'images.unsplash.com'
            },
            
        ]
    }
};

export default nextConfig;
