import { generateToken } from "./generateToken";
import { JWT_ACCESS_EXPIRES_IN } from "./constants";

export default function generateAccessToken(id: string) {
    return generateToken({ payload: { id }, expiresIn: JWT_ACCESS_EXPIRES_IN });
}
