import { Request, Response } from "express";
import { profileSchema, updateProfileSchema } from "../schema/profileSchema";
import multer from "multer";
import { date } from "zod";
import { profileService } from "../service/profileService";

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
export const getAlllProfile = async (req: Request, res: Response) => {
  try {
    console.log("asdasdasd")
    const profile = await profileService.find()
    console.log(profile)
    return res.json({
      message: "Gel=t all profile successfully...",
      status: true,
      data:  profile
    })
  } catch (err: any) {
    console.error(err.messagge)
    return res.status(500).json({
      message: "Internal server error",
      error: err.message
    })
  }
}
export const getProfileById = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try{
    const profile = await profileService.findOne(id)
    return res.json({
      message: "Gel=t all profile successfully...",
      status: true,
      data:  profile
    })
  }catch (err: any){
    console.error(err.message)
    return res.status(500).json({
      messgae: "Internal server error",
      error: err.message,
    })
  }
}
export const updateProfile = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const reqProfile = updateProfileSchema.safeParse({...req.body, image: req.file})
  if(!reqProfile.success){
    return res.json({
      message: reqProfile.error.issues,
      status: false
    })
  }
  try {
    const profile = await profileService.updateOne(id, reqProfile.data);
    return res.json({
      message: "Gel=t all profile successfully...",
      status: true,
      data:  profile
    })
  } catch (err: any) {
    console.error(err.message)
    res.status(500).json({
      message: "Internal server error",
      error: err.message
    })
  }
}