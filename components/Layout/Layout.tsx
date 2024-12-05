import Head from 'next/head';
import styles from './Layout.module.scss';
import type LayoutProps from './types';
import HeadingSlackCTA from './HeadingSlackCTA';
import FooterSlackCTA from './FooterSlackCTA';
import SubFooter from './SubFooter';
import ThemeChanger from './ThemeChanger';

const Layout = ({ title, meta, lastPublishedAt, children }: LayoutProps) => (
    <>
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content={meta.searchDescription as string}
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content={`https://areweheadlessyet.wagtail.org/${
                    meta.slug !== 'are-we-headless-yet' ? meta.slug : ''
                }`}
            />
            <meta
                property="og:title"
                content={meta.seoTitle ? (meta.seoTitle as string) : title}
            />
            <meta property="og:image" content={meta.socialImageUrl as string} />
            <meta
                property="og:description"
                content={
                    meta.socialText
                        ? (meta.socialText as string)
                        : (meta.searchDescription as string)
                }
            />
            <meta
                property="og:site_name"
                content="Are We Headless Yet - Wagtail CMS"
            />

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
