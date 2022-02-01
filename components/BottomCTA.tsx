import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BottomCTA.module.scss';

export const BottomCTA = () => (
    <div className={styles.container}>
        <span>
            <Image
                src="/images/hear-icon.svg"
                alt="Hear the latest news"
                width={32}
                height={24}
            />
        </span>
        <div>
            <div className={styles.cta_text}>Hear the latest news...</div>
            <div className={styles.cta}>
                <span>Join </span>
                    <a href="https://wagtail.io/slack/" className={styles.link}>#headless</a>
                <span> on Slack</span>
            </div>
        </div>
    </div>
);

export default BottomCTA;
