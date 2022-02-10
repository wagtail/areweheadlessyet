import type NewsBlockProps from './types';
import PostBlock from './blocks';

const NewsBlock = ({ title, blog_posts }: NewsBlockProps) => (
    <>
        <h2>{title}</h2>
        {blog_posts.map((post, i) => {
            return <PostBlock key={i} {...post.value} />;
        })}
    </>
);

export default NewsBlock;
