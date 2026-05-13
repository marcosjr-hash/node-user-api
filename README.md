# Node User API

API REST desenvolvida com Javascript / Node.js, Express, Prisma ORM e MongoDB.

## Pré-requisitos

- Node.js instalado
- MongoDB Atlas ou MongoDB local

## Funcionalidades

- Criar usuários
- Listar usuários
- Atualizar usuários
- Remover usuários
- Filtrar usuários

## Tecnologias

- Javascript
- Node.js
- Express
- Prisma ORM
- MongoDB

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env`:

```env
DATABASE_URL="sua_url_mongodb"
```

## Executando o projeto

```bash
npm run dev
```

Servidor:
```plaintext
http://localhost:3000
```

---

# Endpoints

## Criar usuário

POST `/usuarios`

Exemplo:

```json
{
  "name": "Marcos",
  "email": "marcos@email.com",
  "age": 22
}
```

---

## Listar usuários

GET `/usuarios`

Filtro opcional:

```plaintext
/usuarios?name=marcos
```

---

## Atualizar usuário

PUT `/usuarios/:id`

---

## Deletar usuário

DELETE `/usuarios/:id`
