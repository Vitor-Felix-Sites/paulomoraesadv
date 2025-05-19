/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'paulomoraesadv.com.br',
          },
        ],
        destination: 'https://www.paulomoraesadv.com.br/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;