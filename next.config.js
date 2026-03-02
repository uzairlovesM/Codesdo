module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'another-example.com'], // Add image domains
  },
  async headers() {
    return [
      {
        // This will enable security headers
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
  env: {
    MY_API_KEY: process.env.MY_API_KEY, // Set up environment variables
  },
};
