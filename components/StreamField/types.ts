import StreamFieldBlock from '../types';
import type { Topic } from './blocks/TopicsBlock';

export type StreamFieldProps = {
    body: Array<StreamFieldBlock>;
    topics?: Array<Topic>;
    className: string;
};
