import { Request, Response } from "express";
import { registerSchema } from "../schema/userSchema";
import { authService } from "../service/authService";

export const authController = async (req: Request, res: Response) => {
  const result = registerSchema.safeParse(req.body);
  console.log(result)
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
