import z from "zod";

export const workSchema = z.object({
  name: z.string().min(1, "Name is required!!"),
  position: z.string(),
  github: z.string(),
  demo: z.string(),
  framework: z.string(),
  description: z.string(),
});
export type workDTO = z.infer<typeof workSchema>;

export const uploadWorkPicSchema = z.object({
  images: z.custom<Express.Multer.File[]>(),
  by_work: z.coerce.number(),
});
export type uploadWorkPicDTO = z.infer<typeof uploadWorkPicSchema>;
