import { Router } from "express";
import { addUser, getAllUser } from "../controller/userController";

export const userRouter = Router();

userRouter.post("/", addUser);
userRouter.get("/", getAllUser);
