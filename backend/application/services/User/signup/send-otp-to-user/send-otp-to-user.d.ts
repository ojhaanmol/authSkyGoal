export type EmailUserOtpDto = { otp:string, email:string }

export type EmailUserOtp = (options: EmailUserOtpDto) => Promise<void>

export type SendOtpToUser = {
    email: string;
    otp: string;
    emailUserOtp: EmailUserOtp;
}