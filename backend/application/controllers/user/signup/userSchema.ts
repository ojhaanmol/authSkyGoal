import { z } from "zod";

export const userSchema = z.object({
    name: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    mobileNumber: z.number().transform(String),
    password: z.string(),
});
