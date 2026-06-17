import z from "zod";

export const toolSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  by_technology: z.coerce.number().min(1, "id of technology is required"),
});
export type toolDTO = z.infer<typeof toolSchema>;
