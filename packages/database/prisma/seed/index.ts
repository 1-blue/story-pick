import { PrismaClient } from "@sp/db";

import { seedUsers } from "./users";

const prisma = new PrismaClient();

async function main() {
  console.group();
  console.log(`🚀 Start seeding 🚀`);

  console.log(`✅ seeding to users ...`);
  await prisma.user.createMany({
    data: seedUsers,
    skipDuplicates: true,
  });

  console.log(`🚀 Seeding finished 🚀`);
  console.groupEnd();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
