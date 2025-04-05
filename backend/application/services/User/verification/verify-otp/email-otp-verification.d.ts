export type IsOtpValid= {
    validOtp: string;
    otp: string; 
}

export type OtpStoreData = {
    userId: string;
    otp: string;
    maxRetries: string;
    createdAt: string;
    expirationTime: string;
}

export type FetchOtpVerifivationData = (identifire: string) => Promise<OtpStoreData>

export type EmailOtpVerification = {
    fetchOtpVerificationData: FetchOtpVerificationData;
    otp: string;
    identifire: string,
}
