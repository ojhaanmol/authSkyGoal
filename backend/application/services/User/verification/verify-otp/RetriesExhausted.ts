export function RetriesExhausted(retry: number) {
    return retry <= 0;
}
