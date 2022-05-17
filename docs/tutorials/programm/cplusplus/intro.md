---
lang: pt-BR
title: Introdução ao C/C++
description: Este conteúdo é dedicado a todos que já conhecem ou quer saber mais sobre a linguagem de programação C/C++.
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

## A Linguagem C

<br/>
<br/>

### História

<br/>

**C** é uma linguagem de programação de computador que foi criado  na década de 1970. Os recursos do **C** refletem claramente os recursos das CPUs visadas. A linguagem encontrou uso duradouro em sistemas operacionais, drivers de dispositivos, pilhas de protocolos, embora cada vez menos para software de aplicativos, e é comum em arquiteturas de computadores que vão desde os maiores supercomputadores até os menores microcontroladores e sistemas embarcados.

Um sucessor da linguagem de programação **B**, **C** foi originalmente desenvolvido por *Dennis Ritchie* entre 1972-1973 para contruir utilitários rodando em Unix.

A linguagem **C** pode ser facilmente encontrada em grandes jogos do mercado atual, editores de imagem e vídeo, robôs, sistemas de automação, e também muitos sistemas operacionais são programados totalmente ou parcialmente em **C**, como por exemplo o Windows, o Linux e o Mac OS.

Ela foi pensada para ser uma linguagem que lida diretamente com o hardware, o que significa que você pode encontrar com facilidade em processadores, microcontroladores e drivers.

<br/>

### Visão

<br/>

**C** é uma linguagem procedural imperativa que suporta programação estruturada, escopo de variável léxica e recursão, com um sistema de tipo estático.

Ela foi projetado para ser compilado para fornecer acesso de baixo nível à memória e construções de linguagem que mapeiam eficientemente instruções de máquina, tudo com suporte mínimo de tempo de execução. 

Apesar de seus recursos de baixo nível, ela foi projetada para incentivar a programação entre plataformas. Um programa **C** compatível com padrões escrito com portabilidadeem mente pode ser compilado para uma ampla variedade de plataformas de computador e sistemas operacionais com poucas alterações em seu código-fonte.

<br/>

### Exemplo

<br/>

Abaixo nós teremos uma função básica nomeada de **soma()**, que recebe como parâmetros dois valores **valorA, valorB** do tipo **int** sendo chamada de dentro da função principal -> **main**, 

<br/>
<br/>

```c
#include <stdio.h> 

// definindo uma função que retorne 
// o resultado em formato inteiro
int soma(int a, int b)  {

  // definindo variável do tipo inteiro
  int resultado;
  
  // somando os valores do argumentos
  // passado na função do tipo inteiro
  resultado = a + b;
  
  // retorne o resultado esperado
  return resultado;
}

// executar função soma(int a, int b) 
// de dentro da main()
int main() {

  // definir variáveis
  int a, b, resultSoma;

  // atribuir valores nas variáveis
  valorA = 22;
  valorB = 11;

  // atribuir o resultado retornado
  // da função soma(a, b) a variável resultSoma
  resultSoma = soma(valorA, valorB);
  
  printf("A soma de %d + %d é %d", valorA, valorB, resultSoma); 

  return 0;
}
```

<br/>
<br/>
<br/>
<br/>


::: tip ALGUMAS DIFERENÇAS


* **C** é uma linguagem orientada a procedimentos, enquanto **C++** é uma linguagem de programação orientada a objetos.

* **C** oferece suporte apenas a ponteiros, enquanto **C++** oferece suporte a ponteiros e referências.

* **C** não permite que você use sobrecarga de função, enquanto **C++** permite que você use sobrecarga de função.

* **C** oferece suporte a tipos de dados internos, enquanto **C++** oferece suporte a tipos de dados internos e definidos pelo usuário.

* A linguagem **C** segue a abordagem de programação de cima para baixo, enquanto o **C++** segue uma abordagem de programação de baixo para cima.

* **C** *scan* e *printf* são usados ​​para a entrada e saída padrão, enquanto em **C++**, *cin* e *cout* são fornecidos para operações de entrada e saída padrão.
:::




