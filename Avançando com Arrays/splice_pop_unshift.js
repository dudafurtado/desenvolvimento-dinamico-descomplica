var array = [1, 2, 3, 'hello world', 4.12, true];

array.splice(2, 1);
console.log(array);

array.splice(3);
console.log(array);

var nomes = ['Eduardo', 'Carlos', 'Pedro', 'Gabriel'];
nomes.splice(1, 1, 'Hugo');
console.log(nomes);

var paises = ['Brasil', 'Argentina', 'Colombia'];
paises.unshift('Uruguai');
console.log(paises);

var pessoas = ['Guilherme', 'Manuel', 'Samuel', 'Davi', 'João'];
pessoas.unshift('Mônica');
console.log(pessoas);
pessoas.pop();
console.log(pessoas);
console.log(pessoas.indexOf('Samuel'));
pessoas.splice(2, 1, 'Emanuel');
console.log(pessoas);