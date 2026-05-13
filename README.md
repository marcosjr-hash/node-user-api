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
npx prisma generate
```

## Configuração

Crie um arquivo `.env`:

```env
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/database"
```

## Executando o projeto

```bash
npm start
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

Retorna todos os usuários cadastrados.

### Exemplo de requisição

```plaintext
/usuarios
```

### Filtros opcionais

É possível filtrar usuários utilizando query params.

#### Filtrar por nome

```plaintext
/usuarios?name=marcos
```

#### Filtrar por email

```plaintext
/usuarios?email=marcos@email.com
```

#### Filtrar por idade

```plaintext
/usuarios?age=22
```

### Exemplo de resposta

```json
[
  {
    "id": "685f4f8a1b2c3d4e5f6g7h8",
    "name": "Marcos",
    "email": "marcos@email.com",
    "age": 22
  }
]
```

## Atualizar usuário

PUT `/usuarios/:id`

Exemplo:

```json
{
  "name": "Marcos Junior",
  "email": "marcos@email.com",
  "age": 23
}
```

## Deletar usuário

DELETE `/usuarios/:id`

Resposta:

```json
{
  "message": "Usuário deletado com sucesso"
}
```
