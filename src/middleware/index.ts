import { NextFunction, Request, Response } from "express";


export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url} - index.ts:5`)
    next();
}
