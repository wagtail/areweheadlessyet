import StreamFieldBlock from '../types';
import type { Topic } from '../blocks/topics_block';

export interface StreamFieldProps {
    body: Array<StreamFieldBlock>;
    topics: Array<Topic>;
}
