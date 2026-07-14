/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res2.weblium.site' },
    ],
  },
}

export default nextConfig
