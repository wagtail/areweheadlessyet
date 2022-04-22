import type {
    RichTextBlockItem,
    LinkBlockValue,
    LinkGroupBlockItem,
} from './types';

const RichTextBlock = ({ value }: RichTextBlockItem) => (
    // Use dangerouslySetInnerHTML for proper rendering of the 'value'
    // which is defined as a RichTextField in the backend.
    <div dangerouslySetInnerHTML={{ __html: value }} />
);

const LinkBlock = ({ link, linkText }: LinkBlockValue) => (
    <li>
        <a href={link}>{linkText}</a>
    </li>
);

const LinkGroupBlock = ({ value }: LinkGroupBlockItem) => (
    <ul>
        {value.map((block, i) => {
            return <LinkBlock key={i} {...block.value} />;
        })}
    </ul>
);

export { RichTextBlock, LinkGroupBlock };
