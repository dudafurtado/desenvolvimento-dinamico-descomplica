let titulo = 'Dra. ';
let nome = 'Alice';
let nome_completo = titulo.concat(nome);

console.log(nome_completo);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);

console.log(array3);

var pessoas = ['Rosana', 'Wallace', 'Joana', 'Marcelo'];
var gerentes = ['Carolina', 'Manuela'];
var pessoas1 = pessoas.slice(1, 3);

console.log(pessoas);
console.log(pessoas1);

var empresa = pessoas.concat(gerentes);
console.log(empresa);

var ano = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

var trimestre1 = ano.slice(0, 3);
console.log(trimestre1)
var trimestre2 = ano.slice(3, 6);
console.log(trimestre2)
var trimestre3 = ano.slice(6, 9);
console.log(trimestre3)
var trimestre4 = ano.slice(9, 13);
console.log(trimestre4)
