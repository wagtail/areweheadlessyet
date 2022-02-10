import Image from 'next/image';

import statusGreen from '../../../public/images/status-green.svg';
import statusAmber from '../../../public/images/status-amber.svg';
import statusRed from '../../../public/images/status-red.svg';

import type { Topic } from './types';
import styles from './TopicsBlock.module.scss';

const StatusImages = {
    green: statusGreen,
    red: statusRed,
    amber: statusAmber,
};

export const TopicBlock = ({ title, status_color, introduction }: Topic) => (
    <div className={styles.card}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__body}>{introduction}</p>
        <div className={styles.card__status}>
            <Image src={StatusImages[status_color]} alt="" />
        </div>
    </div>
);
