export type UserOtp = {
    userId: string;
    otp: string;
    maxRetries: number,
    createdAt: string,
    expirationTime: string;
}