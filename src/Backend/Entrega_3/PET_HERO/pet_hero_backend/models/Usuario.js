// models/Usuario.js

class Usuario {
    constructor(id_usuario, nome, email, senha, telefone, endereco) {
        this.id_usuario = id_usuario;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}

module.exports = Usuario;
