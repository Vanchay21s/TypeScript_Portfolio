import z from "zod";

export const featureSchema = z.object({
  name: z.string().min(1, "name is required"),
  description: z.string().min(1, "description is required"),
  by_work: z.coerce.number(),
});
export type featureDTO = z.infer<typeof featureSchema>;
