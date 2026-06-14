import { Router } from "express";
import upload from "../middleware/upload";
import { addEducation, educationUpload, getAllEducation, getEducationById, updateEducation } from "../controller/educationControler";

export const educationRouter = Router();

educationRouter.post("/uploads", upload.array('images', 4), educationUpload);
educationRouter.post("/", upload.single('image'), addEducation);
educationRouter.get("/", getAllEducation);
educationRouter.get("/:id", getEducationById);
educationRouter.patch("/:id", upload.single('image'), updateEducation);

