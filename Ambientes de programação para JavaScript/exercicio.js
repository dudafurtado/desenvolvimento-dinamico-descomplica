const readline = require('readline-sync');

const nome = readline.question('Qual o seu primeiro nome?\n')
const sobrenome = readline.question('Qual o seu sobrenome?\n')
const nomeCompleto = nome + ' ' + sobrenome

console.log(nomeCompleto)

