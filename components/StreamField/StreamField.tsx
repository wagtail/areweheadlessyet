import { SectionBlock, IssuesBlock, NewsBlock, TopicsBlock } from './blocks';
import type { StreamFieldProps } from './types';
import styles from './StreamField.module.scss';

const BLOCKS = {
    section: SectionBlock,
    issues: IssuesBlock,
    news: NewsBlock,
} as const;
type BlockType = keyof typeof BLOCKS;

const StreamField = ({ body, topics }: StreamFieldProps) => {
    if (!body) {
        return null;
    }

    return (
        <>
            {body.map((block, i) => {
                const blockType = block.type;
                if (blockType === 'topics') {
                    return (
                        <div key={i} className={styles.section}>
                            <TopicsBlock {...block.value} topics={topics} />
                        </div>
                    );
                }
                const Block = BLOCKS[blockType as BlockType];
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
