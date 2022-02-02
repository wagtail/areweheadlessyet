import Image from 'next/image';
import styles from './TopCTA.module.scss';

export const TopCTA = () => (
    <a
        className={styles.container}
        href="https://github.com/wagtail/wagtail/wiki/Slack"
    >
        <div>
            <Image src="/images/slack-icon.svg" alt="" width={31} height={31} />
        </div>
        <div className={styles.cta}>
            Join <strong className={styles.cta__tag}>#headless</strong> on Slack
        </div>
    </a>
);

export default TopCTA;
