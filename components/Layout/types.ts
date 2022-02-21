import { ReactNode } from 'react';

type LayoutProps = {
    title: string;
    children?: ReactNode;
    last_published_at: string;
};

export default LayoutProps;
