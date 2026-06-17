import { Request, Response } from "express";
import { workService } from "../service/workService";
import { uploadWorkPicSchema } from "../schema/workSchema";

export const workController = {
  async getAllWork(
    req: Request<{
      page: number;
      limit: number;
    }>,
    res: Response,
  ) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 100;
    try {
      const result = await workService.getAll(page, limit);
      return res.json({
        message: "Find all work successfully.",
        status: true,
        data: result,
      });
    } catch (err: any) {
      console.error(err.message);
      return res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }
  },
};
export const workUpload = async (req: Request, res: Response) => {
  console.log("asdasd  educationControler.ts:88 - workController.ts:32")
  const reqUploads = uploadWorkPicSchema.safeParse({...req.body, images: req.files})
  
  if (!reqUploads.success) {
    return res.json({
      message: reqUploads.error.issues,
      status: false,
    });
  }
  try {
    const picture = await workService.uploadPic(reqUploads.data)
    return res.json({
        message: "OK.....picture of work",
        status: true,
        data: picture
    })
  } catch (err: any) {
    console.error(err.message)
    return res.status(200).json({
      message: "Internal Server Error",
      error: err.message
    })
  }
} 
export const workDeletePic = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try {
    const result = await workService.deleteUploadPic(id)
    return res.json({
        message: "Deleted.....picture of work",
        status: true,
        data: result
    })
  } catch (err: any) {  
    console.error(err.message)
    return res.status(200).json({
      message: "Internal Server Error",
      error: err.message
    })
  }
} 