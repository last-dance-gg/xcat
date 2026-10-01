// Set by the GitHub Pages workflow. Empty for local dev and for a user site
// served from the domain root. Project sites use a path such as "/xcat".
const basePath = process.env.BASE_PATH || ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
}

export default nextConfig
