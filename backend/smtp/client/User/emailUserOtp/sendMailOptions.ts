import { SMTP_AUTH_USER, SEND_OTP_SUBJECT } from "./constants";
import generateHtml from "./generateHtml";
import { SendOtp } from "./sendOtp";

export function sendMailOptions({ email, otp }: SendOtp) {
    return {
        from: SMTP_AUTH_USER,
        to: email,
        subject: SEND_OTP_SUBJECT,
        html: generateHtml(otp)
    };
}
