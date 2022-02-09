import StreamFieldBlock from '../../types';

export interface BlogPostValue {
    date: string;
    title: string;
    url: string;
    introduction: string;
}

interface BlogPost extends StreamFieldBlock {
    type: 'blog_post';
    value: BlogPostValue;
}

export type NewsBlockProps = {
    title: string;
    blog_posts: Array<BlogPost>;
};

export default NewsBlockProps;
