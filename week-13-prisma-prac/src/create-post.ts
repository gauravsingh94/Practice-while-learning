import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data:{
        title:"Learning Prisma",
        content:"Have to give GSOC 24",
        published:true,
        author:{
            connect:{
                id:1
            }
        }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
