import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  basePath: isGithubPages ? '/semscholars' : '',
  assetPrefix: isGithubPages ? '/semscholars/' : '',
  output: 'export',
};

export default nextConfig;
