import Image from 'next/image';
import styles from './FooterSlackCTA.module.scss';

export const FooterSlackCTA = () => (
    <div className={styles.container}>
        <div className={styles.emoji}>👂</div>
        <a
            className={styles.link}
            href="https://github.com/wagtail/wagtail/wiki/Slack"
        >
            <div className={styles.cta__text}>Hear the latest news…</div>
            <div className={styles.cta}>
                Join <strong className={styles.cta__tag}>#headless</strong> on
                Slack
            </div>
        </a>
    </div>
);

export default FooterSlackCTA;
