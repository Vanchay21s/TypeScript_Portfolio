import z from "zod"

export const skillSchema = z.object({
    name: z.string().min(1, "name is required."),
    logo_url: z.string(),
    rating: z.coerce.number()
})
export type skillDTO = z.infer<typeof skillSchema>