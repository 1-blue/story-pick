import { Module } from "@nestjs/common";
import { TRPCModule } from "nestjs-trpc";

import { AppContext } from "./app.context";

import { PrismaModule } from "#src/prisma/prisma.module";
import { DogModule } from "#src/v1/dog/dog.module";

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: "./src/@generated",
      // TODO: 에러 메시지 처리하기
      errorFormatter: (error) => error,
      context: AppContext,
    }),

    PrismaModule,
    DogModule,
  ],
  controllers: [],
  providers: [AppContext],
})
export class AppModule {}
