import type { SectionBlockProps } from './types';
import { RichTextBlock, LinkGroupBlock } from './blocks';

const SectionBlock = ({ title, content }: SectionBlockProps) => (
    <>
        <h2>{title}</h2>
        {content.map((block, i) => {
            if (block.type === 'text') {
                return <RichTextBlock key={i} {...block} />;
            }
            return <LinkGroupBlock key={i} {...block} />;
        })}
    </>
);

export default SectionBlock;
