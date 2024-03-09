import Image from 'next/image';
import Link from 'next/link';

import styles from './TopicPageHero.module.scss';
import { topicStatusImages } from '../../lib';
import { AreWeHeadlessYetTopicPage } from '../types';
import { HeadlessBird } from '../SVG';
import variables from '../../styles/variables.module.scss';

export const TopicPageHero = ({
    statusColor,
    title,
    introduction,
}: AreWeHeadlessYetTopicPage) => (
    <div className={styles.hero}>
        <div className={styles.logo}>
            <Link href="/">
                <HeadlessBird color={variables.textColor} />
            </Link>
        </div>
        <div className={styles.hero__content}>
            <div className={styles.hero__status}>
                <Image
                    src={topicStatusImages[statusColor]}
                    alt=""
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>
            <div className={styles.hero__body}>
                <h1 className={styles.hero__title}>{title}</h1>
                <p className={styles.hero__text}>{introduction}</p>
            </div>
        </div>
    </div>
);

export default TopicPageHero;
