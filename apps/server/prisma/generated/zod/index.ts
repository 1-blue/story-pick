import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable',
]);

export const DogScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'birth',
  'price',
  'createdAt',
  'updatedAt',
]);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// DOG SCHEMA
/////////////////////////////////////////

export const DogSchema = z.object({
  id: z.string(),
  name: z.string(),
  birth: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Dog = z.infer<typeof DogSchema>;
