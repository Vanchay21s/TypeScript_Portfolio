import { Router } from "express";
import { authController } from "../controller/authController";

export const authRouter = Router();

authRouter.post("/signup", authController);
