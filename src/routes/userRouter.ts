import { Router } from "express";
import { addUser, changeRoleUser, deleteUser, getAllById, getAllUser, filterByName, updateUser } from "../controller/userController";

export const userRouter = Router();

userRouter.get("/filter", filterByName) // search by name (search=vanchay)
userRouter.post("/", addUser); // add user
userRouter.get("/", getAllUser); // get all user with pagination 
userRouter.get("/:id", getAllById); // get user by id
userRouter.delete("/:id", deleteUser); // Change role of user 
userRouter.patch("/:id", updateUser); // get username and email 
 userRouter.post("/:id/change_role", changeRoleUser); // Change role of user 

 
