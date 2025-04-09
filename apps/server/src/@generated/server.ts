import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  dog: t.router({
    getAllDogs: publicProcedure.output(z.array(z.object({
      id: z.string().optional(),
      name: z.string(),
      birth: z.coerce.date(),
      price: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getDogById: publicProcedure.input(z.object({ dogId: z.string() })).output(z.object({
      id: z.string().optional(),
      name: z.string(),
      birth: z.coerce.date(),
      price: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    createDog: publicProcedure.input(z.object({
      id: z.string().optional(),
      name: z.string(),
      birth: z.coerce.date(),
      price: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })).output(z.object({
      id: z.string().optional(),
      name: z.string(),
      birth: z.coerce.date(),
      price: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    updateDog: publicProcedure.input(z.object({ dogId: z.string() })).output(z.object({
      id: z.string().optional(),
      name: z.string(),
      birth: z.coerce.date(),
      price: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    deleteDog: publicProcedure.input(z.object({ dogId: z.string() })).output(z.object({
      id: z.string().optional(),
      name: z.string(),
      birth: z.coerce.date(),
      price: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

