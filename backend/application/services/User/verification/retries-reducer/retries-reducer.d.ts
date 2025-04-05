export type OtpStoreData = {
    otp: string;
    maxRetries: string;
}

export type RetriesReducer = {
    userId: string;
    decrementRetries: (userId: string) => Promise<void>;
}