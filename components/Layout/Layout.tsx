import styles from './Layout.module.scss';
import type LayoutProps from './types';
import HeadingSlackCTA from './HeadingSlackCTA';
import FooterSlackCTA from './FooterSlackCTA';
import SubFooter from './SubFooter';
import ThemeChanger from './ThemeChanger';

const Layout = ({ children, lastPublishedAt }: LayoutProps) => (
    <>
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
