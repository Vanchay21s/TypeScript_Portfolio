
import { Router } from "express";
import { workController, workDeletePic, workUpload } from "../controller/workController";
import upload from "../middleware/upload";
export const workRouter = Router();

workRouter.post("/uploads", upload.array('images', 4), workUpload);
workRouter.delete("/remove_upload/:id", workDeletePic);
workRouter.get("/", workController.getAllWork)