var bebida = 'leite';

switch(bebida) {
  case 'café':
    console.log('Você escolheu o café como bebida. O valor do café é de R$ 3,00.');
    break;
  case 'leite':
    console.log('Você escolheu o leite como bebida. O valor do leite é de R$ 2,00.');
    break;
  case 'chá':
    console.log('Você escolheu o chá como bebida. O valor do chá é de R$ 1,00.');
    break;
  default:
    console.log('A escolha da sua bebida deve ser entre um dos 3 itens da nossa loja. Itens esses que são: café, leite e chá.');
}