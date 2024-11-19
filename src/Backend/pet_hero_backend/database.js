const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Configura e abre a conexão com o banco de dados SQLite
const db = new sqlite3.Database(
  path.resolve(__dirname, "pet-hero.db"),
  (err) => {
    if (err) {
      console.error("Erro ao conectar ao SQLite:", err.message);
    } else {
      console.log("Conectado ao banco de dados SQLite.");
    }
  }
);

// Cria as tabelas se não existirem
db.serialize(() => {
  // Tabela de Animais
  db.run(`
        CREATE TABLE IF NOT EXISTS Animais (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            especie TEXT NOT NULL,
            raca TEXT,
            idade INTEGER,
            sexo TEXT,
            vacinado BOOLEAN,
            castrado BOOLEAN,
            descricao TEXT,
            status_disponivel BOOLEAN DEFAULT 1,
            ong_responsavel_id INTEGER NOT NULL,
            FOREIGN KEY (ong_responsavel_id) REFERENCES Ongs(id)
        )
    `);

  // Tabela de Usuários
  db.run(`
        CREATE TABLE IF NOT EXISTS Usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL,
            telefone TEXT,
            endereco TEXT
        )
    `);

  // Tabela de ONGs
  db.run(`
        CREATE TABLE IF NOT EXISTS Ongs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            endereco TEXT,
            telefone TEXT,
            email TEXT UNIQUE NOT NULL,
            descricao TEXT
        )
    `);

  // Tabela de Adoções
  db.run(`
        CREATE TABLE IF NOT EXISTS Adocoes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario_id INTEGER NOT NULL,
            animal_id INTEGER NOT NULL,
            data_adocao TEXT DEFAULT CURRENT_TIMESTAMP,
            status TEXT DEFAULT 'pendente',
            FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
            FOREIGN KEY (animal_id) REFERENCES Animais(id)
        )
    `);

  // Tabela de Mensagens
  db.run(`
        CREATE TABLE IF NOT EXISTS Mensagens (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario_id INTEGER NOT NULL,
            ong_id INTEGER NOT NULL,
            mensagem TEXT NOT NULL,
            data_envio TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
            FOREIGN KEY (ong_id) REFERENCES Ongs(id)
        )
    `);
});

module.exports = db;
