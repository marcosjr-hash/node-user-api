import prisma from "../config/prismaClient.js";

export const createUser = async (userData) =>{
    return await prisma.user.create({ data: userData});
}

export const listUsers = async (filters) => {
    const { email, name, age} = filters;
    const where = {};

    if (email) where.email = email;
    if (name){
        where.name = {contains: name, mode: "insensitive"};
    }
    if (age) where.age = age;

    return await prisma.user.findMany({ where});
};

export const updateUserService = async (id, data) =>{
    return await prisma.user.update({
        where: {id},
        data
    });
};

export const deleteUserService = async (id) =>{
    return await prisma.user.delete({ where: {id} });
};