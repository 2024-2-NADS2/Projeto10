const express = require("express");
const db = require("./database"); // Importa o banco de dados SQLite

const app = express();
app.use(express.json());

// Carrega as rotas
const animalRoutes = require("./routes/animalRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const ongRoutes = require("./routes/ongRoutes");
const adocaoRoutes = require("./routes/adocaoRoutes"); // Novas rotas de adoções
const mensagemRoutes = require("./routes/mensagemRoutes"); // Novas rotas de mensagens

// Usa as rotas
app.use("/api/animais", animalRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/ongs", ongRoutes);
app.use("/api/adocoes", adocaoRoutes); // Registra as rotas de adoções
app.use("/api/mensagens", mensagemRoutes); // Registra as rotas de mensagens

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
