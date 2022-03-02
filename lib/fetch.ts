import humps from 'humps';

/**
 * Helper to fetch data from Wagtail's API.
 * @param path - URl path.
 * @param params - Mapping of query parameters.
 */
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

/**
 * Retrieves the ID of the AreWeHeadless home page for further API querying.
 */
async function getAreWeHeadlessYetHomePageID() {
    const response = await fetchHelper('', {
        type: 'areweheadlessyet.AreWeHeadlessYetHomePage',
    });
    const result = await response.json();
    if (result.items.length === 0) {
        throw new Error("Failed to fetch AreWeHeadlessYet home page's ID.");
    }
    return result.items[0].id;
}

/**
 * Retrieves the AreWeHeadlessYet home page.
 */
export async function getAreWeHeadlessYetHomePage() {
    const homePageID = await getAreWeHeadlessYetHomePageID();
    let response = await fetchHelper(homePageID, {});
    response = await response.json();
    return humps.camelizeKeys(response);
}

/**
 * Retrieves all topics defined in the AreWeHeadlessYet backend.
 */
export async function getAreWeHeadlessYetTopics() {
    let response = await fetchHelper('', {
        type: 'areweheadlessyet.AreWeHeadlessYetTopicPage',
        fields: 'title,status_color,introduction',
    });
    response = await response.json();
    return humps.camelizeKeys(response);
}
