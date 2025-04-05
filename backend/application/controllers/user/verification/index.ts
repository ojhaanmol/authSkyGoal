import { Request, Response } from "express";
import emailOtpVerification, { EmailOtpVerificationError } from "../../../services/User/verification/verify-otp";
import fetchOtpVerificationData from "../../../../db/repo/User/Otp/fetchOtpVerifivationData";
import { otpVerificationSchema } from "./otpVerificationSchema";
import { expiredOtp } from "./expiredOtp";
import { VERIFICATION_SUCCESSFULL } from "./constants";
import validateUser from "../../../services/User/verification/validateUser";

export default async function verification(request: Request, response: Response) {
    let userId='';
    try {
        const { body } = request;
        
        const parseResult = otpVerificationSchema.parse(body);
        userId = parseResult.identifire;
      
        const options = { fetchOtpVerificationData, ...parseResult }
        
        await emailOtpVerification( options );

        await validateUser( parseResult.identifire )
      
        response.status(200).json({ message: VERIFICATION_SUCCESSFULL });
        
    } catch (error) {
        await expiredOtp( error, userId );
        if( error instanceof EmailOtpVerificationError )
        response.status(410).json({ error: error.message });
        
        response.status(500)
    }
}
