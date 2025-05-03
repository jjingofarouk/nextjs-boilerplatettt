import { writeFileSync } from 'fs';
import { prisma } from '@/lib/prisma';

async function generateSitemap() {
  const opportunities = await prisma.opportunity.findMany();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://opportunitiesforall.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  ${opportunities
    .map(
      (opp) => `
  <url>
    <loc>https://opportunitiesforall.com/opportunities/${opp.id}</loc>
    <lastmod>${opp.updatedAt.toISOString()}</lastmod>
  </url>`
    )
    .join('')}
</urlset>`;

  writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap().catch((e) => console.error(e)).finally(() => prisma.$disconnect());
