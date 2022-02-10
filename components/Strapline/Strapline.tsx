import styles from './Strapline.module.scss';
import type { StraplineProps } from './types';

export const Strapline = ({ icon, text }: StraplineProps) => (
    <div className={styles.strapline}>
        <strong className={styles.strapline__icon}>
            {icon === 'thumbs up' ? '👍 Yes!' : '👎 No!'}
        </strong>
        <div
            className={styles.strapline__text}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    </div>
);

export default Strapline;
