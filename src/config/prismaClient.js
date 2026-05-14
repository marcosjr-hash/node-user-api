// Importa o PrismaClient.
// O Prisma é quem daz a ponte Node.js -> Bando de Dados.
import pkg from "@prisma/client";

// Desestruturação. Pegamos apenas o PrismaClient.
const { PrismaClient} = pkg;

// Abre a comunicação com o banco.
const prisma = new PrismaClient();

// Exporta para usar no projeto inteiro.
export default prisma;

