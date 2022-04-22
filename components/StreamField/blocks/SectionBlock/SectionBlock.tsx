import type { SectionBlockProps } from './types';
import { RichTextBlock, LinkGroupBlock } from './blocks';

const SectionBlock = ({ title, content }: SectionBlockProps) => (
    <>
        <h2>{title}</h2>
        {content.map((block, i) =>
            block.type === 'text' ? (
                <RichTextBlock key={i} {...block} />
            ) : (
                <LinkGroupBlock key={i} {...block} />
            ),
        )}
    </>
);

export default SectionBlock;
