// Importa a conexão do Prisma
import prisma from "../config/prismaClient.js";

// CREATE USER. Aqui ele conversa com o banco.
// O controller organiza a lógica.
export const createUser = async (userData) =>{

    // prisma.user.create() cria um usuário na tabela user.
    return await prisma.user.create({ data: userData});
}

// LIST USERS
export const listUsers = async (filters) => {

    // Pega filtros enviados a URL.
    const { email, name, age} = filters;

    // Objeto where começa vazio.
    const where = {};

    // Filtro por email exato.
    if (email) where.email = email;

    // contains procura nomes parecidos.
    // mode insentive ignora maiúsculas e minúsculas. Sem isso Marcos != marcos
    if (name){
        where.name = {contains: name, mode: "insensitive"};
    }

    // Filtra por idade.
    if (age) where.age = age;

    // findMany busca vários regitros.
    return await prisma.user.findMany({ where});
};

// UPDATE USER
export const updateUserService = async (id, data) =>{
    return await prisma.user.update({

        // Procura usuário pelo ID.
        where: {id},

        // Dados que serão alterados.
        data
    });
};

// DELETE USER
export const deleteUserService = async (id) =>{

    // Remove usuário pelo ID.
    return await prisma.user.delete({ where: {id} });
};