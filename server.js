// Importa a aplicação principal que está dentro da pasta src
import app from "./src/app.js";

// Define a porta onde o servidor vai rodar
const PORT = 3000;

// Inicia o servidor
app.listen(PORT, () =>{

  // Mensagem exibida no terminal quando o servidor ligar
  console.log(`Sistema rodando na porta ${PORT}`);
});