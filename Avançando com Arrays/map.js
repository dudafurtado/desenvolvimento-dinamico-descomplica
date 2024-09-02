let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 3;
}

console.log(arr);

let arr2 = [3, 4, 5, 6];

let multiploDe3 = arr2.map((item) => {
  return item * 3;
});

console.log(multiploDe3);

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var multiploDe2 = numeros.map((numero) => {
  return numero * 2;
});

console.log(multiploDe2);

var funcionarios = [
  {
    nome: 'Jorge',
    idade: 50
  },
  {
    nome: 'Luisa',
    idade: 20
  },
  {
    nome: 'Patricia',
    idade: 40
  },
  {
    nome: 'Felipe',
    idade: 30
  },
];

nomes = funcionarios.map(pessoa => pessoa.nome);

console.log(nomes);