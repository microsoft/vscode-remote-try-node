require('dotenv').config();
const express = require('express');
const path = require('path');
const supabase = require('./config/supabaseClient');

const app = express();
const port = process.env.PORT || 3000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal - Listar alunos (READ)
app.get('/', async (req, res) => {
  try {
    // Busca dados no Supabase (ordena por id)
    const { data: alunos, error } = await supabase
      .from('alunos')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;

    res.render('index', { 
      titulo: 'Gestão Escolar (Supabase)',
      alunos: alunos || []
    });
  } catch (error) {
    console.error('Erro ao buscar alunos:', error.message);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para o formulário de cadastro
app.get('/novo', (req, res) => {
  res.render('formulario', { 
    titulo: 'Cadastrar Aluno',
    aluno: null // Indica que é um novo cadastro
  });
});

// Rota para o formulário de edição
app.get('/editar/:id', async (req, res) => {
  try {
    const id = req.params.id;
    
    // Busca o aluno específico
    const { data, error } = await supabase
      .from('alunos')
      .select('*')
      .eq('id', id)
      .single(); // Retorna apenas um objeto, não um array

    if (error) throw error;
    if (!data) return res.status(404).send('Aluno não encontrado');

    res.render('formulario', { 
      titulo: 'Editar Aluno',
      aluno: data // Passa os dados do aluno para preencher o formulário
    });
  } catch (error) {
    console.error('Erro ao buscar aluno:', error.message);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para processar cadastro/edição (CREATE / UPDATE)
app.post('/salvar', async (req, res) => {
  try {
    const { id, nome, email, curso } = req.body;
    
    // Prepara os dados
    const dadosAluno = { nome, email, curso };

    if (id) {
      // Se tem ID, é uma edição (UPDATE)
      const { error } = await supabase
        .from('alunos')
        .update(dadosAluno)
        .eq('id', id);
        
      if (error) throw error;
    } else {
      // Se não tem ID, é um novo cadastro (CREATE)
      const { error } = await supabase
        .from('alunos')
        .insert([dadosAluno]);
        
      if (error) throw error;
    }
    
    res.redirect('/');
  } catch (error) {
    console.error('Erro ao salvar aluno:', error.message);
    res.status(500).send('Erro interno ao salvar os dados');
  }
});

// Rota para remover aluno (DELETE)
// Usamos GET aqui para simplificar, pois formulários HTML padrão só suportam GET/POST
// Em uma API real, usaríamos o método DELETE
app.get('/deletar/:id', async (req, res) => {
  try {
    const id = req.params.id;
    
    const { error } = await supabase
      .from('alunos')
      .delete()
      .eq('id', id);

    if (error) throw error;
    
    res.redirect('/');
  } catch (error) {
    console.error('Erro ao deletar aluno:', error.message);
    res.status(500).send('Erro interno ao deletar');
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor (Supabase CRUD) rodando em http://localhost:${port}`);
});
