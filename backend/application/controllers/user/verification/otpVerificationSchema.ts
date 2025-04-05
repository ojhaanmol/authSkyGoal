import { z } from "zod";


export const otpVerificationSchema = z.object({
    otp: z.string(),
    identifire: z.string().min(1, "Identifier is required"),
});
