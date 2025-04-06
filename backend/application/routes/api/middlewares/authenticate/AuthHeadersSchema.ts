import { z } from "zod";

export const AuthHeadersSchema = z.object({
    authorization: z
        .string()
        .startsWith("Bearer ")
        .transform((val) => val.split(" ")[1]),
});
