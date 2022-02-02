import Image from 'next/image';
import styles from './TopCTA.module.scss';

export const TopCTA = () => (
    <div className={styles.container}>
        <div>
            <Image src="/images/slack-icon.svg" alt="" width={31} height={31} />
        </div>
        <div className={styles.cta}>
            Join{' '}
            <a
                href="https://github.com/wagtail/wagtail/wiki/Slack"
                className={styles.link}
            >
                #headless
            </a>{' '}
            on Slack
        </div>
    </div>
);

export default TopCTA;
