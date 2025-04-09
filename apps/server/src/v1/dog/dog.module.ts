import { Module } from "@nestjs/common";

import { DogService } from "./dog.service";
import { DogRouter } from "./dog.router";

@Module({
  imports: [],
  providers: [DogService, DogRouter],
})
export class DogModule {}
