// routes/animalRoutes.js
const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Rota para buscar todos os animais
router.get('/', animalController.getAll);

// Rota para criar um novo animal
router.post('/', animalController.create);

// Rota para buscar um animal específico pelo ID
router.get('/:id', animalController.getById);

// Rota para atualizar um animal pelo ID
router.put('/:id', animalController.update);

// Rota para deletar um animal pelo ID
router.delete('/:id', animalController.delete);

module.exports = router;
