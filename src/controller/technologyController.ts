import { Request, Response } from "express";
import { technologyService } from "../service/technologyService";
import { technologySchema } from "../schema/technologySchema";

export const addTechnology = async (req: Request, res: Response) => {
  const reqTechnology = technologySchema.safeParse(req.body);
  if (!reqTechnology.success) {
    return res.json({
      message: reqTechnology.error.issues,
      status: false,
    });
  }
  try {
    const technology = await technologyService.create(reqTechnology.data);
    return res.json({
      message: "add technology succesfully.",
      status: true,
      data: technology,
    });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
export const getTechnology = async (req: Request, res: Response) => {
  try {
    const technology = await technologyService.find();
    return res.json({
      message: "Get all technology succesfully.",
      status: true,
      data: technology,
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
export const getTechnologyById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await technologyService.findOne(id);
    return res.json({
      message: `Get technology: ${result.name} successfully`,
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
export const deleteTechnology = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const technology = await technologyService.deleteOne(id);
    return res.json({
      message: "deleted technology succesfully.",
      status: true,
      data: technology,
    });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
