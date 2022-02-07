import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import HeadingSlackCTA from '../components/HeadingSlackCTA';
import FooterSlackCTA from '../components/FooterSlackCTA';
import Footer from '../components/Footer';
import Strapline from '../components/Strapline';

const Home: NextPage = ({ page }) => {
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
                        <Image
                            src="/images/headless-logo.svg"
                            alt=""
                            width={140}
                            height={160}
                        />
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

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div>
                <FooterSlackCTA />
                <Footer />
            </main>
        </div>
    );
};

async function getHomePageID() {
    const response = await fetch(
        'https://areweheadlessyet.staging.wagtail.org/api/v2/pages/?type=areweheadlessyet.AreWeHeadlessYetHomePage',
        {
            headers: {
                Authorization:
                    'Basic ' +
                    Buffer.from(`wagtailio:showmewagtailio`).toString('base64'),
            },
        },
    );
    const result = await response.json();
    return result.items[0].id;
}

export async function getStaticProps() {
    const HomePageID = await getHomePageID();
    const response = await fetch(
        `https://areweheadlessyet.staging.wagtail.org/api/v2/pages/${HomePageID}`,
        {
            headers: {
                Authorization:
                    'Basic ' +
                    Buffer.from(`wagtailio:showmewagtailio`).toString('base64'),
            },
        },
    );
    const page = await response.json();

    return { props: { page: page } };
}

export default Home;
