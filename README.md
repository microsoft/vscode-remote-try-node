# Projeto 3: CRUD Completo com Supabase

Este é o projeto final e mais avançado do Guia de Revisão Backend com Node.js.
Ele une tudo o que aprendemos (Express, EJS) e adiciona persistência de dados real usando um banco de dados PostgreSQL hospedado no **Supabase**.

## 🎯 Objetivos de Aprendizado
- Conectar uma aplicação Node.js a um banco de dados real em nuvem
- Usar variáveis de ambiente (`.env`) para proteger credenciais sensíveis
- Implementar as 4 operações fundamentais de banco de dados (CRUD):
  - **C**reate (Inserir dados)
  - **R**ead (Ler/Listar dados)
  - **U**pdate (Atualizar dados existentes)
  - **D**elete (Remover dados)
- Reutilizar views EJS (um único formulário para criar e editar)
- Lidar com operações assíncronas (`async/await`) no Express

## ⚙️ Pré-requisitos (Configuração do Supabase)

Para este projeto funcionar, você precisa de uma conta no Supabase:

1. Crie uma conta em [supabase.com](https://supabase.com)
2. Crie um novo projeto e vá no "SQL Editor"
3. Execute o seguinte código SQL para criar a tabela necessária:
   ```sql
   CREATE TABLE alunos (
     id SERIAL PRIMARY KEY,
     nome TEXT NOT NULL,
     email TEXT,
     curso TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
   );
   ```
4. Vá em "Project Settings" > "API" e copie sua `Project URL` e `anon public key`
5. Crie um arquivo `.env` na raiz desta pasta com as credenciais:
   ```env
   SUPABASE_URL=sua_url_aqui
   SUPABASE_ANON_KEY=sua_chave_aqui
   PORT=3000
   ```

## 🚀 Como Executar

1. Abra o terminal na pasta deste projeto
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Certifique-se de que o arquivo `.env` foi criado com suas credenciais!
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. Abra no navegador: `http://localhost:3000`

## 📁 Estrutura do Projeto
- `index.js`: Servidor e rotas CRUD
- `config/supabaseClient.js`: Configuração de conexão com o banco
- `views/`:
  - `index.ejs`: Lista de alunos buscando do banco
  - `formulario.ejs`: View inteligente que serve tanto para novo cadastro quanto para edição
- `.env`: Arquivo (que você deve criar) com as chaves secretas da API
