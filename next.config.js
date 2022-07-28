/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withPwa = require("next-pwa");

module.exports = withPlugins(
  [
    [
      withPwa,
      {
        pwa: {
          dest: "public",
          register: true,
          skipWaiting: true,
          // disable: process.env.NODE_ENV === "development",
        },
      },
    ],
  ],
  {
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
  }
);
