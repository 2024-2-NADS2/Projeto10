const express = require('express');
const bodyParser = require('body-parser');
const { Gato, Cachorro } = require('./Animais');
const db = require('./db'); // Importa a configuração do banco de dados

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Rota para adicionar um novo animal
app.post('/animais', (req, res) => {
    const { tipo, nome, raca, genero, porte, ongdoadora, cor, castrado } = req.body;

    let animal;
    if (tipo === 'gato') {
        animal = new Gato(nome, raca, genero, porte, ongdoadora, cor, castrado);
    } else if (tipo === 'cachorro') {
        animal = new Cachorro(nome, raca, genero, porte, ongdoadora, cor);
    } else {
        return res.status(400).send('Tipo de animal inválido');
    }

    const query = `INSERT INTO animais (tipo, nome, raca, genero, porte, ongdoadora, cor, castrado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    
    db.run(query, [tipo, nome, raca, genero, porte, ongdoadora, cor, castrado], function(err) {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.status(201).json({ id: this.lastID, ...animal });
    });
});

// Rota para listar todos os animais
app.get('/animais', (req, res) => {
    const query = `SELECT * FROM animais`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.json(rows);
    });
});

// Rota para adicionar um novo usuário
app.post('/usuarios', (req, res) => {
    const { nome, sobrenome, idade, endereco, renda } = req.body;
    const query = `INSERT INTO usuarios (nome, sobrenome, idade, endereco, renda) VALUES (?, ?, ?, ?, ?)`;

    db.run(query, [nome, sobrenome, idade, endereco, renda], function(err) {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.status(201).json({ id: this.lastID, nome, sobrenome, idade, endereco, renda });
    });
});

// Rota para listar todos os usuários
app.get('/usuarios', (req, res) => {
    const query = `SELECT * FROM usuarios`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.json(rows);
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
