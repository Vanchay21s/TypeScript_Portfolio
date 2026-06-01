import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../schema/userSchema";
import { authService } from "../service/authService";

export const signupUser = async (req: Request, res: Response) => {
  const result = registerSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error.issues);
  }
  try {
    const user = await authService.singup(result.data);
    return res.json({
      message: "Create user successfully.",
      status: true,
      data: user,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      status: false,
    });
  }
};
export const loginUser = async (req: Request, res: Response) => {
  console.log("OK_1 - authController.ts:26");
  const user = loginSchema.safeParse(req.body);
  if (!user.success) {
    return res.status(400).json(user.error.issues);
  }
  try {
    const result = await authService.login(user.data);
    return res.json({
      message: "Login user successfully.",
      status: true,
      data: result,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      status: false,
    });
  }
};
