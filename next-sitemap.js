const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const policy = {
  userAgent: '*',
};

if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production') {
  policy.disallow = '/';
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/events-sitemap.xml`,
      `${siteUrl}/articles-sitemap.xml`,
      `${siteUrl}/activities-sitemap.xml`,
    ],
  },
};
