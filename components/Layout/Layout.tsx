import Head from 'next/head';
import styles from './Layout.module.scss';
import type LayoutProps from './types';
import HeadingSlackCTA from './HeadingSlackCTA';
import FooterSlackCTA from './FooterSlackCTA';
import SubFooter from './SubFooter';
import ThemeChanger from './ThemeChanger';

const Layout = ({ title, children, lastPublishedAt }: LayoutProps) => (
    <>
        <Head>
            <title>{title}</title>
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
        <div className={styles.container}>
            <header className={styles.header}>
                <HeadingSlackCTA />
                <ThemeChanger />
            </header>
            <main className={styles.main}>
                <div className={styles.content}>{children}</div>
            </main>
            <footer className={styles.footer}>
                <FooterSlackCTA />
                <SubFooter lastPublishedAt={lastPublishedAt} />
            </footer>
        </div>
    </>
);

export default Layout;
