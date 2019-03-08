# [Natours Project](https://cytsuda.github.io/natours_project/)

Natours Project é um projeto focado na criação de um website utilizando conceitos avançados de HTML/CSS.
Para esse projeto foi utilizado a liguagem pre processada SASS, para compilar o SASS foi utilizado o node-sass

## Details

Todos os arquivos CSS criados estão compilados, prefixados, concatenados e minificados. 
No projeto também inclui os arquivos SASS que geraram os arquivos finais em CSS.

## NPM SCRIPTS

No arquivo [package.json](/package.json) estão os comandos NPMs criados para aplicar os processos de compilação do SASS, concatenação com arquivos CSS de terceiros, prefixação para aumentar a compatibilidade do codigo (com navegadores antigos) e compressão do código.

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

## CSS Modal Trick

Truque do "Modal", esse é um truque de quando o usuário acessa ou clica em um link com o seguinte formato:  *```site.com#id```*, o HTML gera o pseudo-seletor chamado *```target```* que pode ser manipulado pelo CSS, assim é possível criar efeitos diversos utilizando esse principio.

> CSS Modal Trick - [Codepen](https://codepen.io/cyt231/pen/MLzQEp?editors=1100)

## Navigation

A navegação do site foi projetada para preencher a tela inteira, escondendo o conteúdo de todo o site e focando apenas no menu e suas funcionalidades.

[Navigation Files](/sass/layout/_navigation.scss)

### CSS Toogle Navigation Trick

Navigation is a checkbox trick, yeah it is weird but this project is made only with CSS (no-javascript)

> CCS Toogle Navigation - [Codepen](https://codepen.io/cyt231/pen/QYJQLL?editors=0100)
Truque da Checkbox, esse é um truque que utiliza o pseudo-seletor (:checked) para criar um elo que influencia os parentes do objeto selecionado. 
Menu de navegação é composto por 4 componentes:
1. Input (element) - Esse é o componente que cria o truque
2. Button (botão) - É a label da checkbox
3. Navigation Background - é  uma div que está posicionada atrás do botão, escondida
4. Navigation Itens - são os itens de navegação que estão invisiveis
Obs: essa não é a forma mais correta de criar esse efeito, devido a comportamentos adversos do CSS