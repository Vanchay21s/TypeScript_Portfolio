import { Router } from "express";
import { addFeature, deleteFeature, getFeature, getFeatureById } from "../controller/featureController";

export const featureRouter = Router();

featureRouter.post("/", addFeature);
featureRouter.get("/", getFeature);
featureRouter.get("/:id", getFeatureById);
featureRouter.delete("/:id", deleteFeature);