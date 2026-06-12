import z from "zod"

export const educationSchema = z.object({
    name: z.string(),
    major: z.string().optional(),
    gpa: z.string().optional(),
    date_start: z.date().optional(),
    date_end: z.date().optional(),
    logo: z.custom<Express.Multer.File>
})
export type educationDTO = z.infer<typeof educationSchema>