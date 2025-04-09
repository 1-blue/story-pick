import { Injectable } from '@nestjs/common';
import { PrismaService } from '#src/prisma/prisma.service';

import { Dog } from './dog.schema';

@Injectable()
export class DogService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllDogs() {
    return this.prisma.dog.findMany();
  }

  async getDogById(dogId: string) {
    return this.prisma.dog.findUnique({
      where: { id: dogId },
    });
  }

  async createDog(dog: Dog) {
    return this.prisma.dog.create({
      data: {
        name: dog.name,
        birth: dog.birth,
        price: dog.price,
      },
    });
  }

  async updateDog(dogId: string, dog: Dog) {
    return this.prisma.dog.update({
      where: { id: dogId },
      data: {
        name: dog.name,
        birth: dog.birth,
        price: dog.price,
      },
    });
  }

  async deleteDog(dogId: string) {
    return this.prisma.dog.delete({
      where: { id: dogId },
    });
  }
}
