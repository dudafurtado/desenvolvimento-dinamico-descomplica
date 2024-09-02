var x = 12;
var result = 0;

if (x > 10) {
  result += 10;
} else {
  result -= 10;
}

console.log(result);

var y = 6;

if (y < 5) {
  y += 5;
}else if(y > 50) {
  y += 50;
} else {
  y = y;
}

console.log(y);

var pais = 'Brasil';

if (pais !== 'Brasil') {
  console.log('Gringo');
} else {
  console.log('Brasileiro');
}

var idade = 22;

if (idade < 16) {
  console.log('Não pode votar');
} else if (idade < 18 || idade > 65) {
  console.log('Voto Opcional');
} else {
  console.log('Voto Obrigatório');
}