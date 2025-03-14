import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  basePath: isGithubPages ? '/semscholars' : '',
  // output: 'export',
};

export default nextConfig;