import { Router } from "express";
import { addUser, getAllById, getAllUser } from "../controller/userController";

export const userRouter = Router();

userRouter.post("/", addUser);
userRouter.get("/", getAllUser);
userRouter.get("/:id", getAllById);

