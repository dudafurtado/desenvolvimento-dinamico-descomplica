# Métodos de Manipulação de Arrays em JavaScript

**Splice:** O método `splice()` altera o array atual com um corte. Ele possui 2 argumentos principais: o primeiro é o índice, que indica o ponto de partida da remoção; o segundo é o número de elementos que devem ser removidos. É possível também usar apenas o primeiro argumento, o que fará com que o método remova todos os elementos a partir daquele índice. Quando o segundo argumento tem valor 1, apenas o elemento no índice indicado será removido. Um terceiro argumento pode ser utilizado para adicionar novos valores no lugar dos elementos removidos.

**Slice:** O método `slice()` não altera o array original, mas gera um novo array que deve ser armazenado em uma variável. Ele aceita 2 argumentos: o primeiro é o índice de partida e o segundo é o índice final da cópia (o elemento no índice final não será incluído na cópia).

**Concat:** O método `concat()` faz a junção de dois arrays e retorna um novo array, sem alterar os arrays originais. Pode ser utilizado tanto com strings quanto com arrays.

**Filter:** O método `filter()` retorna um novo array com os elementos que passam em um teste (fornecido como uma função callback). Dentro dos parênteses do método, a função callback pode receber até três argumentos: o primeiro é o elemento que está sendo analisado, o segundo é o índice do elemento no array, e o terceiro é o próprio array original.

**Map:** O método `map()` permite iterar sobre os elementos de um array e modificá-los usando uma função callback. A sintaxe é `arr.map(function(element, index, array) {}, this)`. O argumento `this` é opcional e, por padrão, é `undefined`.

**Reduce:** O método `reduce()` é uma função poderosa que reduz um array a um único valor, aplicando uma função a cada elemento do array e acumulando o resultado. A estrutura é `array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)`, onde `callback` é a função executada para cada elemento, `accumulator` armazena o resultado da execução anterior, `currentValue` é o valor do elemento atual, `currentIndex` é o índice do elemento atual (opcional), `array` é o array original (opcional), e `initialValue` é o valor inicial do acumulador.

**ForEach:** O método `forEach()` executa uma função callback para cada elemento do array. A função callback pode receber até três argumentos: o valor atual (obrigatório), o índice do elemento (opcional), e o array original (opcional).
