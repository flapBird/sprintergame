/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  // Proxy the SWF file so Ruffle loads it from the same origin, avoiding CORS
  async rewrites() {
    return [
      {
        source: '/game/sprinter.swf',
        destination: 'https://f.kbhgames.com/2018/08/sprinter.swf',
      },
    ];
  },
};

module.exports = nextConfig;
