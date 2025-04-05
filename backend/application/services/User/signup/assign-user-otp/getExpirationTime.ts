import { EXPIRATION_VALIDITY_IN_MINUTES } from "./constants";

export function getExpirationTime(creationTime: number) {
    const now = new Date(creationTime);
    const minutesExpiration = now.getMinutes() + EXPIRATION_VALIDITY_IN_MINUTES;
    now.setMinutes(minutesExpiration);
    return now;
}
