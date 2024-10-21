const { PrismaClient } = require("@prisma/client");

//const { module } = require("modules");

const prisma = new PrismaClient();

module.exports = prisma;
