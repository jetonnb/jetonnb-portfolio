import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // this replaces next export
  basePath: "/jetonnb-portfolio",
  assetPrefix: "/jetonnb-portfolio",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;



