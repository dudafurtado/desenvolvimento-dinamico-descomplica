# Array em JavaScript

**Array** é uma lista de objetos que contém múltiplos valores armazenados. No JavaScript, um array é uma única variável que armazena vários elementos.

Não existe um tipo de dado específico para arrays, pois eles podem ser escritos de diversas formas, como arrays de strings, arrays de números, entre outros. Arrays são construídos por colchetes e seus elementos são separados por vírgulas. A sintaxe dos colchetes é chamada de "array literal" ou "inicializador de array".

A propriedade `length` do array é definida pelo número de elementos que ele contém.

Os elementos de um array devem ser referenciados por índices numéricos ordinais, começando do zero.

**Métodos:**

- `join()`: Junta os elementos de um array retornando uma string, onde o elemento passado como argumento será utilizado entre cada um dos valores do array.  
- `shift()`: Retorna o primeiro valor de um array e remove os demais.  
- `unshift()`: Adiciona um elemento ao início de um array.  
- `sort()`: Utilizado para ordenar os elementos.  
- `reverse()`: Inverte a ordem dos elementos.  
- `slice()`: Retorna uma cópia de uma parte do array selecionada.  
- `length`: Indica o comprimento, ou seja, o número de elementos presentes naquele array.  
- `push()`: Adiciona o valor inserido como argumento ao final do array.  
- `pop()`: Retorna o último elemento do array e o remove.

**Nota sobre `sort()`:**

O método `sort()` do JavaScript, por padrão, ordena os elementos de um array como strings, o que pode resultar em uma ordenação incorreta para números. Por exemplo, `[20, 4, 10]` seria ordenado como `[10, 20, 4]` se você não passasse uma função de comparação.

A função de comparação `(a, b) => a - b` é necessária para que o `sort()` entenda como comparar os números de forma correta. Essa função deve retornar:

- Um valor negativo se `a` deve vir antes de `b`.  
- Um valor positivo se `a` deve vir depois de `b`.  
- Zero se `a` e `b` são equivalentes na ordenação.

Quando você usa `a - b`, o JavaScript faz exatamente isso:

- Se `a` é menor que `b`, o resultado será negativo, colocando `a` antes de `b`.  
- Se `a` é maior que `b`, o resultado será positivo, colocando `a` depois de `b`.  
- Se `a` é igual a `b`, o resultado é zero, mantendo a ordem.

**Resultado:** Com a função de comparação `(a, b) => a - b`, o array é ordenado numericamente em ordem crescente.

Assim, a ordenação dá certo porque a função de comparação instrui o método `sort()` a organizar os elementos numericamente de forma correta.
