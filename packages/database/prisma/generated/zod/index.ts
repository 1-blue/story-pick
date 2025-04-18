import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const DogScalarFieldEnumSchema = z.enum(['id','name','birth','price','createdAt','updatedAt']);

export const UserScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','email','password','nickname','phone','role','imagePath','provider','providerId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const UserRoleSchema = z.enum(['ADMIN','MANAGER','USER','GUEST']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export const UserProviderSchema = z.enum(['LOCAL','KAKAO','GOOGLE']);

export type UserProviderType = `${z.infer<typeof UserProviderSchema>}`

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
})

export type Dog = z.infer<typeof DogSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

/**
 * 유저 모델
 */
export const UserSchema = z.object({
  /**
   * 유저 역할
   */
  role: UserRoleSchema,
  /**
   * 유저 로그인 방식
   */
  provider: UserProviderSchema,
  /**
   * 유저 식별자
   */
  id: z.string(),
  /**
   * 생성 일자
   */
  createdAt: z.coerce.date(),
  /**
   * 수정 일자
   */
  updatedAt: z.coerce.date(),
  /**
   * 삭제 일자
   */
  deletedAt: z.coerce.date().nullable(),
  /**
   * 유저 이메일
   */
  email: z.string(),
  /**
   * 유저 비밀번호
   */
  password: z.string(),
  /**
   * 유저 닉네임
   */
  nickname: z.string(),
  /**
   * 유저 휴대폰 번호
   */
  phone: z.string().nullable(),
  /**
   * 유저 이미지 경로
   */
  imagePath: z.string().nullable(),
  /**
   * 유저 로그인 방식 식별자 ( `OAuth`인 경우 제공받는값 )
   */
  providerId: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>
