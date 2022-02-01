import Image from 'next/image';
import styles from '../styles/Footer.module.scss';

export const Footer = () => (
    <footer className={styles.footer}>
        <div>
            <div>
                <span className={styles.copyright}>© Are we headless yet?</span>
                <span>Updated 2022</span>
            </div>
            <span className={styles.delimiter}>-</span>
            <div>
                <a href="https://wagtail.org/" className={styles.link}>
                    Wagtail
                </a>
                is an open source project
            </div>
        </div>
        <div className={styles.logo}>
            <Image
                src="/images/headless-logo.svg"
                alt="Headless Wagtail Logo"
                width={127}
                height={133}
            />
        </div>
    </footer>
);

export default Footer;
