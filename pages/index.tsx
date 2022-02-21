import type { NextPage } from 'next';
import type { AreWeHeadlessYetHomePage } from '../components/types';
import type { Topics } from '../components/StreamField/blocks/topics_block';

import { getAreWeHeadlessYetHomePage, getAreWeHeadlessYetTopics } from '../lib';

import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import StreamField from '../components/StreamField';

const Home: NextPage<{ page: AreWeHeadlessYetHomePage; topics: Topics }> = ({
    page,
    topics,
}) => {
    return (
        <Layout
            title="Are we headless yet? | Wagtail"
            last_published_at={page.last_published_at}
        >
            <HomeHero icon={page.strapline_icon} text={page.strapline_text} />
            <StreamField body={page.body} topics={topics.items} />
        </Layout>
    );
};

export async function getStaticProps() {
    const page = await getAreWeHeadlessYetHomePage();
    const topics = await getAreWeHeadlessYetTopics();

    return { props: { page: page, topics: topics } };
}

export default Home;
