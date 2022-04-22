import StreamFieldBlock from '../../../types';

interface IssueValue {
    title: string;
    url: string;
}

interface Issue extends StreamFieldBlock {
    type: 'issue';
    value: IssueValue;
}

export type IssuesBlockProps = {
    title: string;
    summary: string;
    issues: Array<Issue>;
};

export default IssuesBlockProps;
