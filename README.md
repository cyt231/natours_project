# [Natours Project](https://cytsuda.github.io/natours_project/)

Natours é um projeto focado na criação de um website utilizando conceitos avançados de HTML/CSS.

A linguagem pre-processada SASS (SCSS) foi a linguagem escolhida para o desenvolvimento do estilo da página.

Natours é um site projetado para uma Agencia de Turismo **_fictícia_** que tem como público alvo turistas que buscam paisagens paradisiacas (~~hipsters~~)  

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

O body é dividido em quatro componentes:
1. Navegação (Navigation):

   - Input (_checkbox_) → Permite acesso a pseudo-seletor `:checked` que permite criar os efeitos responsáveis pelo menu.

   - Label → É possível conectar o valor da _checkbox_ com o _label_ por meio de um atributo do HTML chamado `for`, esse atributo conecta o _label_ com o _input_ e isso possibilita a alteração do valor do _input_ mesmo interagindo com o _label_. [Mais detalhes](#notfinish)

   - Div → Esse elemento é o plano de fundo do menu de navegação. [Mais detalhes](#notfinish)
   
   - Nav → O menu de navegação em si, aqui estão listados os tópicos do site.

2. Cabeçalho (header);

O cabeçalho ou Header é o componente inicial que tenta captar a atenção do usuário do site. A estratégia utilizada no website Natours é dar vida ao site com o uso de animações sutis 

3. Conteúdo princial (Main);
4. Rodapé (Footer)

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
