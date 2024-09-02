switch('Abacate') {
  case 'Laranja':
    console.log('A laranja custa R$ 1 o kg');
    break;
  case 'Maça':
    console.log('As maças custam R$ 0,50 o kg');
    break;
  case 'Banana':
    console.log('O kg da banana custa R$ 1,50');
    break;
  default:
    console.log('Desculpe, estamos sem nenhum ' + 'Abacate.');
}

console.log('Tem algo mais que você gostaria de levar?');

var diaDaSemana = 4;

switch(diaDaSemana) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda');
    break;
  case 3:
    console.log('Terça');
    break;
  default:
    console.log('Esse dia da semana não existe.');
}