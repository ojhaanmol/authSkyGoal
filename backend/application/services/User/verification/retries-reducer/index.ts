import { RetriesReducer } from "./retries-reducer";

export default async function retriesReducer({ userId, decrementRetries }: RetriesReducer) {
    await decrementRetries(userId);
}