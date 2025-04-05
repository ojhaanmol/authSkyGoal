import { DEFAULT_VERIFICATION_ERROR_NAME, DEFAULT_VERIFICATION_ERROR_MESSAGE, RETRIES_EXHAUSTED_MESSAGE, EXPIRED_MESSAGE, OTP_INVALID_MESSAGE, EXHAUSTED_RETRIES, EXPIRED, INVALID_OTP } from "./constants";
import { EmailOtpVerification } from "./email-otp-verification";
import { Expired } from "./Expired";
import { RetriesExhausted } from "./RetriesExhausted";
import { ValidOtp } from "./ValidOtp";

export default async function emailOtpVerification ({fetchOtpVerificationData, otp, identifire}:EmailOtpVerification){
    const { otp: validOtp, expirationTime, maxRetries } = await fetchOtpVerificationData( identifire );

    if( RetriesExhausted( +maxRetries ))
        throw new EmailOtpVerificationError(EXHAUSTED_RETRIES);
    if( Expired( +expirationTime ))
        throw new EmailOtpVerificationError(EXPIRED);
    if (!ValidOtp( {otp, validOtp} ))
        throw new EmailOtpVerificationError(INVALID_OTP);
    return validOtp;
}

export class EmailOtpVerificationError extends Error {
    constructor({exhaustedRetries=false, expired=false, invalid=false}){
        super();
        this.name = DEFAULT_VERIFICATION_ERROR_NAME;
        this.message = DEFAULT_VERIFICATION_ERROR_MESSAGE;

        if( exhaustedRetries )
            this.message = RETRIES_EXHAUSTED_MESSAGE;
        else if( expired )
            this.message = EXPIRED_MESSAGE;
        else if(invalid)
            this.message = OTP_INVALID_MESSAGE;
    }
}