import Image from 'next/image';
import Link from 'next/link';

import { topicStatusImages } from '../../../../lib';

import type { Topic } from './types';
import styles from './TopicsBlock.module.scss';

export const TopicBlock = ({
    meta,
    title,
    statusColor,
    introduction,
}: Topic) => (
    <div className={styles.card}>
        <div className={styles.card__status}>
            <Image
                src={topicStatusImages[statusColor]}
                alt=""
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
        </div>
        <h3 className={styles.card__title}>
            <Link href={`/${meta.slug}`}>{title}</Link>
        </h3>
        <p className={styles.card__body}>{introduction}</p>
    </div>
);
