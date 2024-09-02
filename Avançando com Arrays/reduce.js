var total = 0;
var numeros = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < numeros.length; i++) {
  total += numeros[i];
}

console.log(total);

var numeros2 = [1, 2, 3, 4, 5, 6];
var total2 = numeros2.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(total2);