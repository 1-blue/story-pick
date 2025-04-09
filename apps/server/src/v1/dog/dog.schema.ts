import { z } from "zod";
import { DogSchema } from "#schema/index";

export type Dog = z.infer<typeof DogSchema>;
export const dogSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  birth: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});
