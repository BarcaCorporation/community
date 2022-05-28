---
lang: pt-BR
title: Introdução ao JavaScript
description: Este conteúdo é dedicado a todos que já conhecem ou quer saber mais sobre a linguagem de programação JavaScript
head:
  - - meta
    - name: foo
      content: bar
  - - link
    - rel: canonical
      href: foobar
---


# Começando

<br/>

## A Linguagem JavaScript

JavaScript é uma linguagem de programação de código aberto projetada para criar Aplicativos na Web. É leve e interpretado, o que o torna muito mais rápido que outras linguagens e é integrado ao **HTML**, facilitando a implementação em Aplicativos da Web.

Esses três elementos juntos formam a espinha dorsal do Desenvolvimento Web.

1. **HTML** é a estrutura da sua página, como os cabeçalhos, o corpo do texto, todas as imagens que você deseja incluir. Basicamente define o conteúdo de uma página Web.
  
2. **CSS** controla a aparência da página (é o que você usará para personalizar fontes, cores de fundo, etc.).
   
3. **JavaScript** é o terceiro elemento. Depois de criar sua estrutura (HTML) e sua vibração estética (CSS), o JavaScript torna seu site dinâmico (atualizável automaticamente).

<br/>
<br/>

### História

<br/>

No início da década de 1990 foi um momento importante para a internet. Atores-chave como *Netscape* e *Microsoft* estavam no meio de guerras de navegadores, com o Navigator da Netscape e o Internet Explorer da Microsoft se enfrentando.

Em setembro de 1995, um programador da Netscape chamado [**Brandan Eich**](https://en.wikipedia.org/wiki/Brendan_Eich) que desenvolveu uma nova linguagem de script em apenas 10 dias. Ele foi originalmente chamado de Mocha, mas rapidamente ficou conhecido como LiveScript e, mais tarde, JavaScript.

<br/>

### Visão

<br/>
JavaScript é usado em vários campos da web a servidores, e aqui está uma lista rápida das áreas significativas em que é usado:


1. Aplicativos da Web: JavaScript é usado para adicionar interatividade e automação a sites. Portanto, se você deseja que seu aplicativo da Web seja algo mais do que apenas uma página estática de conteúdo, provavelmente precisará fazer algum "JavaScript'ing".

2. Aplicativos móveis: JavaScript não serve apenas para desenvolver aplicativos da web; também é usado para desenvolver aplicativos para telefones e tablets. Com frameworks como o React Native, você pode desenvolver aplicativos móveis completos com todas essas animações sofisticadas.

3. Jogos baseados na Web: Se você já jogou um jogo diretamente no navegador da Web, o JavaScript provavelmente foi usado para fazer isso acontecer.

4. Desenvolvimento Web de back-end: O *JavaScript* tem sido tradicionalmente usado para desenvolver as partes de front-end de um aplicativo da Web. No entanto, com a introdução do *NodeJS*, uma estrutura JavaScript de back-end predominante, as coisas mudaram. E agora, o *JavaScript* também é usado para desenvolver a estrutura de back-end.


<br/>

### Exemplo

<br/>

Abaixo está uma exemplo bem simples de como exibir `Hello World` em seu navegador utilizando uma página *html*:


```html
<html>
  <body>
  
    <script language="javascript" type="text/javascript">
      document.write("Hello 1world!");
    </script>
  
  </body>

</html>
```

<br/>

Caso esteja utilizando o runtime Node.js, você pode criar um arquivo e preencher com a seguinte estrutura:


<br/>

```js
// crie uma variável e atribua uma string
var mensagem = "Hello World!"

// crie uma função nomeada 'oi' para 
// receber como parâmetro a variável 'mensagem'
function oi(mensagem) {
  // retorne a string 'hello world'
  return mensagem;
}

// exibi o resultado 'Hello World!'
console.log(oi)


```

<br/>

No seu terminal, vá até a raíz da pasta aonde se encontra o arquivo e digite o comando:

```shell
node <nome-do-arquivo>
```


<br/>
<br/>
<br/>

