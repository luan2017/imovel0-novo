/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
      domains: ["links.papareact.com"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreDuringBuilds: true,
    },
    env: {
      mapbox_key: 'pk.eyJ1IjoiZmFiaWRlaWEiLCJhIjoiY2xlcmR1YmRlMGN4ajNzbmw5ZHNiY3loNiJ9.Z0LpZL5RD1iKwVJQBZl88Q'
    }
  };
  