import { Router } from "express";
import { addSkill, deleteSkill, getSkill, updateSkill, getOneSkill } from "../controller/skillController";

export const skillRouter = Router();

skillRouter.post("/", addSkill);
skillRouter.delete("/:id", deleteSkill);
skillRouter.get("/:id", getOneSkill);
skillRouter.get("/", getSkill);
skillRouter.patch("/:id", updateSkill);
