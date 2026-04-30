const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');
require('dotenv').config();

const dbFile = process.env.SQLITE_FILE || path.join(__dirname, '..', 'data', 'database.sqlite');

const dbPromise = open({
  filename: dbFile,
  driver: sqlite3.Database,
});

(async () => {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS alunos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL,
      curso TEXT NOT NULL
    );
  `);
})();

module.exports = dbPromise;
