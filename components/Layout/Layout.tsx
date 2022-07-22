import Head from 'next/head';
import styles from './Layout.module.scss';
import type LayoutProps from './types';
import HeadingSlackCTA from './HeadingSlackCTA';
import FooterSlackCTA from './FooterSlackCTA';
import Footer from './Footer';
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

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/favicons/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            <link rel="shortcut icon" href="/favicons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#2b5797" />
            <meta
                name="msapplication-config"
                content="/favicons/browserconfig.xml"
            />
            <meta name="theme-color" content="#ffffff" />

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
            <main className={styles.main}>
                <ThemeChanger />
                <HeadingSlackCTA />
                <div className={styles.content}>{children}</div>
                <FooterSlackCTA />
                <Footer lastPublishedAt={lastPublishedAt} />
            </main>
        </div>
    </>
);

export default Layout;
