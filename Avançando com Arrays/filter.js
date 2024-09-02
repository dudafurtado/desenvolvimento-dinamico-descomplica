var numbers = [1, 2, 3, 4];
var evens = numbers.filter(number => number % 2 === 0);
console.log(evens);

var numeros = [5, 6, 7, 8];
function pares(numero) {
  if (numero % 2 === 0) {
    return numero;
  }
}
console.log(numeros.filter(pares));

var maiorQue5 = numeros.filter((numero) => {
  return numero > 5;
})
console.log(maiorQue5);

var produtos = [
  {
    id: 1,
    descricao: 'Fogão',
    categoria: 'Eletrodomestico',
  },
  {
    id: 2,
    descricao: 'Maquina de lavar',
    categoria: 'Eletrodomestico',
  },
  {
    id: 3,
    descricao: 'Alexa',
    categoria: 'Eletronico',
  },
  {
    id: 4,
    descricao: 'Notebook',
    categoria: 'Eletronico',
  },
  {
    id: 5,
    descricao: 'Sabão',
    categoria: 'Limpeza',
  },
];

const eletronicos = produtos.filter((produto) => {
  return produto.categoria.toLowerCase() === 'eletronico';
});

console.log(eletronicos);