import Image from 'next/image';
import styles from './BottomCTA.module.scss';

export const BottomCTA = () => (
    <div className={styles.container}>
        <div>
            <Image src="/images/hear.png" alt="" width={32} height={24} />
        </div>
        <div>
            <div className={styles.cta__text}>Hear the latest news…</div>
            <div className={styles.cta}>
                Join{' '}
                <a href="https://wagtail.io/slack/" className={styles.link}>
                    #headless
                </a>{' '}
                on Slack
            </div>
        </div>
    </div>
);

export default BottomCTA;
