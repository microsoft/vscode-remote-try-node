require('dotenv').config();
const dbPromise = require('../config/dbClient');

const records = [
  { nome: 'Ana Silva', email: 'ana.silva@example.com', curso: 'Geografia' },
  { nome: 'Bruno Costa', email: 'bruno.costa@example.com', curso: 'Física' },
  { nome: 'Carla Souza', email: 'carla.souza@example.com', curso: 'História' },
];

(async () => {
  try {
    const db = await dbPromise;
    for (const aluno of records) {
      await db.run(
        'INSERT INTO alunos (nome, email, curso) VALUES (?, ?, ?)',
        [aluno.nome, aluno.email, aluno.curso]
      );
      console.log('Inserido:', aluno.nome);
    }
    console.log('Seed finalizado com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir registros:', error.message);
    process.exitCode = 1;
  }
})();
