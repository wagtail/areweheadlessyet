import type { IconChoice } from './HomeHero/Strapline';
import { StatusColorChoice } from './StreamField/blocks/TopicsBlock/types';

export default interface StreamFieldBlock {
    type: string;
    value: any;
    id: string;
}

export interface AreWeHeadlessYetHomePage {
    id: number;
    meta: { [key: string]: string | boolean | null };
    title: string;
    lastPublishedAt: string;
    straplineIcon: IconChoice;
    straplineText: string;
    body: Array<StreamFieldBlock>;
}

export interface AreWeHeadlessYetTopicPage {
    id: number;
    meta: { [key: string]: string | boolean | null };
    title: string;
    lastPublishedAt: string;
    statusColor: StatusColorChoice;
    introduction: string;
    body: Array<StreamFieldBlock>;
}
