import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import logo from '../public/images/headless-logo.svg';
import styles from '../styles/Home.module.scss';

import type { AreWeHeadlessYetHomePage } from '../components/types';
import type { Topics } from '../components/blocks/topics_block';

import HeadingSlackCTA from '../components/HeadingSlackCTA';
import FooterSlackCTA from '../components/FooterSlackCTA';
import Footer from '../components/Footer';
import Strapline from '../components/Strapline';
import StreamField from '../components/StreamField/';

const Home: NextPage<{ page: AreWeHeadlessYetHomePage; topics: Topics }> = ({
    page,
    topics,
}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Are we headless yet? | Wagtail</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="/fonts/inter/inter-regular.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/inter/inter-bold.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/inter/inter-black.woff2"
                    as="font"
                    crossOrigin=""
                />
            </Head>

            <main className={styles.main}>
                <HeadingSlackCTA />
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
                <FooterSlackCTA />
                <Footer />
            </main>
        </div>
    );
};

async function fetchHelper(path: string, params: { [key: string]: string }) {
    let headers = new Headers();
    if (process.env.INSTANCE === 'staging') {
        const auth =
            'Basic ' +
            Buffer.from(
                `${process.env.AUTH_USER}:${process.env.AUTH_PASSWORD}`,
            ).toString('base64');
        headers.append('Authorization', auth);
    }
    return await fetch(
        `${process.env.BASE_URL}api/v2/pages/${path}?` +
            new URLSearchParams(params),
        { headers: headers },
    );
}

async function getAreWeHeadlessYetHomePageID() {
    const response = await fetchHelper('', {
        type: 'areweheadlessyet.AreWeHeadlessYetHomePage',
    });
    const result = await response.json();
    return result.items[0].id;
}

async function getAreWeHeadlessYetHomePage() {
    const HomePageID = await getAreWeHeadlessYetHomePageID();
    const res = await fetchHelper(HomePageID, {});
    return await res.json();
}

async function fetchTopics() {
    const response = await fetchHelper('', {
        type: 'areweheadlessyet.AreWeHeadlessYetTopicPage',
        fields: 'title,status_color,introduction',
    });
    return await response.json();
}

export async function getStaticProps() {
    const page = await getAreWeHeadlessYetHomePage();
    const topics = await fetchTopics();

    return { props: { page: page, topics: topics } };
}

export default Home;
