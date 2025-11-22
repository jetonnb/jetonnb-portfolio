import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // this replaces next export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;



