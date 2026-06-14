import z from "zod";

export const profileSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  username: z.string().optional(),
  image: z.custom<Express.Multer.File>(),
  phone: z.string().min(1, "Phone is required"),
  email: z.email("Invalid email address").optional(),
  address: z.string(),
  about: z.string(),
  date: z.coerce.date(),
});
export type profileDTO = z.infer<typeof profileSchema>
