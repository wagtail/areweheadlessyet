import { NextResponse } from 'next/server';
import { getAreWeHeadlessYetTopicPages } from '../../lib/fetch';
import { Topic } from '../../components/StreamField/blocks/TopicsBlock';

const generateSiteMap = (topics: Array<Topic>) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://areweheadlessyet.wagtail.org</loc>
            </url>
            ${topics
            .map(({ meta }) => {
                return `
                    <url>
                        <loc>${`https://areweheadlessyet.wagtail.org/${meta.slug}`}</loc>
                    </url>
                    `;
            })
            .join('')}
        </urlset>
    `;
};

export async function GET() {
    const topics = await getAreWeHeadlessYetTopicPages();

    // Generate the XML sitemap
    const sitemap = generateSiteMap(topics);

    // Return the sitemap as an XML response
    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}

