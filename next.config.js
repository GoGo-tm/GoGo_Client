/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withLess = require('next-with-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * 차후 pwa도 swc로 마이그레이션 예정
 */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true,
      pure: true,
    },
  },
  images: {
    domains: [
      'www.forest.go.kr',
      'gogo-s3-bucket.s3.ap-northeast-2.amazonaws.com',
      'img.youtube.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/server/:path*',
        destination: 'http://3.38.224.88:8080/:path*',
      },
    ];
  },
  webpack(config, { dev, isServer }) {
    const prod = process.env.NODE_ENV === 'production';
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    if (!dev) config.devtool = isServer ? false : 'nosources-source-map';

    return {
      ...config,
      mode: prod ? 'production' : 'development',
    };
  },
};

module.exports = async (phase, { defaultConfig }) =>
  withPlugins(
    [
      withBundleAnalyzer,
      [
        withLess,
        {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': '#009D68' },
              lessVarsFilePath: './assets/css/variables.less',
              lessVarsFilePathAppendToEndOfContent: false,
            },
          },
        },
      ],
    ],
    nextConfig
  )(phase, { ...defaultConfig, ...nextConfig });
