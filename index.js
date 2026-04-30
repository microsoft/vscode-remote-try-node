require('dotenv').config();
const express = require('express');
const path = require('path');
const dbPromise = require('./config/dbClient');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastro.html'));
});

app.get('/api/alunos', async (req, res) => {
  try {
    const db = await dbPromise;
    const alunos = await db.all('SELECT * FROM alunos ORDER BY id ASC');
    res.json(alunos || []);
  } catch (error) {
    console.error('Erro ao listar alunos:', error.message);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/api/alunos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = await dbPromise;
    const aluno = await db.get('SELECT * FROM alunos WHERE id = ?', [id]);

    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.json(aluno);
  } catch (error) {
    console.error('Erro ao buscar aluno:', error.message);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.post('/api/alunos', async (req, res) => {
  try {
    const { nome, email, curso } = req.body;
    if (!nome || !email || !curso) {
      return res.status(400).json({ error: 'nome, email e curso são obrigatórios' });
    }

    const db = await dbPromise;
    const result = await db.run(
      'INSERT INTO alunos (nome, email, curso) VALUES (?, ?, ?)',
      [nome, email, curso]
    );
    const aluno = await db.get('SELECT * FROM alunos WHERE id = ?', [result.lastID]);

    res.status(201).json(aluno);
  } catch (error) {
    console.error('Erro ao criar aluno:', error.message);
    res.status(500).json({ error: 'Erro interno ao salvar os dados' });
  }
});

app.put('/api/alunos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, curso } = req.body;
    if (!nome || !email || !curso) {
      return res.status(400).json({ error: 'nome, email e curso são obrigatórios' });
    }

    const db = await dbPromise;
    const result = await db.run(
      'UPDATE alunos SET nome = ?, email = ?, curso = ? WHERE id = ?',
      [nome, email, curso, id]
    );

    if (result.changes === 0) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.json({ message: 'Aluno atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar aluno:', error.message);
    res.status(500).json({ error: 'Erro interno ao atualizar' });
  }
});

app.delete('/api/alunos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = await dbPromise;
    const result = await db.run('DELETE FROM alunos WHERE id = ?', [id]);

    if (result.changes === 0) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar aluno:', error.message);
    res.status(500).json({ error: 'Erro interno ao deletar' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Aplicação rodando em http://localhost:${port}`);
});
