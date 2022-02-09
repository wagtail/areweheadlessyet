import { SectionBlockProps } from './types';
import SECTION_BLOCKS from './blocks';

const SectionBlock = ({ title, content }: SectionBlockProps) => (
    <>
        <h2>{title}</h2>
        {content.map((block, i) => {
            const Block = SECTION_BLOCKS[block.type];
            // @ts-ignore
            return <Block key={i} {...block} />;
        })}
    </>
);

export default SectionBlock;
