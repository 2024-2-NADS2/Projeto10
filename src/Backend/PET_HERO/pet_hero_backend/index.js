// index.js
const express = require('express');
const db = require('./database'); // Importa o banco de dados SQLite

const app = express();
app.use(express.json());

// Carrega as rotas
const animalRoutes = require('./routes/animalRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const ongRoutes = require('./routes/ongRoutes');

// Usa as rotas
app.use('/api/animais', animalRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/ongs', ongRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});