import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  //   const users = await prisma.user.findMany({
  //   });

//   const users = await prisma.user.findMany({
//     where:{
//         id:1
//     }
//   });

    //This will give the user with id=1 and populate the posts as well.
    const user = await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts:true
        }
    });
    console.log(user);
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
