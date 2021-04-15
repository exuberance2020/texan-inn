import * as contentful from 'contentful'

const ACCESS_TOKEN = "2qyyUFwmtJM82wDY8aB6aw7BJFFDK-MeGAs5vj_w2_0";
const ENVIRONMENT = "master"
const SPACE = "3efb8swed7i7"

export const client = create()

export function create(options = {}) {
    const {
        space = SPACE,
        accessToken = ACCESS_TOKEN,
        environment = ENVIRONMENT
    } = options;

    const client = contentful.createClient({
        space,
        accessToken,
        environment
    });

    return client
}

export async function Assets(params) {
    const response = await client.getEntries({ content_type: "imageAssets", ...params })
    const { items } = response

    return items
}