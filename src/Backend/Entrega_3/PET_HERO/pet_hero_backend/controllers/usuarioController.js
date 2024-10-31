// controllers/usuarioController.js
const db = require('../database');

module.exports = {
    getAll: (req, res) => {
        db.all("SELECT * FROM Usuarios", [], (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(rows);
        });
    },

    create: (req, res) => {
        const { nome, email, senha, telefone, endereco } = req.body;
        db.run(
            `INSERT INTO Usuarios (nome, email, senha, telefone, endereco) VALUES (?, ?, ?, ?, ?)`,
            [nome, email, senha, telefone, endereco],
            function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.json({ id: this.lastID });
            }
        );
    },

    getById: (req, res) => {
        const { id } = req.params;
        db.get("SELECT * FROM Usuarios WHERE id = ?", [id], (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            row ? res.json(row) : res.status(404).json({ message: "Usuário não encontrado" });
        });
    },

    update: (req, res) => {
        const { id } = req.params;
        const { nome, email, senha, telefone, endereco } = req.body;
        db.run(
            `UPDATE Usuarios SET nome = ?, email = ?, senha = ?, telefone = ?, endereco = ? WHERE id = ?`,
            [nome, email, senha, telefone, endereco, id],
            function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.json({ message: "Usuário atualizado com sucesso" });
            }
        );
    },

    delete: (req, res) => {
        const { id } = req.params;
        db.run("DELETE FROM Usuarios WHERE id = ?", [id], function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: "Usuário removido com sucesso" });
        });
    }
};
