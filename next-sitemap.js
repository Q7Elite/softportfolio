/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.softspace.co.ke",
  generateRobotsTxt: true, // (optional but recommended)
  sitemapSize: 5000, // Number of URLs per sitemap file
  changefreq: "monthly", // Default change frequency for each page
  priority: 0.7, // Default priority for each page
  exclude: ["/secret-page"], // Pages to exclude from the sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.softspace.co.ke/sitemap-0.xml",
      "https://www.softspace.co.ke/sitemap-1.xml",
      // Add other sitemap URLs if you have more
    ],
  },
  transform: async (config, path) => {
    // Example of custom transformation (optional)
    return {
      loc: path, // The original path
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
