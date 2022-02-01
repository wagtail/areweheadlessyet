import Image from 'next/image';
import styles from '../styles/BottomCTA.module.scss';

export const BottomCTA = () => (
    <div className={styles.container}>
        <Image
            src="/images/hear-icon.svg"
            alt="Hear the latest news"
            width={32}
            height={24}
        />
        <div>
            <div className={styles.cta_text}>Hear the latest news...</div>
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
