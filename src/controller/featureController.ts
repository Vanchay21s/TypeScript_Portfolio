import { Request, Response } from "express";
import { featureSchema } from "../schema/featureSchema";
import { featureService } from "../service/featureService";

export const addFeature = async (req: Request, res: Response) => {
  const reqFeature = featureSchema.safeParse(req.body);
  if (!reqFeature.success) {
    return res.json({
      message: reqFeature.error.issues,
      status: false,
    });
  }
  try {
    const feature = await featureService.create(reqFeature.data);
    return res.json({
      message: "add feature succesfully.",
      status: true,
      data: feature,
    });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
export const getFeature = async (req: Request, res: Response) => {
  try {
    const feature = await featureService.find();
    console.log(feature)
    return res.json({
      message: "Get all feature succesfully.",
      status: true,
      data: feature,
    });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
// get by id
export const getFeatureById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await featureService.findOne(id);
    return res.json({
      message: `Get feature: ${result.name} successfully`,
      status: true,
      data: result,
    });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
// delete
export const deleteFeature = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const feature = await featureService.deleteOne(id);
    return res.json({
      message: "deleted feature succesfully.",
      status: true,
      data: feature,
    });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
