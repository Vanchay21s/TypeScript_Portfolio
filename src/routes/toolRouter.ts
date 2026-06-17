import { Router } from "express"; 
import { addTool, deleteTool, getTool, getToolById } from "../controller/toolController";

export const toolRouter = Router();
toolRouter.post("/", addTool);
toolRouter.get("/", getTool);
toolRouter.get("/:id", getToolById);
toolRouter.delete("/:id", deleteTool);