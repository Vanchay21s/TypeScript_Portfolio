import { Router } from "express";
import upload from "../middleware/upload";
import { addEducation, getAllEducation, getEducationById, updateEducation } from "../controller/educationControler";

export const educationRouter = Router();

educationRouter.post("/", upload.single('image'), addEducation);
educationRouter.get("/", getAllEducation);
educationRouter.get("/:id", getEducationById);
educationRouter.patch("/:id", upload.single('image'), updateEducation);
