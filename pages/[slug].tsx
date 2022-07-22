import type { NextPage } from 'next';
import type { AreWeHeadlessYetTopicPage } from '../components/types';
import type { Topic } from '../components/StreamField/blocks/TopicsBlock';

import {
    getAreWeHeadlessYetTopicPages,
    getAreWeHeadlessYetTopicPage,
} from '../lib';

import Layout from '../components/Layout';
import TopicPageHero from '../components/TopicPageHero/TopicPageHero';
import StreamField from '../components/StreamField';

const TopicPage: NextPage<{ page: AreWeHeadlessYetTopicPage }> = ({ page }) => (
    <Layout
        title={page.title}
        meta={page.meta}
        lastPublishedAt={page.lastPublishedAt}
    >
        <TopicPageHero {...page} />
        <StreamField body={page.body} className="container--topic-page" />
    </Layout>
);

export async function getStaticPaths() {
    const topics = await getAreWeHeadlessYetTopicPages();
    const paths = topics.map((topic: Topic) => ({
        params: {
            slug: topic.meta.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { [key: string]: any }) {
    const page = await getAreWeHeadlessYetTopicPage(params.slug);

    return {
        props: { page: page },
    };
}

export default TopicPage;
