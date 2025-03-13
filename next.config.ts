import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  basePath: isGithubPages ? '/semscholars' : '',
  output: 'export',
};

console.log('Next.js basePath:', nextConfig.basePath);

export default nextConfig;
