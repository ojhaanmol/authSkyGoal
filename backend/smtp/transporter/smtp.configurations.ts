import { SMTP_AUTH_PASSWORD, SMTP_AUTH_USER, SMTP_HOST, SMTP_PORT } from "./constants";

export default {
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
        user: SMTP_AUTH_USER,
        pass: SMTP_AUTH_PASSWORD
    }
}