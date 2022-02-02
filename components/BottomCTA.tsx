import Image from 'next/image';
import styles from './BottomCTA.module.scss';

export const BottomCTA = () => (
    <a
        className={styles.container}
        href="https://github.com/wagtail/wagtail/wiki/Slack"
    >
        <div>
            <Image src="/images/hear.png" alt="" width={32} height={24} />
        </div>
        <div>
            <div className={styles.cta__text}>Hear the latest news…</div>
            <div className={styles.cta}>
                Join <strong className={styles.cta__tag}>#headless</strong> on
                Slack
            </div>
        </div>
    </a>
);

export default BottomCTA;
