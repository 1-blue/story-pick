import { Router, Query, Input, Mutation } from "nestjs-trpc";
import { Inject } from "@nestjs/common";
import { z } from "zod";

import { DogService } from "./dog.service";
import { Dog, dogSchema } from "./dog.schema";

@Router({ alias: "dog" })
export class DogRouter {
  constructor(@Inject(DogService) private readonly dogService: DogService) {}

  @Query({
    output: z.array(dogSchema),
  })
  async getAllDogs(): Promise<Dog[]> {
    const dogs = await this.dogService.getAllDogs();

    return dogs;
  }

  @Query({
    input: z.object({ dogId: z.string() }),
    output: dogSchema,
  })
  async getDogById(@Input("dogId") dogId: string): Promise<Dog> {
    const dog = await this.dogService.getDogById(dogId);

    return dog;
  }

  @Mutation({
    input: dogSchema,
    output: dogSchema,
  })
  async createDog(@Input() dog: Dog): Promise<Dog> {
    const createdDog = await this.dogService.createDog(dog);

    return createdDog;
  }

  @Mutation({
    input: z.object({ dogId: z.string() }),
    output: dogSchema,
  })
  async updateDog(
    @Input("dogId") dogId: string,
    @Input() dog: Dog,
  ): Promise<Dog> {
    const updatedDog = await this.dogService.updateDog(dogId, dog);

    return updatedDog;
  }

  @Mutation({
    input: z.object({ dogId: z.string() }),
    output: dogSchema,
  })
  async deleteDog(@Input("dogId") dogId: string): Promise<Dog> {
    const deletedDog = await this.dogService.deleteDog(dogId);

    return deletedDog;
  }
}
