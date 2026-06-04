import { Router } from "express";
import { addUser } from "../controller/userController";

export const userRouter = Router();

userRouter.post("/", addUser);
