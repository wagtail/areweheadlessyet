import { TopicsBlockProps } from './types';
import { TopicBlock } from './blocks';
import styles from './TopicsBlock.module.scss';

const TopicsBlock = ({ title, topics }: TopicsBlockProps) => (
    <>
        <h2>{title}</h2>
        <div className={styles.grid}>
            {topics.map((topic, i) => (
                <TopicBlock key={i} {...topic} />
            ))}
        </div>
    </>
);

export default TopicsBlock;
