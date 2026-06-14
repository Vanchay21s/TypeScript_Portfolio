import { Request, Response } from "express";
import { educationSchema } from "../schema/educationSchema";
import { educationService } from "../service/eductionService";

export const addEducation = async (req: Request, res: Response) => {
  const education = educationSchema.safeParse({ ...req.body, image: req.file });
  if (!education.success) {
    return res.json({
      message: education.error.issues,
      status: false,
    });
  }
  try {
    const result = await educationService.create(education.data)
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
export const getAllEducation= async (req: Request, res: Response) => {
  try {
    const profile = await educationService.find()
    console.log(profile)
    return res.json({
      message: "Gel all profile successfully...",
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
export const getEducationById = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try{
    const profile = await educationService.findOne(id)
    return res.json({
      message: "Get all education successfully...",
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
export const updateEducation = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const reqProfile = educationSchema.safeParse({...req.body, image: req.file})
  if(!reqProfile.success){
    return res.json({
      message: reqProfile.error.issues,
      status: false
    })
  }
  try {
    const profile = await educationService.updateOne(id, reqProfile.data);
    return res.json({
      message: "updated education successfully...",
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