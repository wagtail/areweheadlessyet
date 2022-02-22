import type NewsBlockProps from './types';
import PostBlock from './blocks';

const NewsBlock = ({ title, blogPosts }: NewsBlockProps) => (
    <>
        <h2>{title}</h2>
        {blogPosts.map((blogPost, i) => {
            return <PostBlock key={i} {...blogPost.value} />;
        })}
    </>
);

export default NewsBlock;
