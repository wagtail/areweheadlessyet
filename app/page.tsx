import { getAreWeHeadlessYetHomePage, getAreWeHeadlessYetTopics } from '../lib';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import StreamField from '../components/StreamField';

export default async function Page() {

    const page = await getAreWeHeadlessYetHomePage();
    const topics = await getAreWeHeadlessYetTopics();


    return (
        <Layout
            lastPublishedAt={page.lastPublishedAt}
        >
            <HomeHero icon={page.straplineIcon} text={page.straplineText} />
            <StreamField
                body={page.body}
                topics={topics.items}
                className="container--home-page"
            />
        </Layout>
    )
}
