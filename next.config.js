/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withPwa = require('next-pwa');
const withAntdLess = require('next-plugin-antd-less');

module.exports = withPlugins(
  [
    [
      withPwa,
      {
        pwa: {
          dest: 'public',
          register: true,
          skipWaiting: true,
          disable: process.env.NODE_ENV === 'development',
        },
      },
    ],
    [
      withAntdLess,
      {
        modifyVars: { '@primary-color': '#009D68' },
        lessVarsFilePath: './assets/css/variables.less',
        lessVarsFilePathAppendToEndOfContent: false,
        cssLoaderOptions: {},
      },
    ],
  ],
  [
    {
      reactStrictMode: true,
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        });

        return config;
      },
    },
  ]
);
