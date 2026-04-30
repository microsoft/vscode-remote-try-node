# Projeto 3: CRUD Completo com SQLite

Este é o projeto final e mais avançado do Guia de Revisão Backend com Node.js.
Ele une tudo o que aprendemos (Express, HTML estático) e adiciona persistência de dados local usando SQLite.

## 🎯 Objetivos de Aprendizado
- Conectar uma aplicação Node.js a um banco de dados local SQLite
- Usar variáveis de ambiente (`.env`) para definir o caminho do banco
- Implementar as 4 operações fundamentais de banco de dados (CRUD):
  - **C**reate (Inserir dados)
  - **R**ead (Ler/Listar dados)
  - **U**pdate (Atualizar dados existentes)
  - **D**elete (Remover dados)
- Criar uma interface estática responsiva com o template Forge
- Usar fetch para conectar o frontend à API REST do backend
- Lidar com operações assíncronas (`async/await`) no Express

## ⚙️ Pré-requisitos (SQLite)

Para este projeto funcionar, você só precisa ter o Node.js instalado. O arquivo SQLite será criado automaticamente em `data/database.sqlite`.

Se quiser reiniciar o banco de dados, exclua o arquivo `data/database.sqlite` e rode novamente.

## 🚀 Como Executar

1. Abra o terminal na pasta deste projeto
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Certifique-se de que o arquivo `.env` existe e contenha `SQLITE_FILE` e `PORT`.
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. Abra no navegador: `http://localhost:3000`

6. Para popular o banco com dados de exemplo:
   ```bash
   npm run seed
   ```

## 📁 Estrutura do Projeto
- `index.js`: Servidor e rotas REST CRUD
- `config/dbClient.js`: Configuração do banco SQLite local
- `scripts/seed.js`: Script para criar registros de teste na tabela `alunos`
- `views/index.html`: Página inicial do template Forge
- `views/cadastro.html`: Segunda tela de cadastro do template Forge
- `public/tooplate-forge-style.css`: CSS do template Forge
- `public/tooplate-forge-script.js`: JavaScript do template Forge
- `.env`: Configurações de ambiente, incluindo `SQLITE_FILE` e `PORT`

