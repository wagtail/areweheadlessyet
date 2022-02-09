import StreamFieldBlock from '../../types';

type StatusColorChoice = 'red' | 'green' | 'amber';

type Topic = {
    id: number;
    meta: { [key: string]: string | boolean | null };
    title: string;
    status_color: StatusColorChoice;
    introduction: string;
    body: Array<StreamFieldBlock>;
};

type Topics = {
    meta: { total_count: number };
    items: Array<Topic>;
};

type TopicsBlockProps = {
    title: string;
    topics: Array<Topic>;
};

export type { StatusColorChoice, Topic, Topics, TopicsBlockProps };
