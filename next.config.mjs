/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react", "react-icons"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig