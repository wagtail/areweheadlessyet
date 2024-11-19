import type { Topic } from '../../components/StreamField/blocks/TopicsBlock';
import { getAreWeHeadlessYetTopicPages, getAreWeHeadlessYetTopicPage } from '../../lib';
import Layout from '../../components/Layout';
import TopicPageHero from '../../components/TopicPageHero/TopicPageHero';
import StreamField from '../../components/StreamField';
import { Metadata } from 'next';

export default async function TopicPage({ params }: { params: { slug: string } }) {
    const page = await getAreWeHeadlessYetTopicPage(params.slug);


    return (
        <Layout lastPublishedAt={page.lastPublishedAt}>
            <TopicPageHero {...page} />
            <StreamField body={page.body} className="container--topic-page" />
        </Layout>
    );
}

export async function generateStaticParams() {
    const topics = await getAreWeHeadlessYetTopicPages();
    return topics.map((topic: Topic) => ({
        slug: topic.meta.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const page = await getAreWeHeadlessYetTopicPage(params.slug);

    if (!page) {
        return {
            title: 'Not Found',
        };
    }

    return {
        title: page.title,
        openGraph: {
            title: page.title,
        },
    };
}
