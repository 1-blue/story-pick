import { Module } from "@nestjs/common";
import { TRPCModule } from "nestjs-trpc";

import { AppContext } from "./app.context";

import { PrismaModule } from "#server/prisma/prisma.module";
import { DogModule } from "#server/apis/v1/dog/dog.module";

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: "./src/@generated",
      // TODO: 에러 메시지 처리하기
      errorFormatter: (error: any) => error,
      context: AppContext,
    }),

    PrismaModule,
    DogModule,
  ],
  controllers: [],
  providers: [AppContext],
})
export class AppModule {}
