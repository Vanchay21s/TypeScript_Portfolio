import z from "zod";

export const technologySchema = z.object({
  name: z.string().min(1, "name is required"),
  by_work: z.coerce.number().min(1, "id of work is required"),
});
export type technologyDTO = z.infer<typeof technologySchema>;
