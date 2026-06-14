import z from "zod"

export const educationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    major: z.string().optional(),
    gpa: z.string().optional(),
    date_start: z.string().optional(),
    date_end: z.string().optional(),
    image: z.custom<Express.Multer.File>(),
})
export type educationDTO = z.infer<typeof educationSchema>

export const uploadDegresSchema = z.object({
    images: z.custom<Express.Multer.File[]>(),
    by_education: z.coerce.number()
})
export type uploadDegresDTO = z.infer<typeof uploadDegresSchema>