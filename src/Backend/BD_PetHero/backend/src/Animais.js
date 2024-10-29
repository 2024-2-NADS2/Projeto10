

class Animais {
    constructor(nome, raca, genero, porte, ongdoadora, cor) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.porte = porte;
        this.ongdoadora = ongdoadora;
        this.cor = cor;
    }

    exibirInformacoes() {
        return `${this.nome} ${this.raca} ${this.genero} ${this.porte} ${this.ongdoadora} ${this.cor}`;
    }
}

class Gato extends Animais {
    constructor(nome, raca, genero, porte, ongdoadora, cor, castrado) {
        super(nome, raca, genero, porte, ongdoadora, cor);
        this.castrado = castrado;
    }

    exibirInformacoes() {
        return `${super.exibirInformacoes()} Castrado: ${this.castrado}`;
    }
}

class Cachorro extends Animais {
    constructor(nome, raca, genero, porte, ongdoadora, cor) {
        super(nome, raca, genero, porte, ongdoadora, cor);
    }

    exibirInformacoes() {
        return `${super.exibirInformacoes()}`;
    }
}

module.exports = { Animais, Gato, Cachorro };
