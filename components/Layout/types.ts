type LayoutProps = {
    title: string;
    lastPublishedAt: string;
    meta: { [key: string]: string | boolean | null };
    children?: React.ReactNode;
};

export default LayoutProps;
