const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Verifica se as variáveis de ambiente existem
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ ERRO: Faltando SUPABASE_URL ou SUPABASE_ANON_KEY no arquivo .env');
  console.log('Crie um arquivo .env na raiz do projeto com as suas credenciais do Supabase.');
  // Em produção, você pode querer lançar um erro ou encerrar a aplicação
}

// Cria o cliente do Supabase
const supabase = createClient(supabaseUrl || 'https://dummy.supabase.co', supabaseKey || 'dummy-key');

module.exports = supabase;
