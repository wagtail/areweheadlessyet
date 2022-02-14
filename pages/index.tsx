import type { NextPage } from 'next';
import Image from 'next/image';

import logo from '../public/images/headless-logo.svg';
import styles from '../styles/Home.module.scss';

import { getAreWeHeadlessYetHomePage, getAreWeHeadlessYetTopics } from '../lib';

import type { AreWeHeadlessYetHomePage } from '../components/types';
import type { Topics } from '../components/StreamField/blocks/topics_block';

import Layout from '../components/Layout';
import Strapline from '../components/Strapline';
import StreamField from '../components/StreamField';

const Home: NextPage<{ page: AreWeHeadlessYetHomePage; topics: Topics }> = ({
    page,
    topics,
}) => {
    return (
        <Layout last_published_at={page.last_published_at}>
            <div className={styles.hero}>
                <div className={styles.logo}>
                    <Image src={logo} alt="" />
                </div>
                <div className={styles.hero__body}>
                    <h1 className={styles.title}>
                        Are we <br />
                        <strong className={styles.title__emphasis}>
                            headless
                        </strong>{' '}
                        yet?
                    </h1>
                    <Strapline
                        icon={page.strapline_icon}
                        text={page.strapline_text}
                    />
                </div>
            </div>
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
