
class Usuario {
    constructor(nome, sobrenome, idade, endereco, renda) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.endereco = endereco;
        this.renda = renda;
    }

    exibirInformacoes() {
        return `${this.nome} ${this.sobrenome}, Idade: ${this.idade}, Endereço: ${this.endereco}, Renda: ${this.renda}`;
    }
}

module.exports = Usuario;
