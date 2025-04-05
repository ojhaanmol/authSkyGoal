import jwt from "jsonwebtoken";
import { GenerateToken } from "./issueTokens";
import { JWT_SECRET } from "./constants";

export function generateToken({ payload, expiresIn }: GenerateToken) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}
