async function fetchHelper(path: string, params: { [key: string]: string }) {
    let headers = new Headers();
    if (process.env.INSTANCE === 'staging') {
        const auth =
            'Basic ' +
            Buffer.from(
                `${process.env.AUTH_USER}:${process.env.AUTH_PASSWORD}`,
            ).toString('base64');
        headers.append('Authorization', auth);
    }
    return await fetch(
        `${process.env.BASE_URL}api/v2/pages/${path}?` +
            new URLSearchParams(params),
        { headers: headers },
    );
}

async function getAreWeHeadlessYetHomePageID() {
    const response = await fetchHelper('', {
        type: 'areweheadlessyet.AreWeHeadlessYetHomePage',
    });
    const result = await response.json();
    return result.items[0].id;
}

const camelize = require('camelize');

export async function getAreWeHeadlessYetHomePage() {
    const HomePageID = await getAreWeHeadlessYetHomePageID();
    let response = await fetchHelper(HomePageID, {});
    response = await response.json();
    return camelize(response);
}

export async function getAreWeHeadlessYetTopics() {
    let response = await fetchHelper('', {
        type: 'areweheadlessyet.AreWeHeadlessYetTopicPage',
        fields: 'title,status_color,introduction',
    });
    response = await response.json();
    return camelize(response);
}
