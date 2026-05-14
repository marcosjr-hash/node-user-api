// Importa o Router do express.
// O Router serve para separar as rotas em arquivos ornanizados.
import { Router } from "express";

// Importa todas as funções do controller.
// Cada rota chama uma função diferente.
import * as userController from  "../controllers/userController.js";

// Cria uma instância do Router.
const router = Router();

// Responsável por criar usuário.
// Vai chamar o userController.create.
router.post("/usuarios", userController.create);

// Lista usuários cadastrados.
// Tambem aceita filtros pela URL
// Exemplo: GET /usuarios?name=marcos
router.get("/usuarios", userController.list);

// Atualiza usuário pelo ID.
router.put("/usuarios/:id", userController.update);

// Remove usuários pelo ID.
router.delete("/usuarios/:id", userController.remove);

// Exporta as rotas para serem usadas no app.js
export default router;