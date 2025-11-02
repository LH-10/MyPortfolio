/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lalit-hinduja-portfolio.vercel.app', 
  generateRobotsTxt: true,
  sitemapSize: 50000, 
  changefreq: 'monthly',

  exclude: ['/404', '/testpage','/about'], 
  

    additionalPaths: async (config) => {
    const result = [];

  

    result.push({
      loc: '/',
      lastmod: '2025-10-20',
      changefreq:'monthly',
      priority: 1.0,
    });

    result.push({
      loc: '/projects',
      lastmod: '2025-10-20',
      changefreq:'monthly',
      priority: 0.8,
    });
  
    const projects = [
      { slug: 'its-time', lastmod: '2025-09-18' },
      { slug: 'bookstore-management-app', lastmod: '2025-11-02' },
      { slug: 'hotel-room-booking-system', lastmod: '2025-11-02' },
    ];

    projects.forEach((p) => {
      result.push({
        loc: `/projects/${p.slug}`,
        lastmod: p.lastmod,
        changefreq: 'monthly',
        priority: 0.6,
      });
    });
    return result
  }
};


