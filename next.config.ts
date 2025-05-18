import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "paulomoraesadv.com.br",
          },
        ],
        destination: "https://www.paulomoraesadv.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;