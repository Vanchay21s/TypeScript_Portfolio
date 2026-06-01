import { Router } from "express";
import { loginUser, signupUser } from "../controller/authController";

export const authRouter = Router();

authRouter.post("/signup", signupUser);
authRouter.post("/login", loginUser);
