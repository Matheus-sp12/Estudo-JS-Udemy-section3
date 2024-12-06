function carro(marca, placa, ano) {
    return {
        marca,
        placa,
        ano,
    };
}

const fiat = carro('Uno', 'ASD547', 2020);
console.log(fiat);

// ou inves de criar uma função vc cria uma função dentro da const que vira um metodo

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando Oi...`)
    }
};
pessoa.fala()



const criaCarro = {
    marca: 'Ferrari',
    placa: 'ASD325',
    ano: '2025',

    compraCarro() {
        console.log(`Parabens! vocÊ comprou o carro ${this.marca} de placa ${this.placa} de ano ${this.ano}`);
    }
}

console.log(criaCarro.compraCarro());