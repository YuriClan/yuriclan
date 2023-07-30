/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  webpack: (config) => {
    // Exclude @radix-ui/colors from being processed by Next.js CSS loader
    config.module.rules.push({
      test: /@radix-ui\/colors\/.*\.css$/,
      type: 'javascript/auto',
      loader: 'null-loader',
    });
    return config;
  },
};