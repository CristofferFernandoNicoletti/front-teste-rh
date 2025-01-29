/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  
  // Otimizações de produção
  swcMinify: true, // Usa o minificador SWC (mais rápido que Terser)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs em produção
  },
  experimental: {
    optimizeCss: true, // Otimiza CSS
    optimizePackageImports: ['lucide-react'], // Otimiza imports de pacotes grandes
  },
};

module.exports = nextConfig;
