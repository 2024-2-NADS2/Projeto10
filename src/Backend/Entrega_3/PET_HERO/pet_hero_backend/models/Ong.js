// models/Ong.js

class Ong {
    constructor(id_ong, nome, endereco, telefone, email, descricao) {
        this.id_ong = id_ong;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.descricao = descricao;
    }
}

module.exports = Ong;
