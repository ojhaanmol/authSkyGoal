import decrementRetries from "../../../../db/repo/User/Otp/decrementRetries";
import retriesReducer from "../../../services/User/verification/retries-reducer";
import { EmailOtpVerificationError } from "../../../services/User/verification/verify-otp";
import { OTP_INVALID_MESSAGE } from "../../../services/User/verification/verify-otp/constants";

export async function reduceRetry(error: unknown, userId: string) {
    if (error instanceof EmailOtpVerificationError)
        if (error.message === OTP_INVALID_MESSAGE)
            retriesReducer({ userId, decrementRetries });
}
