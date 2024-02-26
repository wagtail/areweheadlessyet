import Head from 'next/head';
import styles from './Layout.module.scss';
import type LayoutProps from './types';
import HeadingSlackCTA from './HeadingSlackCTA';
import FooterSlackCTA from './FooterSlackCTA';
import Footer from './Footer';
import ThemeChanger from './ThemeChanger';

const Layout = ({ title, meta, lastPublishedAt, children }: LayoutProps) => {
    const metaTitle = meta.seoTitle ? meta.seoTitle : title;
    const metaDescription = meta.socialText
        ? meta.socialText
        : meta.searchDescription;
    const metaURL = `https://areweheadlessyet.wagtail.org/${
        meta.slug !== 'are-we-headless-yet' ? meta.slug : ''
    }`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={meta.searchDescription} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={metaURL} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={meta.socialImageUrl} />
                <meta
                    property="og:site_name"
                    content="Are We Headless Yet - Wagtail CMS"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={metaURL} />
                <meta property="twitter:title" content={metaTitle} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
                <meta property="twitter:image" content={meta.socialImageUrl} />

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
};

export default Layout;
