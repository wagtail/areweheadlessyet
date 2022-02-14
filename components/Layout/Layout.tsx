import Head from 'next/head';

import styles from './Layout.module.scss';

import type LayoutProps from './types';

import HeadingSlackCTA from './HeadingSlackCTA';
import FooterSlackCTA from './FooterSlackCTA';
import Footer from './Footer';

const Layout = ({ children, last_published_at }: LayoutProps) => (
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
            {children}
            <FooterSlackCTA />
            <Footer last_published_at={last_published_at} />
        </main>
    </div>
);

export default Layout;
