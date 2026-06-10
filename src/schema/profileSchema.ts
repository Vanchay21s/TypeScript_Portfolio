
import z from "zod"

export const profileSchema = z.object({
    fullname: z.string().min(1, "Full name is required"),
  username: z.string().nullable().optional(),
  image: z.string().min(1, "Image is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.email("Invalid email address"),
  address: z.string(),
  about: z.string(),
  dateStart: z.coerce.date(),
  dateEnd: z.coerce.date(),
})