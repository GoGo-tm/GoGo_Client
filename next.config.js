/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
/**
 * 차후 pwa도 swc로 마이그레이션 예정
 */
// const withPwa = require('next-pwa');

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true,
      pure: true,
    },
  },
  experimental: {
    modularizeImports: {
      antd: {
        transform: 'antd/lib/{{member}}',
      },
    },
  },
  images: {
    domains: [
      'www.forest.go.kr',
      'gogo-s3-bucket.s3.ap-northeast-2.amazonaws.com',
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
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    const plugins = [...config.plugins];
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins,
    };
  },
});

module.exports = withPlugins(
  [
    /**
     * pwa 웹팩 설정
     */
    // [
    //   withPwa,
    //   {
    //     pwa: {
    //       dest: 'public',
    //       register: true,
    //       skipWaiting: true,
    //       disable: process.env.NODE_ENV === 'development',
    //     },
    //   },
    // ],
    [
      withAntdLess,
      {
        modifyVars: { '@primary-color': '#009D68' },
        lessVarsFilePath: './assets/css/variables.less',
        lessVarsFilePathAppendToEndOfContent: false,
      },
    ],
  ],
  nextConfig
);
