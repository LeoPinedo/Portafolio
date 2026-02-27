/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Si tu repo NO se llama "leopinedo.github.io" sino ej. "Portafolio", descomenta y usa el nombre del repo:
  // basePath: process.env.GITHUB_PAGES === 'true' ? '/Portafolio' : '',
  // assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/Portafolio/' : '',
}

export default nextConfig
