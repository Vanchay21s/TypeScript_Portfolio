import { Router } from "express";
import { addUser, deleteUser, getAllById, getAllUser, updateUser } from "../controller/userController";

export const userRouter = Router();

userRouter.post("/", addUser); // add user
userRouter.get("/", getAllUser); // get all user with pagination & search by id
userRouter.get("/:id", getAllById); // get user by id
userRouter.delete("/:id", deleteUser); // Change role of user 
userRouter.patch("/:id", updateUser); // get username and email 
// userRouter.patct("/:id/change_role", changeRoleUser); // Change role of user 
 
