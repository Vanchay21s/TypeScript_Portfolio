import { Request, Response } from "express";
import { profileSchema } from "../schema/profileSchema";
import multer from "multer";
import { profileService } from "../service/profileService";
import { date } from "zod";

export const addProfile = async (req: Request, res: Response) => {
  const profile = profileSchema.safeParse({ ...req.body, image: req.file });
  if (!profile.success) {
    return res.json({
      message: profile.error.issues,
      status: false,
    });
  }
  try {
    const result = await profileService.create(profile.data)
    return res.json({
        message: "OK.....",
        status: true,
        data: result
    })
  } catch (err: any) {
    console.error(err.message)
    return res.status(500).json({
        message: "Internal server error",
        status: false,
        error: err.message
    })
  }
};
