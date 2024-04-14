/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: [{
            loader: '@svgr/webpack',
            options: {
              dimensions: false
            },
          }],
          as: '*.js',
        }
      },
    },
  },
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },

  // webpack(config) {
  //   // Grab the existing rule that handles SVG imports
  //   const fileLoaderRule = config.module.rules.find((rule) =>
  //     rule.test?.test?.('.svg')
  //   );

  //   config.module.rules.push(
  //     // Reapply the existing rule, but only for svg imports ending in ?url
  //     {
  //       ...fileLoaderRule,
  //       test: /\.svg$/i,
  //       resourceQuery: /url/, // *.svg?url
  //     },
  //     // Convert all other *.svg imports to React components
  //     {
  //       test: /\.svg$/i,
  //       issuer: { not: /\.(css|scss|sass)$/ },
  //       resourceQuery: { not: /url/ }, // exclude if *.svg?url
  //       loader: '@svgr/webpack',
  //       options: {
  //         dimensions: false,
  //         titleProp: true,
  //       },
  //     }
  //   );

  //   // Modify the file loader rule to ignore *.svg, since we have it handled now.
  //   fileLoaderRule.exclude = /\.svg$/i;

  //   return config;
  // },
};

module.exports = nextConfig;
