import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import TopCTA from '../components/TopCTA';
import BottomCTA from '../components/BottomCTA';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Are we headless yet? | Wagtail</title>
                <link rel="icon" href="/images/headless-logo.svg" />
                <link
                    rel="preload"
                    href="/fonts/inter/inter-medium.woff2"
                    as="font"
                    crossOrigin=""
                />
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
                <TopCTA />
                <div className={styles.hero}>
                    <div className={styles.headless_logo}>
                        <Image
                            src="/images/headless-logo.svg"
                            alt="Headless Wagtail Logo"
                            width={140}
                            height={160}
                        />
                    </div>
                    <div className={styles.hero_body}>
                        <h1 className={styles.title}>
                            Are we <br />
                            <span>headless</span> yet?
                        </h1>
                        <p className={styles.description}>
                            👍 Yes! But there&apos;s plenty we could improve for
                            Wagtail&apos;s developers
                        </p>
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
                <BottomCTA />
            </main>

            <footer className={styles.footer}>
                <div>
                    <div>
                        <span className={styles.copyright}>
                            © Are we headless yet?
                        </span>
                        <span>Updated 2022</span>
                    </div>
                    <span className={styles.delimiter}>-</span>
                    <div>
                        <Link href="https://wagtail.org/">
                            <a className={styles.link}>Wagtail</a>
                        </Link>{' '}
                        is an open source project
                    </div>
                </div>
                <div className={styles.footer_logo}>
                    <Image
                        src="/images/headless-logo.svg"
                        alt="Headless Wagtail Logo"
                        width={127}
                        height={133}
                    />
                </div>
            </footer>
        </div>
    );
};

export default Home;
