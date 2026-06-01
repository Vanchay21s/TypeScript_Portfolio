import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { any } from "zod";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url} - index.ts:6`);
  next();
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const SECERT = String(process.env.JWT_KEY);
  const token = req.headers.authorization?.split("")[1];
  if (!token) return res.json({ message: "No token", status: false });
  try {
    const decoded = jwt.verify(token, SECERT);
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.json({ message: "Invalid token", status: false });
  }
};
