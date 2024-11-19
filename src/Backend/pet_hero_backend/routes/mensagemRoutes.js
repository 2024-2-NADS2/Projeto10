const express = require("express");
const router = express.Router();
const mensagemController = require("../controllers/mensagemController");

// Rota para buscar todas as mensagens
router.get("/", mensagemController.getAll);

// Rota para criar uma nova mensagem
router.post("/", mensagemController.create);

// Rota para buscar mensagens por ONG
router.get("/ong/:ong_id", mensagemController.getByOng);

// Rota para deletar uma mensagem pelo ID
router.delete("/:id", mensagemController.delete);

module.exports = router;
