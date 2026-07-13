import { Router } from "express";
import upload from "../middleware/upload";
import { addEducation, deteleEducation, educationDeleteUploads, educationUpload, getAllEducation, getEducationById, updateEducation } from "../controller/educationControler";

export const educationRouter = Router();

educationRouter.post("/", upload.single('logo'), addEducation);
educationRouter.delete("/remove_upload/:id", educationDeleteUploads);
educationRouter.get("/", getAllEducation);
educationRouter.get("/:id", getEducationById);
educationRouter.patch("/:id", upload.single('logo'), updateEducation);
educationRouter.delete("/:id", deteleEducation);
educationRouter.post("/uploads", upload.array('images', 4), educationUpload);

