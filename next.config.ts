import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  basePath: isGithubPages ? 'https://linhmonkaist.github.io/semscholars' : '',
  // assetPrefix: isGithubPages ? '/semscholars/' : '',
  output: 'export',
};

export default nextConfig;
