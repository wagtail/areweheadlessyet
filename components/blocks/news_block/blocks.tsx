import { BlogPostValue } from './types';
import styles from './NewsBlock.module.scss';

export const PostBlock = ({
    date,
    title,
    url,
    introduction,
}: BlogPostValue) => (
    <div className={styles.card}>
        <span className={styles.card__date}>{date}</span>
        <h3 className={styles.card__title}>
            <a href={url}>{title}</a>
        </h3>
        <p className={styles.card__body}>{introduction}</p>
    </div>
);

export default PostBlock;
