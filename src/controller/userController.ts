import { Request, Response } from "express";
import { userSchema } from "../schema/userSchema";
import { userService } from "../service/userService";

export const addUser = async (req: Request, res: Response) => {
  try {
    const user = userSchema.safeParse(req.body);
    if (!user.success) {
      return res.json({
        message: user.error.issues,
        status: false,
      });
    }
    const result = await userService.creat(user.data);
    if (!result) {
      return res.json({
        message: "Create user is failed...",
        status: false
      });
    }
    return res.json({
      message: "Add a new user is successfully",
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

export const getAllUser = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 100;
  const search = String(req.query.search)
  try {
    const result = await userService.getUser(page, limit, search)
    if (!result) {
      return res.json({
        message: "User not found...",
        status: false
      });
    }
    return res.json({
      message: "Get all user successfully",
      status: true,
      data: result
    });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
}
