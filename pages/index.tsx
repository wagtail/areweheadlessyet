import type { NextPage } from 'next';
import type { AreWeHeadlessYetHomePage } from '../components/types';
import type { Topics } from '../components/StreamField/blocks/TopicsBlock';

import { getAreWeHeadlessYetHomePage, getAreWeHeadlessYetTopics } from '../lib';

import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import StreamField from '../components/StreamField';

const Home: NextPage<{ page: AreWeHeadlessYetHomePage; topics: Topics }> = ({
    page,
    topics,
}) => (
    <Layout
        title="Are we headless yet? | Wagtail"
        meta={page.meta}
        lastPublishedAt={page.lastPublishedAt}
    >
        <HomeHero icon={page.straplineIcon} text={page.straplineText} />
        <StreamField
            body={page.body}
            topics={topics.items}
            className="container--home-page"
        />
    </Layout>
);

export async function getStaticProps() {
    const page = await getAreWeHeadlessYetHomePage();
    const topics = await getAreWeHeadlessYetTopics();

    return { props: { page: page, topics: topics } };
}

export default Home;
