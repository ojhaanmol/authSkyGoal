import { SendOtpToUser } from "./send-otp-to-user";

export default async function sendOtpToUser({emailUserOtp, ...user}: SendOtpToUser){
    await emailUserOtp( user )
}