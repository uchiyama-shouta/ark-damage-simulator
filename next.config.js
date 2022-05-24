/* eslint-disable @typescript-eslint/no-var-requires */

const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  pwa: { dest: "public", runtimeCaching },
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = withPlugins([withPWA, withBundleAnalyzer], {
  ...config,
});
