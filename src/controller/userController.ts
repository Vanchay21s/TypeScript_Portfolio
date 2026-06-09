import { Request, Response } from "express";
import { updateUserSchema, userSchema } from "../schema/userSchema";
import { userService } from "../service/userService";
import { error } from "node:console";

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
        status: false,
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
// getAllUser
export const getAllUser = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 100;
  const search = String(req.query.search);
  try {
    const result = await userService.getUser(page, limit, search);
    if (!result) {
      return res.json({
        message: "User not found...",
        status: false,
      });
    }
    return res.json({
      message: "Get all user successfully",
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
// getAllById
export const getAllById = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try {
    const result = await userService.findOne(id);
    return res.json({
      message: `Get user: ${result.username} successfully`,
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
// deleteUser
export const deleteUser = async(req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await userService.deleteOne(id)
    if(!result){
      return res.json({
      message: "Something was wrong!!!",
      status: false,
    })
    }
    return res.json({
      message: "Deleted user successfully.",
      status: true,
      data: result
    })
  } catch (err: any) {
    console.error(err.messgae)
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    })
  }
}
// updateUser
export const updateUser = async(req: Request, res: Response) => {
  const id = Number(req.params.id)
  const user = updateUserSchema.safeParse(req.body)
  if (!user.success) {
      return res.json({
        message: user.error.issues,
        status: false,
      });
    }
  try {
    const result = await userService.updateOne(id, user.data)
    return res.json({
      message: "Updated user successfully.",
      status: 200,
      data: result
    })
  } catch (err: any) {
    console.error(err.message)
    return res.status(500).json({
      message: "Internal Server error",
      error: err.message
    })
  }
}
