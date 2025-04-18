import { NestFactory } from "@nestjs/core";

import { AppModule } from "#server/app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(9500);
}
bootstrap();
