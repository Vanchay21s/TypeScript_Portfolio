import { Router } from "express";
import { addProfile, getAlllProfile, getProfileById, updateProfile } from "../controller/profileController";
import upload from "../middleware/upload";

export const profileRouter = Router();

profileRouter.post("/", upload.single('image'), addProfile);
profileRouter.get("/", getAlllProfile);
profileRouter.get("/:id", getProfileById);
profileRouter.patch("/:id", upload.single('image'), updateProfile);
