import * as userService from "../services/userService.js";

export const create = async (req,res) =>{
    try{
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }catch (error){
        res.status(400).json({error: "Erro ao criar usuário" });
    }
    };

    export const list = async (req,res) =>{
        try{
            const users = await userService.listUsers(req.query);
            res.json(users);
        }catch (error){
            res.status(500).json({error: "Erro ao listar usuários" });
        }
    };
      
export const update = async (req,res) => {
    try{
        const {id} = req.params;
        if (Object.keys(req.body).length === 0){
            return res.status(400).json({error: "Nenhum dado enviado" });
        }
        const user = await userService.updateUserService(id, req.body);
        res.json(user);
    }catch (error){
        if (error.code === "P2025") return res.status(404).json({error: "Não encontrado" });
        res.status(500).json({error: "Erro interno"});
    }
};

export const remove = async (req,res) => {
    try {
        await userService.deleteUserService(req.params.id);
        res.json({ message: "Usuário deletado com sucesso" });
    }catch (error){
        res.status(404).json({error: "Usuário não encontrado" });
    }
};
