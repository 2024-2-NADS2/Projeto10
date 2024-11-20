// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para buscar todos os usuários
router.get('/', usuarioController.getAll);

// Rota para criar um novo usuário
router.post('/', usuarioController.create);

router.post('/cadastro', usuarioController.create);

// Rota para buscar um usuário específico pelo ID
router.get('/:id', usuarioController.getById);

// Rota para atualizar um usuário pelo ID
router.put('/:id', usuarioController.update);

// Rota para deletar um usuário pelo ID
router.delete('/:id', usuarioController.delete);

module.exports = router;
