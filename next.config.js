/**
 * @type {import('next').NextConfig}
 */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.google.com kfchinese.github.io;
  child-src *.youtube.com *.google.com *.twitter.com kfchinese.github.io;
  style-src 'self' 'unsafe-inline' *.googleapis.com kfchinese.github.io;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'kfchinese.github.io',
      'raw.githubusercontent.com',
      'avatars2.githubusercontent.com',
      'camo.githubusercontent.com',
      'avatars.githubusercontent.com'
    ]
  },
  typescript: {
    ignoreBuildErrors: true, // use with caution
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  }
};
