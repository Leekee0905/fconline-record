/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fco.dn.nexoncdn.co.kr",
        port: "/**",
      },
    ],
    formats: ["image/webp"],
  },
};

export default nextConfig;
