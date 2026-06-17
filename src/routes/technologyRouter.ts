import { Router } from "express";
import { addTechnology, deleteTechnology, getTechnology, getTechnologyById } from "../controller/technologyController";

export const technologyRouter = Router();
technologyRouter.post("/", addTechnology);
technologyRouter.get("/", getTechnology);
technologyRouter.get("/:id", getTechnologyById);
technologyRouter.delete("/:id", deleteTechnology);