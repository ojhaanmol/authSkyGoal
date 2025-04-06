import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./constants";
import { AuthenticatedRequest } from "./authenticate";
import { AuthHeadersSchema } from "./AuthHeadersSchema";

export default function authenticateJWT( req: Request, res: Response, next: NextFunction) {
  const result = AuthHeadersSchema.parse(req.headers);

  const token = result.authorization;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    (req as unknown as AuthenticatedRequest).userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
