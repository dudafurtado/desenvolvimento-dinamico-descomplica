var valores = [8, 1, 7, 9, 2,];
console.log(valores[3]);

for (var i = 0; i < valores.length; i++) {
  console.log('Posição: ' + i + ' Valor: ' + valores[i]);
}

var carros = [];
carros[0] = 'Volvo';
carros[1] = 'Jeep';
console.log(carros);

var motos = new Array('BMW', 'Yamaha', 'Honda');
console.log(motos);

var media = 0;
var maiorValor = 0;

for (var i = 0; i < valores.length; i++) {
  media += valores[i];

  if (valores[i] > maiorValor) {
    maiorValor = valores[i];
  }
}

console.log(media / valores.length);
console.log(maiorValor);