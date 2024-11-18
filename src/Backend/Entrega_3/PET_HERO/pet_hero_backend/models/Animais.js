// models/Animal.js

class Animal {
    constructor(id_animal, nome, especie, raca, idade, sexo, vacinado, castrado, descricao, status_disponivel, ong_responsavel_id) {
        this.id_animal = id_animal;
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.idade = idade;
        this.sexo = sexo;
        this.vacinado = vacinado;
        this.castrado = castrado;
        this.descricao = descricao;
        this.status_disponivel = status_disponivel;
        this.ong_responsavel_id = ong_responsavel_id;
    }
}

module.exports = Animal;
