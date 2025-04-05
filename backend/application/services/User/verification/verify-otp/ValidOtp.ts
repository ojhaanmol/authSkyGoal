import { IsOtpValid } from "./email-otp-verification";

export function ValidOtp({ validOtp, otp }: IsOtpValid) {
    return validOtp === otp;
}
