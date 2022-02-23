import Image from 'next/image';
import styles from './HeadingSlackCTA.module.scss';

export const HeadingSlackCTA = () => (
    <a
        className={styles.container}
        href="https://github.com/wagtail/wagtail/wiki/Slack"
    >
        <div>
            <Image src="/images/slack-logo.svg" alt="" width={31} height={31} />
        </div>
        <div className={styles.cta}>
            Join <strong className={styles.cta__tag}>#headless</strong> on Slack
        </div>
    </a>
);

export default HeadingSlackCTA;
