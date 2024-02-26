import styles from './FooterSlackCTA.module.scss';

export const FooterSlackCTA = () => (
    <div className={styles.container}>
        <div className={styles.emoji} aria-hidden="true">
            👂
        </div>
        <div>
            <div className={styles.cta__text}>Hear the latest news…</div>
            <div className={styles.cta}>
                Join{' '}
                <a href="https://github.com/wagtail/wagtail/wiki/Slack">
                    <strong className={styles.cta__tag}>#headless</strong>
                </a>{' '}
                on Slack
            </div>
        </div>
    </div>
);

export default FooterSlackCTA;
