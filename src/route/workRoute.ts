
import { Router } from "express";
import { workController } from "../controller/workController";

export const workRoute = Router();

workRoute.get("/", workController.getAllWork)