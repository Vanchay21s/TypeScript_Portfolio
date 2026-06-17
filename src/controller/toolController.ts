import { Request, Response } from "express";
import { toolSchema } from "../schema/toolSchema";
import { toolService } from "../service/toolService";

export const addTool = async (req: Request, res: Response) => {
  const reqTool = toolSchema.safeParse(req.body);
  if (!reqTool.success) {
    return res.json({
      message: reqTool.error.issues,
      status: false,
    });
  }
  try {
    const Tool = await toolService.create(reqTool.data);
    return res.json({
      message: "add Tool succesfully.",
      status: true,
      data: Tool,
    });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
export const getTool = async (req: Request, res: Response) => {
  try {
    const Tool = await toolService.find();
    return res.json({
      message: "Get all Tool succesfully.",
      status: true,
      data: Tool,
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
export const getToolById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await toolService.findOne(id);
    return res.json({
      message: `Get Tool: ${result.name} successfully`,
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
export const deleteTool = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const Tool = await toolService.deleteOne(id);
    return res.json({
      message: "deleted Tool succesfully.",
      status: true,
      data: Tool,
    });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
