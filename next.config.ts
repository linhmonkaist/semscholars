import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  assetPrefix: isGitHubPages ? 'https://linhmonkaist/semscholars': '',
  basePath: isGitHubPages ? '/semscholars' : '',
  // assetPrefix: isGithubPages ? '/semscholars/' : '',

};

export default nextConfig;
