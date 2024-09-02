var carros = [
  {
    id: 1, 
    modelo: 'Corsa',
    marca: 'Chevrolet',
    preco: 41000,
  },
  {
    id: 2, 
    modelo: 'Corolla',
    marca: 'Toyota',
    preco: 111000,
  },
  {
    id: 3, 
    modelo: 'Punto',
    marca: 'Fiat',
    preco: 20000,
  },
  {
    id: 4,
    modelo: 'A3',
    marca: 'Audi',
    preco: 200000
  }
];

var total = 0;
var total2 = 0;
var total3 = 0;

for (var i = 0; i < carros.length; i++) {
  total += carros[i].preco;
}

for (const i in carros) {
  total2 += carros[i].preco;
}

for (let carro of carros) {
  total3 += carro.preco;
}

console.log(total);
console.log(total2);
console.log(total3);

const carro = {
  modelo: 'Audi A3',
  marca: 'Audi',
  ano: 2020
};

for (let caracteristica in carro) {
  console.log(caracteristica + ': ' + carro[caracteristica]);
}

const pessoa = {
  nome: 'Tânia',
  idade: 21,
  cidade: 'Salvador'
}

for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

const frutas = ['Maçã', 'Banana', 'Laranja'];

for (let indice in frutas) {
  console.log(`Índice: ${indice}, Fruta: ${frutas[indice]}`);
}

