import { Router } from "express";
import { addProfile } from "../controller/profileController";
import upload from "../middleware/upload";


export const profileRouter = Router();

profileRouter.post("/", upload.single('image'), addProfile);
