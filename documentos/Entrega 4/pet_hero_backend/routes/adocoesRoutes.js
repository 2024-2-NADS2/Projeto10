const express = require("express");
const router = express.Router();
const adocaoController = require("../controllers/adocaoController");

// Rota para buscar todas as adoções
router.get("/", adocaoController.getAll);

// Rota para criar uma nova adoção
router.post("/", adocaoController.create);

// Rota para buscar uma adoção específica pelo ID
router.get("/:id", adocaoController.getById);

// Rota para atualizar uma adoção pelo ID
router.put("/:id", adocaoController.update);

// Rota para deletar uma adoção pelo ID
router.delete("/:id", adocaoController.delete);

module.exports = router;
