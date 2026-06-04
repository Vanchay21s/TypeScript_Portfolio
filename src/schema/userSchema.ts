import { date, email, z } from "zod";
import { ro } from "zod/locales";

export const registerSchema = z.object({
  username: z.string().min(3, "Username is required & Expected string to have >=3 characters"),
  email: z.email("Email is required"),
  password: z.string().min(8, "Password is required &  The characters >=8 characters"),
  passwordConfirm: z.string().min(1, "Please confirm your password"),
})
.refine(
    (data) => data.password === data.passwordConfirm,
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"], 
    }
  );
export type registerDTO = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(8, "Password is required & Most 8 charatcers")
})
export type loginDTO = z.infer<typeof loginSchema>;

export const roleSchema = z.object({
  role: z.enum([
    "user",
    "admin",
    "editor"  
  ])
})

export const userSchema = z.object({
  username: z.string().min(3, "Username is required & Expected string to have >=3 characters"),
  email: z.email("Email is required"),
  password: z.string().min(8, "Password is required &  The characters >=8 characters"),
  passwordConfirm: z.string().min(1, "Please confirm your password"),
  role: z.string()
}).refine(
  (data) => data.password === data.passwordConfirm,
  {
      message: "Passwords do not match",
      path: ["passwordConfirm"], 
    }
)
export type userDTO = z.infer<typeof userSchema>