import { ServerApiVersion } from 'mongodb';

export const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
};
