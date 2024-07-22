/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bogatyr.club", "s1.1zoom.ru", "i.artfile.ru", "www.google.com"],
  },
  headers: () => [
    {
      source: '/articles',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
};

export default nextConfig;
