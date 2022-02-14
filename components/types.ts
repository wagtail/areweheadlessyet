import type { IconChoice } from './Strapline';

export default interface StreamFieldBlock {
    type: string;
    value: any;
    id: string;
}

export interface AreWeHeadlessYetHomePage {
    id: number;
    meta: { [key: string]: string | boolean | null };
    title: string;
    last_published_at: string;
    strapline_icon: IconChoice;
    strapline_text: string;
    body: Array<StreamFieldBlock>;
}
