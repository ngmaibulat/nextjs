const nextpwa = require('next-pwa');

const pwaOptions = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false,
}

const nextOptions = {
  reactStrictMode: true,
  swcMinify: true,
  images: {unoptimized: true},
  experimental: {
    outputStandalone: true
  },
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
}

nextOptions.images.unoptimized = true;

const withPWA = nextpwa(pwaOptions);


/** @type {import('next').NextConfig} */
const nextConfig = withPWA(nextOptions);

module.exports = nextConfig
