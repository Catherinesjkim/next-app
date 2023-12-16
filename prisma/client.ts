import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

// It's using this global namespace to store a single instance of Prisma.
// So, when initializing this constant `globalThis`, if there is an obj, if there's a Prisma Client in the global space, it's used, 
// otherwise, a new Prisma Client is created.  
export const prisma = globalThis.prisma ?? prismaClientSingleton()


if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

