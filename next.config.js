/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = withPWA({
  pwa: { dest: "public", runtimeCaching },
  ...config,
});
