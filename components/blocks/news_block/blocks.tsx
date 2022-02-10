import type { BlogPostValue } from './types';
import styles from './NewsBlock.module.scss';

const DateOptions = { year: 'numeric', month: 'long', day: 'numeric' } as const;

const formatDate = (date: string) => {
    const dateObject = new Date(date);
    return new Intl.DateTimeFormat(undefined, DateOptions).format(dateObject);
};

export const PostBlock = ({
    date,
    title,
    url,
    introduction,
}: BlogPostValue) => (
    <div className={styles.card}>
        <span className={styles.card__date}>{formatDate(date)}</span>
        <h3 className={styles.card__title}>
            <a href={url}>{title}</a>
        </h3>
        <p className={styles.card__body}>{introduction}</p>
    </div>
);

export default PostBlock;
