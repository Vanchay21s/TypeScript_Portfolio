import z from "zod"
export const uploadWorkPicSchema = z.object({
    images: z.custom<Express.Multer.File[]>(),
    by_work: z.coerce.number()
})
export type uploadWorkPicDTO = z.infer<typeof uploadWorkPicSchema>