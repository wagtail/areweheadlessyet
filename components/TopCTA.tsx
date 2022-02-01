import Image from 'next/image';
import styles from '../styles/TopCTA.module.scss';

export const TopCTA = () => (
    <div className={styles.container}>
        <div>
            <Image
                src="/images/cta-icon.svg"
                alt="CTA Icon"
                width={31}
                height={31}
            />
        </div>
        <div className={styles.cta}>
            Join{' '}
            <a href="https://wagtail.io/slack/" className={styles.link}>
                #headless
            </a>{' '}
            on Slack
        </div>
    </div>
);

export default TopCTA;
