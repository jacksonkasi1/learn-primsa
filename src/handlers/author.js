const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

// getAllauthors

module.exports.getAllauthors = async () => {
  const allAuthors = await prisma.author.findMany()
  return allAuthors
}
