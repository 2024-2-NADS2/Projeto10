const db = require("../database");

// Buscar todas as mensagens
exports.getAll = (req, res) => {
  db.all("SELECT * FROM Mensagens", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(rows);
    }
  });
};

// Criar uma nova mensagem
exports.create = (req, res) => {
  const { usuario_id, ong_id, mensagem } = req.body;

  db.run(
    "INSERT INTO Mensagens (usuario_id, ong_id, mensagem) VALUES (?, ?, ?)",
    [usuario_id, ong_id, mensagem],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id: this.lastID });
      }
    }
  );
};

// Buscar mensagens por ONG
exports.getByOng = (req, res) => {
  const { ong_id } = req.params;

  db.all("SELECT * FROM Mensagens WHERE ong_id = ?", [ong_id], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(rows);
    }
  });
};

// Deletar uma mensagem pelo ID
exports.delete = (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM Mensagens WHERE id = ?", [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ error: "Mensagem não encontrada" });
    } else {
      res.status(200).json({ message: "Mensagem deletada com sucesso" });
    }
  });
};
