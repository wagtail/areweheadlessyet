import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/TopCTA.module.scss';

export const TopCTA = () => (
    <div className={styles.container}>
        <span>
            <Image src="/cta-icon.svg" alt="CTA Icon" width={31} height={31} />
        </span>
        <div className={styles.cta}>
            <span>Join</span>
            <Link href="https://wagtail.io/slack/">
                <a className={styles.link}>#headless</a>
            </Link>
            <span>on Slack</span>
        </div>
    </div>
);

export default TopCTA;
