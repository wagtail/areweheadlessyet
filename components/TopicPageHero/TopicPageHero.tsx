import Image from 'next/image';

import styles from './TopicPageHero.module.scss';
import { getTopicStatusImage } from '../../lib';
import { AreWeHeadlessYetTopicPage } from '../types';
import { HeadlessBird } from '../SVG';

export const TopicPageHero = ({
    statusColor,
    title,
    introduction,
}: AreWeHeadlessYetTopicPage) => (
    <div className={styles.hero}>
        <div className={styles.logo}>
            <HeadlessBird color="#fff" />
        </div>
        <div className={styles.hero__content}>
            <div className={styles.hero__status}>
                <Image
                    src={getTopicStatusImage(statusColor)}
                    alt=""
                    layout="responsive"
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
