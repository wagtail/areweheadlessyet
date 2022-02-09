import StreamFieldBlock from '../../types';

export interface RichTextBlockItem extends StreamFieldBlock {
    type: 'text';
    value: string;
}

export interface LinkBlockValue {
    link: string;
    link_text: string;
}

export interface LinkBlockItem extends StreamFieldBlock {
    type: 'link';
    value: LinkBlockValue;
}

export interface LinkGroupBlockItem extends StreamFieldBlock {
    type: 'link_group';
    value: Array<LinkBlockItem>;
}

export type SectionBlockItem = RichTextBlockItem | LinkGroupBlockItem;

export type SectionBlockProps = {
    title: string;
    content: Array<SectionBlockItem>;
};
