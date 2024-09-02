let comidas = ['pão', 'arroz', 'carne', 'pizza'];

comidas.forEach((comida) => {
  console.log(comida);
});

var a = [10, 20, 30, 40, 50, 60];

a.forEach(valor => console.log(valor));

var total = 0;

a.forEach(valor => {
  total += valor;
});

console.log(total);

a.forEach((valor, indice, array) => {
  console.log(array[indice]);
});