const db = require("../database");

// Buscar todas as adoções
exports.getAll = (req, res) => {
  db.all("SELECT * FROM Adocoes", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(rows);
    }
  });
};

// Criar uma nova adoção
exports.create = (req, res) => {
  const { usuario_id, animal_id, status } = req.body;

  db.run(
    "INSERT INTO Adocoes (usuario_id, animal_id, status) VALUES (?, ?, ?)",
    [usuario_id, animal_id, status || "pendente"],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id: this.lastID });
      }
    }
  );
};

// Buscar uma adoção pelo ID
exports.getById = (req, res) => {
  const { id } = req.params;

  db.get("SELECT * FROM Adocoes WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: "Adoção não encontrada" });
    } else {
      res.status(200).json(row);
    }
  });
};

// Atualizar uma adoção pelo ID
exports.update = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  db.run(
    "UPDATE Adocoes SET status = ? WHERE id = ?",
    [status, id],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: "Adoção não encontrada" });
      } else {
        res.status(200).json({ message: "Status atualizado com sucesso" });
      }
    }
  );
};

// Deletar uma adoção pelo ID
exports.delete = (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM Adocoes WHERE id = ?", [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ error: "Adoção não encontrada" });
    } else {
      res.status(200).json({ message: "Adoção deletada com sucesso" });
    }
  });
};
