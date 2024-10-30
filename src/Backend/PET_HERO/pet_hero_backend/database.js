// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Configura e abre a conexão com o banco de dados SQLite
const db = new sqlite3.Database(path.resolve(__dirname, 'pet-hero.db'), (err) => {
    if (err) {
        console.error("Erro ao conectar ao SQLite:", err.message);
    } else {
        console.log("Conectado ao banco de dados SQLite.");
    }
});

// Cria as tabelas se não existirem
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Animais (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            especie TEXT,
            raca TEXT,
            idade INTEGER,
            sexo TEXT,
            vacinado BOOLEAN,
            castrado BOOLEAN,
            descricao TEXT,
            status_disponivel BOOLEAN,
            ong_responsavel_id INTEGER,
            FOREIGN KEY (ong_responsavel_id) REFERENCES Ongs(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            senha TEXT,
            telefone TEXT,
            endereco TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Ongs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            endereco TEXT,
            telefone TEXT,
            email TEXT,
            descricao TEXT
        )
    `);
});

module.exports = db;

