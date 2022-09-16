type LayoutMeta = {
    slug: string;
    searchDescription: string;
    seoTitle?: string;
    socialImageUrl?: string;
    socialText?: string;
};

type LayoutProps = {
    title: string;
    lastPublishedAt: string;
    meta: LayoutMeta;
    children?: React.ReactNode;
};

export default LayoutProps;
