import { SectionBlock, IssuesBlock, NewsBlock } from './blocks';
import { StreamFieldProps } from './types';
import styles from './StreamField.module.scss';

const TopicsBlock = () => <h2>Topics</h2>;

const BLOCKS = {
    section: SectionBlock,
    issues: IssuesBlock,
    news: NewsBlock,
    topics: TopicsBlock,
} as const;
type BlockType = keyof typeof BLOCKS;

const StreamField = ({ body }: StreamFieldProps) => {
    if (!body) {
        return null;
    }

    return (
        <>
            {body.map((block, i) => {
                const Block = BLOCKS[block.type as BlockType];
                return (
                    <div key={i} className={styles.section}>
                        <Block {...block.value} />
                    </div>
                );
            })}
        </>
    );
};

export default StreamField;
