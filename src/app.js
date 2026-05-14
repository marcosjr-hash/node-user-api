// Importa o express 
import express from "express";

// Importa as rotas de usuário
import userRoutes from "./routes/userRoutes.js";

// Cria a aplicação
const app = express();

// Permite que a API entenda o formato JSON. Sem isso o req.body é indefinido
app.use(express.json());

// Registra as rotas. UserRoutes funciona
app.use(userRoutes);

// Exporta o app para usar no server.js
export default app;