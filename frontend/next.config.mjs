/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["w.forfun.com", "bogatyr.club", "s1.1zoom.ru", "i.artfile.ru", "images.wallpaperscraft.ru", "img.goodfon.ru", "img.razrisyika.ru", "img3.fonwall.ru"],
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
