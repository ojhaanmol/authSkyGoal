export function Expired(expirationTime: number) {
    return +new Date() < expirationTime;
}
