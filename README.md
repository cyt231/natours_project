# [Natours Project](https://cytsuda.github.io/natours_project/)

Natours é um projeto focado na criação de um website utilizando conceitos avançados de HTML/CSS.

A linguagem pre-processada SASS (SCSS) foi a linguagem escolhida para o desenvolvimento do estilo da página.

Natours é um site projetado para uma Agencia de Turismo **_fictícia_** que tem como público alvo turistas que buscam paisagens paradisiacas (~~hipsters~~).

---

## Detalhes

Todos os arquivos CSS criados estão compilados, prefixados, concatenados e minificados. 
No projeto também inclui os arquivos SASS (SCSS) que geraram os arquivos finais em CSS.

## NPM SCRIPTS

No arquivo [package.json](/package.json) estão os comandos NPMs criados para aplicar os processos de compilação do SASS (SCSS), concatenação com arquivos CSS de terceiros, prefixação para aumentar a compatibilidade do codigo (com navegadores antigos) e compressão do código.

```shell
># Comando para instalar todas as dependencias (packge.json) 
natours_project> npm install

># Compilar e Observar mudanças no SASS
natours_project> npm run watch:sass

># Inicia um servidor local e, em paralelo, compila e observa os arquivos SASS
natours_project> npm run start

># Esse comando ativa um script que compila, concatena, prefixa e compressa o codigo SASS para o codigo final em CSS
natours_project> npm run build:css
```

## Media content:

* Icons: [Linea](http://linea.io/)

* Imagens: [Unsplash](https://unsplash.com/)

* Video de Fundo: [Coverr](http://www.coverr.co)
---

## Documentação - HTML

O documento é classificado com idioma em Ingles `<html lang="en">`

### HEAD
 
```html
<!-- Charset UTF-8 - aceita caracteres do tipo utf-8 -->
<meta charset="UTF-8">
<!-- Google Fonts - fontes dos textos -->
<link href="https://fonts.googleapis.com" rel="stylesheet">
<!-- Icon Fonts - CSS que conteu os icons utilizado -->
<link rel="stylesheet" href="css/icon-font.css">
<!-- CSS gerado ao compilar os arquivos SASS (scss) -->
<link rel="stylesheet" href="css/style.css">
<!-- Fav Icon -->
<link rel="shortcut icon" type="image/png" href="img/favicon.png">
``` 
### Body - Corpo do Site

O body é dividido em cinco componentes:

1. Navegação (Navigation):

   - Input (_checkbox_) → Permite acesso a pseudo-seletor `:checked` que permite criar os efeitos responsáveis pelo menu.

   - Label → É possível conectar o valor da _checkbox_ com o _label_ por meio de um atributo do HTML chamado `for`, esse atributo conecta o _label_ com o _input_ e isso possibilita a alteração do valor do _input_ mesmo interagindo com o _label_. [Mais detalhes](#notfinish)

   - Div → Esse elemento é o plano de fundo do menu de navegação. [Mais detalhes](#notfinish)
   
   - Nav → O menu de navegação em si, aqui estão listados os tópicos do site.

2. Cabeçalho (header):

   O cabeçalho (Header) é o componente mais ao topo, ele tenta capturar a atenção do usuário do site por meio de um design simples, agradável mas muito rico em informação. A composição do cabeçalho são, basicamente, dois componentes:
   * Logo branco, esquerda superior;
   * Corpo do bloco → plano de fundo e textos;

3. Conteúdo princial (Main): 

   Conteúdo do site reforça o padrão do site. Onde o visual, as imagens e as interações são mais atrativas do que os textos (que são ipsum lorem logo sem signficado)
   
   O layout do site é bem comum mas se destaca devido os vários efeitos e recursos utilizados para atrair o olhar do usuário.

4. Rodapé (Footer):

   Rodapé é o o último componente visível, ele é extremamente simples e direto. 
   
   O motivo da navegação do rodapé ser diferente da navegação principal é para criar um mapa visual diferente do estabelecido pela navegação principal. Esse é um conceito de projeto de layout que ajuda usuários que não entenderam, ou encontraram, o que buscavam apenas com o menu principal.

5. Popup:

   Popup é um componente, que inicialmente, não é visível até ser ativado.

## Documentação - CSS

Metodologia de organização utilizada: Block Element Modifier (BEM).

Linguagem pre processada utilizado: SASS (SCSS)

Arquitetura: 7 -> 1:
```
/sass
   ├── /abstract
   │     ├── _function.scss
   │     ├── _mixins.scss
   │     └── _variables.scss 
   ├── /base
   │     ├── _animations.scss
   │     ├── _base.scss
   │     ├── _typography.scss 
   │     └── _utilities.scss 
   ├── /components
   │     ├── _bg-video.scss
   │     ├── _button.scss
   │     ├── _cards.scss 
   │     ├── _compositions.scss 
   │     ├── _feature-box.scss 
   │     ├── _form.scss 
   │     └── _story.scss 
   ├── /layout
   │     ├── _footer.scss
   │     ├── _grid.scss
   │     ├── _header.scss
   │     ├── _navigation.scss 
   │     └── _popup.scss 
   ├── /page 
   │     └── _home.scss 
   │  
   └── main.scss

```

> Duas pasta estão faltando: a themes e a vendors. A themes é pra temas que aplicam acima do layout ou template, a vendors são arquivos externos, frameworks etcs.

### Documentação - CSS - abstract

A seção _abstract_ é exclusiva para qualquer tipo de informação ou código não relacionado com atributos diretos, os três arquivos básicos de todo _abstract_ de qualquer projeto são:
1. _**Functions**_ - Arquivo vazio nesse projeto, mas basicamente consiste de funções implementadas no SASS.
2. _**Mixins**_ - um _mixin_ é um conjunto de atributos que podem ser agrupados e reutilizados em outros componentes.
3. _**Variables**_ - Variáveis, utés para declarar cor, margin e outros atributos que podem ser alterados em blocos, sem a necessidade de recodificar tudo. 

### Documentação - CSS - base

A seção do _base_ é composta de componentes definições básicas do projeto. Essas definições envolvem tipografia, espaçamentos, classes utilitárias, animações etc. A base do projeto Natours pode ser divida em quatro:  
1. _**Animations**_ - Animações criadas, uma vantagem do SASS é que é possível criar laços lógicos para codificar as animações.
2. _**Base**_ - As bases do sistema, aqui inclui remoção do espaçamento padrão do HTML, definição das fontes básica (tanto para desktop quanto para mobile **[OBS](#mobile)**).
3. _**Typography**_ - São as definições tipográfica da página, que inclui:
   * Font-family: a familia da fonte ou o estilo da fonte
   * Font-size: tamanho da fonte;
   * Formatação de cabeçalhos (h1,h2,h3,h4,h5,h6) e paragrafos (p);
4. _**Utilities**_ - São classes utilitárias que tem uma unica função, em geral são responsáveis pela margin ou outras propriedades ou outros conjuntos de propriedades.  

### Documentação - CSS - components

_Compoents_ são os componentes implementados para o site. Esses componentes devem ser versáteis, reusáveis e flexíveis. Os componentes criados nesse projeto foram:
1. _**bg_video**_ - Background video. Esse componente transforma o elemento que ele estiver vinculado em um plano de fundo do tamanho de seu componente _"pai"_, extremamente util e reusável.
2. _**Button**_ - São todos os botões criados:

```css
.btn, .btn--green, .btn--white, .btn--animated & .btn--text
```



## CSS Popup/Modal Trick

O _modal_/_popup_ sem o uso de _javascript_, consiste em uma combinação de seletores para criar e mascarar o efeito. 

Essa técnica consiste em utilizar um pseudo-seletor <code>#id:target</code>, esse pseudo-seletor funciona em conjunto com a técnica de ancoragem interna: `www.site.com#id`.

> Mais informações sobre ancoragem interna [nesse link](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a#attr-href). 

> Modal/Popup Trick - criado no codepen apenas com SASS (SCSS): [nesse link](https://codepen.io/cyt231/pen/MLzQEp?editors=1100)

## Navegação (Navigation)

A navegação do site é projetada para ocupar todo o espaço visível do navegador, seja ele mobile ou desktop, e esconder o restante do conteúdo do site, para o usuário focar apenas no menu.

[Componente Navigation em SCSS](/sass/layout/_navigation.scss)

### CSS Toggle Navigation Trick

Para os componentes envolvidos no menu de navegação é utilizada uma técnica que altera a funcionalidade de um elemento `<input type="checkbox">` por propriedades CSS para criar o efeito desejado.

>Obs: Evitar o uso dessa técnica ao máximo, pois utiliza recursos desnecessário. E, por alterar a funcionalidade de um componente html, não é uma boa prática.

> CCS Toggle Navigation - [Codepen](https://codepen.io/cyt231/pen/QYJQLL?editors=0100)

Para criação do menu de navegação, esse é um truque que utiliza o pseudo-seletor (:checked) para criar um elo que influencia os parentes do objeto selecionado. 

Menu de navegação é composto por 4 componentes:

1. Input (element) - Esse é o componente que cria o truque
2. Button (botão) - É a label da checkbox
3. Navigation Background - é  uma div que está posicionada atrás do botão, escondida
4. Navigation Itens - são os itens de navegação que estão invisiveis

> Obs: essa não é a forma mais correta de criar esse efeito, devido a comportamentos adversos do CSS

# Mobile

O design e a responsividade do Natours está ruim, o que falta no site para responsividade ser considerada aceitável:

- [ ] Layout Ajustar com o Tamanho da tela;
- [ ] Os textos se ajustarem com o tamanho da tela;
- [ ] Alterar a imagem exibida com base na taxa de pixel da tela;
- [ ] Alterar a imagem exibida com base no tamanho da tela;
- [ ] Remover as interações por mouse quando o dispositivo for touch;
- [ ] Adicionar as interações e estímulos quando o dispositivo for touch;
- [ ] Aumentar a performace do site em dispositivos mobile removendo efeitos desnecessários;