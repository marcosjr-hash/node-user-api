// Importa todos os serviços do userService
import * as userService from "../services/userService.js";

// CREATE USER. Responsável por criar usuário.
export const create = async (req,res) =>{
    
    try{
        
        // req.body recebe os dados enviados pelo usuário.
        const user = await userService.createUser(req.body);

        // Retorna status 201 = criado com sucesso
        res.status(201).json(user);
    }catch (error){

        // Retorna a mensagem de erro ao criar usuário.
        res.status(400).json({error: "Erro ao criar usuário" });
    }
    };

    // LIST USERS. Lista todos os usuários. Também aceita filtros.
    export const list = async (req,res) =>{
        try{

            // req.query pega filtros pela URL.
            // Exemplo: /usuarios?name=marcos
            const users = await userService.listUsers(req.query);
            res.json(users);
        }catch (error){
            res.status(500).json({error: "Erro ao listar usuários" });
        }
    };

// UPDATE USER. Atualiza dados do usuário.
export const update = async (req,res) => {
    try{

        // Pega o id da URL.
        // Exemplo: /usuarios/123
        const {id} = req.params;

        // Verifica se o body veio vazio. Evita update sem informação nenhuma.
        if (Object.keys(req.body).length === 0){
            return res.status(400).json({error: "Nenhum dado enviado" });
        }

        // Chama o service para atualizar.
        const user = await userService.updateUserService(id, req.body);
        res.json(user);
    }catch (error){

        //P2025 é um erro do Prisma. Significa que o registro não foi encontrado.
        if (error.code === "P2025") return res.status(404).json({error: "Não encontrado" });
        res.status(500).json({error: "Erro interno"});
    }
};

// DELETE USER. Remove usuário pelo ID.
export const remove = async (req,res) => {
    try {
        await userService.deleteUserService(req.params.id);
        res.json({ message: "Usuário deletado com sucesso" });
    }catch (error){

        // Se não encontrar o usuário retorna 404.
        res.status(404).json({error: "Usuário não encontrado" });
    }
};
