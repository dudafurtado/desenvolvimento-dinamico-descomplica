var numeros = [8, 5, 4, 10, 2, 6];
console.log(numeros.reverse());
numeros.pop();
numeros.push(7);
console.log(numeros);

var arr1 = ['Maria', 'Eduarda', 'Cerqueira', 'Furtado', 'Melo'];
console.log(arr1.join(' '));

var arr2 = [1, 2, 3, 4, 5 , 6, 7];
console.log(arr2.join('|'));
console.log(arr2.shift());
console.log(arr2);
console.log(arr2.indexOf(5));

var arr3 = [20, 4, 10, 50, 3, 11, 7, 13];
arr3.sort((a, b) => {
  return a - b;
});
console.log(arr3);