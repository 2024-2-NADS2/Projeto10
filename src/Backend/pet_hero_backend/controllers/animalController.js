// controllers/animalController.js
const db = require('../database');

module.exports = {
    // Busca todos os animais
    getAll: (req, res) => {
        db.all("SELECT * FROM Animais", [], (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(rows);
        });
    },

    // Cria um novo animal
    create: (req, res) => {
        const { nome, especie, raca, idade, sexo, vacinado, castrado, descricao, status_disponivel, ong_responsavel_id } = req.body;

        // Verifica se o animal já existe
        // Verifica se o animal já existe
        db.get(
            `SELECT * FROM Animais WHERE nome = ? AND especie = ? AND raca = ? AND sexo = ?`,
            [nome, especie, raca, sexo],
            (err, row) => {
                if (err) {
                    res.status(500).json({ message: "Erro ao verificar se o animal já existe.", error: err.message });
                    return;
                }

                if (row) {
                    // Se o animal já existe, retorna uma mensagem de erro
                    return res.status(409).json({ message: "Já existe um animal com essas características." });
                }

                // Se o animal não existe, insere um novo
                db.run(
                    `INSERT INTO Animais (nome, especie, raca, idade, sexo, vacinado, castrado, descricao, status_disponivel, ong_responsavel_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [nome, especie, raca, idade, sexo, vacinado, castrado, descricao, status_disponivel, ong_responsavel_id],
                    function (err) {
                        if (err) {
                            res.status(500).json({ message: "Erro ao criar o animal.", error: err.message });
                        } else {
                            res.status(201).json({ message: "Animal criado com sucesso!", animalId: this.lastID });
                        }
                    }
                );
            }
        );
    },

    // Busca um animal pelo ID
    getById: (req, res) => {
        const { id } = req.params;
        db.get("SELECT * FROM Animais WHERE id = ?", [id], (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            row ? res.json(row) : res.status(404).json({ message: "Animal não encontrado" });
        });
    },

    // Atualiza um animal pelo ID
    update: (req, res) => {
        const { id } = req.params;
        const { nome, especie, raca, idade, sexo, vacinado, castrado, descricao, status_disponivel, ong_responsavel_id } = req.body;
        db.run(
            `UPDATE Animais SET nome = ?, especie = ?, raca = ?, idade = ?, sexo = ?, vacinado = ?, castrado = ?, descricao = ?, status_disponivel = ?, ong_responsavel_id = ? WHERE id = ?`,
            [nome, especie, raca, idade, sexo, vacinado, castrado, descricao, status_disponivel, ong_responsavel_id, id],
            function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.json({ message: "Animal atualizado com sucesso" });
            }
        );
    },

    // Deleta um animal pelo ID
    delete: (req, res) => {
        const { id } = req.params;
        db.run("DELETE FROM Animais WHERE id = ?", [id], function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: "Animal removido com sucesso" });
        });
    }
};
