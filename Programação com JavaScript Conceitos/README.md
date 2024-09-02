# Conhecendo o JavaScript e suas características

## Conceitos gerais do JavaScript

É uma linguagem de script. Em um script, podemos descrever comandos e tarefas que o interpretador deve executar. A análise do que é script ou não se deve ao propósito daquele código. Quanto mais poderosa e flexível o projeto do lado do servidor, mais deixa de ser um script.

Além de ser multiplataforma, é também orientada a objetos. Quando usado em um navegador web, pode ser ligado a objetos do ambiente e controlá-los através da programação.

Algumas bibliotecas padrões de objetos são: `Array`, `Date`, e `Math`. Os elementos que formam o núcleo da linguagem são os operadores, estruturas de controle e declarações.

## Programando com JavaScript

- É uma linguagem utilizada para desenvolver código para o cliente ao manipular elementos HTML e controlar um navegador web com o Document Object Model (DOM). Eventos esses programados para o usuário.

- No lado do servidor, temos objetos relevantes para a execução do JavaScript, como operações com o banco de dados e arquivos.

## JavaScript X Java

- JavaScript segue a sintaxe básica do Java nos tópicos de convenções de nomenclatura e construções de controle de fluxo.
- JavaScript é orientada a objeto, não possui distinção de tipos e objetos, a herança é feita através do protótipo, e as propriedades e métodos podem ser adicionadas a qualquer objeto dinamicamente. Além de ser uma linguagem não compilada.
- Java é baseada em classes. Os objetos são divididos em classes e instâncias, com toda a herança através da hierarquia da classe. Esses conceitos não podem ter propriedades ou métodos adicionados dinamicamente. Os tipos de dados das variáveis devem ser declarados, e é uma linguagem que deve ser compilada.

**ECMAScript** são as versões padronizadas para escrever JavaScript.

## Sintaxe de comandos em JavaScript

- É uma linguagem que reconhece o conteúdo de maneira diferente quando minúsculo ou maiúsculo, ou seja, case-sensitive.
- Espaço em branco são todos os espaços, tabulações e novas linhas.
- A leitura do código-fonte segue sempre da esquerda para a direita e a sequência de entrada.
- Ao final de toda declaração, é recomendado utilizar ponto e vírgula.
- Sempre que houver necessidade de nomear algum valor no sistema, é necessário utilizar nomes coerentes.
- Comentários são usados para dicas, notas, sugestões ou alertas. Podem ser usados também para desativar aquelas linhas de código.

### Declarações

- `var`: declara uma variável e a inicializa com um valor.
- `let`: declara uma variável local, escopo do bloco, a inicialização do valor é opcional.
- `const`: declara uma constante de escopo do bloco, somente leitura, inicializa com um valor.

### Identificadores de variáveis

- Podemos usar caracteres para nomear como `$Cidade` ou `_Salario`.
- Não pode iniciar com dígito.

- Variável Global: é declarada fora de uma função e fica disponível para todos os blocos.
- Variável Local: é declarada dentro de uma função e fica disponível apenas na função na qual foi declarada.

**Uma constante não deve ter seu valor alterado ou ser declarada novamente enquanto o script está em execução.**

-----------------------------------

## Desenvolvimento Web

O desenvolvimento Web refere-se, em geral, às tarefas associadas ao desenvolvimento de sites para hospedagem via intranet ou internet. O processo de desenvolvimento da web inclui design da web, desenvolvimento de conteúdo da web, scripts do lado do cliente/servidor e configuração de segurança de rede, entre outras tarefas.

Em um sentido mais amplo, o desenvolvimento da web abrange todas as ações, atualizações e operações necessárias para construir, manter e gerenciar um site para garantir que seu desempenho, experiência do usuário e velocidade sejam ideais.

O desenvolvimento da Web é a codificação ou programação que habilita a funcionalidade do site, de acordo com os requisitos do proprietário. Ele lida principalmente com o aspecto não relacionado ao design da construção de sites, o que inclui marcação e marcação de escrita.

O desenvolvimento da Web varia da criação de páginas de texto simples a aplicativos complexos baseados na Web, aplicativos de rede social e aplicativos de negócios eletrônicos.

### A hierarquia de desenvolvimento da web

- Codificação do lado do cliente.
- Codificação do lado do servidor.
- Tecnologia de banco de dados.

**Hypertext Markup Language (HTML)** define a estrutura básica de um site - a base sobre a qual todo o resto é construído. Ele forma os blocos que definem o layout, formato e componentes críticos de uma página.

**Cascading Style Sheets (CSS)** é usado para definir o estilo do conteúdo de um site da Web usando um pequeno conjunto de arquivos que são mantidos em todo o site. Desta forma, sempre que uma alteração deve ser aplicada para, por exemplo, alterar consistentemente a cor de todos os botões encontrados em cada página do site, um desenvolvedor web precisa editar apenas um único arquivo em CSS.

A linguagem de programação **JavaScript** é usada para cuidar da interatividade de muitos elementos exclusivos do site. Ele pode ser usado para criar efeitos que alteram a aparência de ícones e menus suspensos, adicionam animações, jogos e outros elementos interativos.

Os desenvolvedores da Web geralmente são divididos em desenvolvedores front-end, back-end e full-stack. Um desenvolvedor front-end cuida de todos os aspectos visuais do site (layout, barra de navegação etc.), sua interatividade e reúne todos os seus elementos.

Os desenvolvedores de back-end cuidam de tarefas menos visíveis que garantem que o site funcione sem problemas, como gerenciar os serviços de hospedagem, banco de dados e aplicativos do site. Os desenvolvedores de back-end podem precisar desenvolver soluções para problemas de servidor usando linguagens adicionais do lado do servidor, como Python, Ruby, Java e PHP. Desenvolvedores full-stack são capazes de realizar tarefas front-end e back-end ao mesmo tempo.

**JavaScript** é uma linguagem de programação interpretada leve. Ele é projetado para criar aplicativos centrados em rede. É complementar e integrado ao Java. JavaScript é muito fácil de implementar porque está integrado ao HTML. É aberto e multiplataforma.

### Motivos para utilizar o JavaScript

- **JavaScript** é a linguagem de programação mais popular do mundo, o que a torna uma ótima escolha para programadores. Depois de aprender JavaScript, você pode desenvolver software de front-end e back-end usando diferentes frameworks baseados em JavaScript, como jQuery, Node.js, etc.

- **JavaScript** está em todo lugar. Ele vem instalado em todos os navegadores modernos e, portanto, para aprender JavaScript, você realmente não precisa de nenhuma configuração de ambiente especial. Por exemplo, Chrome, Mozilla Firefox, Safari e todos os navegadores que você conhece até hoje oferecem suporte a JavaScript.

- **JavaScript** ajuda a criar sites realmente bonitos e rápidos. Você pode desenvolver seu site com uma aparência de console e oferecer aos seus usuários a melhor experiência gráfica.

- O uso de **JavaScript** agora se estende ao desenvolvimento de aplicativos móveis, aplicativos de desktop e desenvolvimento de jogos. Isso abre muitas oportunidades para você como programador JavaScript.

- Possui inúmeros frameworks e bibliotecas já desenvolvidos que podem ser usados diretamente no desenvolvimento de seu software para reduzir o tempo de lançamento no mercado.

- **Validação do lado do cliente** - Isso é realmente importante para verificar qualquer entrada do usuário antes de enviá-la ao servidor, e o JavaScript desempenha um papel importante na validação dessas entradas no próprio front-end.

- **Manipulando páginas HTML** - JavaScript ajuda na manipulação de páginas HTML em tempo real. Isso ajuda a adicionar e excluir qualquer tag HTML facilmente usando JavaScript e modificar seu HTML para alterar sua aparência com base em diferentes dispositivos e requisitos.

- **Notificações do usuário** - Você pode usar JavaScript para gerar pop-ups dinâmicos nas páginas da web para fornecer diferentes tipos de notificações aos visitantes do seu site.

- **Carregamento de dados de back-end** - JavaScript fornece uma biblioteca Ajax que ajuda a carregar dados de back-end enquanto você está fazendo algum outro processamento. Isso realmente proporciona uma experiência incrível aos visitantes do seu site.

- **Apresentações** - JavaScript também fornece a facilidade de criar apresentações que dão aparência e sensação ao site. JavaScript fornece bibliotecas RevealJS e BespokeJS para construir apresentações de slides baseadas na web.

- **Aplicativos de servidor** - O Node.js é baseado no tempo de execução JavaScript do Chrome para criar aplicativos de rede rápidos e escaláveis. Esta é uma biblioteca baseada em eventos que ajuda no desenvolvimento de aplicativos de servidor muito sofisticados, incluindo servidores web. E muitas outras aplicações!
