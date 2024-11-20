// routes/ongRoutes.js
const express = require('express');
const router = express.Router();
const ongController = require('../controllers/ongController');

// Rota para buscar todas as ONGs
router.get('/', ongController.getAll);

// Rota para criar uma nova ONG
router.post('/', ongController.create);

// Rota para buscar uma ONG específica pelo ID
router.get('/:id', ongController.getById);

// Rota para atualizar uma ONG pelo ID
router.put('/:id', ongController.update);

// Rota para deletar uma ONG pelo ID
router.delete('/:id', ongController.delete);

module.exports = router;
