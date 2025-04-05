import { AssignUserOtp } from "./assign-user-otp";
import { DEFAULT_MAX_RETRIES } from "./constants";
import { getExpirationTime } from "./getExpirationTime";
import { now } from "./now";

export default async function assignUserOtp ({ assignOtpDataToUser, ...user }:AssignUserOtp){
    const createdAt = now();
    const expirationTime = +getExpirationTime( +createdAt );
    const maxRetries = DEFAULT_MAX_RETRIES;

    await assignOtpDataToUser({
        ...user,
        maxRetries,
        createdAt: ''+(+createdAt),
        expirationTime: ''+expirationTime,
    })
}