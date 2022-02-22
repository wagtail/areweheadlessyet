import { SlackLogo } from '../../SVG';
import styles from './HeadingSlackCTA.module.scss';

export const HeadingSlackCTA = () => (
    <div className={styles.container}>
        <div className={styles.logo}>
            <SlackLogo color="#fff" />
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
