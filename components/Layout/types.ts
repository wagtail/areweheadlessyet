import { AreWeHeadlessYetPageMeta } from '../types';

type LayoutProps = {
    title: string;
    lastPublishedAt: string;
    meta: AreWeHeadlessYetPageMeta;
    children?: React.ReactNode;
};

export default LayoutProps;
