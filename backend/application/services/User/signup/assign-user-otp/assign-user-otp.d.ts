export type OtpUser = {
    userId: string;
    otp: string;
    createdAt: string;
    expirationTime: string;
    maxRetries: number;
}

export type AssignOtpDataToUser = (otpUser: OtpUser) => Promise<void>

export type AssignUserOtp = {
    userId: string;
    otp: string;
    assignOtpDataToUser: AssignOtpDataToUser
}