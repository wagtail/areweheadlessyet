import Image from 'next/image';
import styles from './HeadingSlackCTA.module.scss';

export const HeadingSlackCTA = () => (
    <div className={styles.container}>
        <div>
            <Image src="/images/slack-logo.svg" alt="" width={31} height={31} />
        </div>
        <div className={styles.cta}>
            Join{' '}
            <a href="https://github.com/wagtail/wagtail/wiki/Slack">
                <strong className={styles.cta__tag}>#headless</strong>
            </a>{' '}
            on Slack
        </div>
    </div>
);

export default HeadingSlackCTA;
