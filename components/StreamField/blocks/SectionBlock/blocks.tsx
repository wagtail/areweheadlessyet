import type {
    RichTextBlockItem,
    LinkBlockValue,
    LinkGroupBlockItem,
} from './types';

const RichTextBlock = ({ value }: RichTextBlockItem) => (
    <div dangerouslySetInnerHTML={{ __html: value }} />
);

const LinkBlock = ({ link, link_text }: LinkBlockValue) => (
    <li>
        <a href={link}>{link_text}</a>
    </li>
);

const LinkGroupBlock = ({ value }: LinkGroupBlockItem) => (
    <ul>
        {value.map((block, i) => {
            return <LinkBlock key={i} {...block.value} />;
        })}
    </ul>
);

export const SECTION_BLOCKS = {
    text: RichTextBlock,
    link_group: LinkGroupBlock,
};

export default SECTION_BLOCKS;
