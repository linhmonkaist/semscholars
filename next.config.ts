import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  basePath: isGithubPages ? '/semscholars' : '',
  output: 'export',
};

console.log('Next.js basePath:', nextConfig.basePath);

export default nextConfig;
