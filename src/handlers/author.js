const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ea = require('events');

console.error(ea);

// getAllauthors
module.exports.getAllauthors = async () => {
    const allAuthors = await prisma.author.findMany();
    return allAuthors;
};
