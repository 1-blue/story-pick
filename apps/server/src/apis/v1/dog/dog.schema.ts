import { z } from "zod";
// import { DogSchema } from "@sp/db/";

export const DogSchema = z.object({
  id: z.string(),
  name: z.string(),
  birth: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Dog = z.infer<typeof DogSchema>;
export const dogSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  birth: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});
