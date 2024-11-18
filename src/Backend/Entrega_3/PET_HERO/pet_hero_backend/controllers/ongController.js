// controllers/ongController.js
const db = require('../database');

module.exports = {
    getAll: (req, res) => {
        db.all("SELECT * FROM Ongs", [], (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(rows);
        });
    },

    create: (req, res) => {
        const { nome, endereco, telefone, email, descricao } = req.body;
        db.run(
            `INSERT INTO Ongs (nome, endereco, telefone, email, descricao) VALUES (?, ?, ?, ?, ?)`,
            [nome, endereco, telefone, email, descricao],
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
        db.get("SELECT * FROM Ongs WHERE id = ?", [id], (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            row ? res.json(row) : res.status(404).json({ message: "ONG não encontrada" });
        });
    },

    update: (req, res) => {
        const { id } = req.params;
        const { nome, endereco, telefone, email, descricao } = req.body;
        db.run(
            `UPDATE Ongs SET nome = ?, endereco = ?, telefone = ?, email = ?, descricao = ? WHERE id = ?`,
            [nome, endereco, telefone, email, descricao, id],
            function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.json({ message: "ONG atualizada com sucesso" });
            }
        );
    },

    delete: (req, res) => {
        const { id } = req.params;
        db.run("DELETE FROM Ongs WHERE id = ?", [id], function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: "ONG removida com sucesso" });
        });
    }
};
