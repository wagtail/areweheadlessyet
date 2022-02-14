import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';

import { getAreWeHeadlessYetHomePage, getAreWeHeadlessYetTopics } from '../lib';

import type { AreWeHeadlessYetHomePage } from '../components/types';
import type { Topics } from '../components/StreamField/blocks/topics_block';

import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import StreamField from '../components/StreamField';

const Home: NextPage<{ page: AreWeHeadlessYetHomePage; topics: Topics }> = ({
    page,
    topics,
}) => {
    return (
        <Layout last_published_at={page.last_published_at}>
            <HomeHero icon={page.strapline_icon} text={page.strapline_text} />
            <div className={styles.stream}>
                <StreamField body={page.body} topics={topics.items} />
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const page = await getAreWeHeadlessYetHomePage();
    const topics = await getAreWeHeadlessYetTopics();

    return { props: { page: page, topics: topics } };
}

export default Home;
