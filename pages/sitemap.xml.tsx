import { GetServerSideProps } from 'next';

import { getAreWeHeadlessYetTopicPages } from '../lib/fetch';
import { Topic } from '../components/StreamField/blocks/TopicsBlock';

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

const SiteMap = () => {
    // getServerSideProps will do the heavy lifting
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    // Fetch topic pages
    const topics = await getAreWeHeadlessYetTopicPages();

    // Generate the XML sitemap with the topics data
    const sitemap = generateSiteMap(topics);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return { props: {} };
};

export default SiteMap;
