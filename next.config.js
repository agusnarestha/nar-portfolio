/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
};

module.exports = nextConfig;
