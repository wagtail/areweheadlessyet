import type IssuesBlockProps from './types';

const IssuesBlock = ({ title, summary, issues }: IssuesBlockProps) => (
    <>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {issues.map((issue, i) => {
                return (
                    <li key={i}>
                        <a href={issue.value.url}>{issue.value.title}</a>
                    </li>
                );
            })}
        </ul>
    </>
);

export default IssuesBlock;
