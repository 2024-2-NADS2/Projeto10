const db = require('../database');
const bcrypt = require('bcryptjs');  // Adicionando o bcrypt para hash de senhas

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

        // Verificar se o e-mail já existe no banco de dados
        db.get("SELECT * FROM Usuarios WHERE email = ?", [email], (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (row) {
                return res.status(400).json({ message: "E-mail já cadastrado!" });
            }

            // Criptografar a senha antes de salvar no banco
            bcrypt.hash(senha, 10, (err, hashedPassword) => {
                if (err) {
                    return res.status(500).json({ error: "Erro ao criptografar a senha." });
                }

                // Inserir o novo usuário no banco de dados
                db.run(
                    `INSERT INTO Usuarios (nome, email, senha, telefone, endereco) VALUES (?, ?, ?, ?, ?)`,
                    [nome, email, hashedPassword, telefone, endereco],
                    function (err) {
                        if (err) {
                            return res.status(500).json({ error: err.message });
                        }
                        res.status(201).json({ message: "Usuário cadastrado com sucesso!", userId: this.lastID });
                    }
                );
            });
        });
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

        // Se a senha for fornecida, criptografá-la
        let hashedPassword = senha;
        if (senha) {
            bcrypt.hash(senha, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({ error: "Erro ao criptografar a senha." });
                }
                hashedPassword = hash;
                updateUser();
            });
        } else {
            updateUser();
        }

        function updateUser() {
            db.run(
                `UPDATE Usuarios SET nome = ?, email = ?, senha = ?, telefone = ?, endereco = ? WHERE id = ?`,
                [nome, email, hashedPassword, telefone, endereco, id],
                function (err) {
                    if (err) {
                        res.status(500).json({ error: err.message });
                        return;
                    }
                    res.json({ message: "Usuário atualizado com sucesso" });
                }
            );
        }
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
