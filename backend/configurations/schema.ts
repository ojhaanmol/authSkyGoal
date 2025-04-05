import { z } from "zod";

export default z.object({
    APPLICATION_PORT: z.string().transform((val) => parseInt(val, 10)).default('3000'),
    APPLICATION_HOST: z.string().default('localhost'),
    MONGO_DATABASE: z.string(),
    MONGO_CONNECTION_STRING: z.string(),
    SMTP_HOST: z.string(),
    SMTP_PORT: z.string().transform((val) => parseInt(val, 10)),
    SMTP_AUTH_USER: z.string().email(),
    SMTP_AUTH_PASSWORD: z.string(),
    JWT_SECRET: z.string()
});