---
lang: pt-BR
title: Objeto
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

## Tipos de Dados em C/C++ 

<br/>


Em **C++**, os *data type* determina o tipo e o tamanho dos dados associados às variáveis declaradas.
Todas as variáveis ​​usam tipo de dados durante a declaração para restringir o tipo de dados a serem armazenados. Portanto, podemos dizer que os tipos de dados são usados ​​para informar às variáveis ​​qual tipo de dados que elas podem armazenar. Sempre que uma variável é definida em **C++**, o compilador aloca alguma lacuna de memória para essa variável com base no tipo de dados com o qual ela é declarada. Cada tipo de dados requer uma quantidade diferente de memória.

Tipos de dados embutidos ou predefinidos podem ser usados ​​diretamente pelo usuário para declarar variáveis. exemplo: `int`, `char`, `float`, `bool`, etc. 

Segue abaixo os tipos de dados primitivos disponíveis em C++:

<br>

1. **integer:** - A palavra-chave usada para tipos de dados inteiros é int . Os inteiros normalmente exigem 4 bytes de espaço de memória e variam de -2147483648 a 2147483647.

<br>

2. **character:** - O tipo de dados de caractere é usado para armazenar caracteres. A palavra-chave usada para o tipo de dados de caractere é `char`. Caracteres normalmente requerem **1 byte** de espaço de memória e variam de -128 a 127 ou 0 a 255.

<br>

3. **boolean:** - O tipo de dados Boolean é usado para armazenar valores Boolean ou lógicos. Uma variável booleana pode armazenar true ou false . A palavra-chave usada para o tipo de dados Boolean é `bool`. 

<br>

4. **floating point:** - O tipo de dados Floating Point é usado para armazenar valores de ponto flutuante de precisão simples ou valores decimais. A palavra-chave usada para o tipo de dados de ponto flutuante é `float`. Variáveis ​​flutuantes normalmente requerem **4 bytes** de espaço de memória. 

<br>

5. **double floating point:** - O tipo de dados Double Floating Point é usado para armazenar valores de ponto flutuante de precisão dupla ou valores decimais. A palavra-chave usada para o tipo de dados de ponto flutuante `double` é `double`. Variáveis ​​duplas normalmente requerem **8 bytes** de espaço de memória. 

<br>

6. **void:** - Void significa sem qualquer valor. tipo de dados `void` representa uma entidade sem valor. Um tipo de dados void é usado para aquelas funções que não retornam um valor. 

<br>

7. **wide character:** - O tipo de dados de caractere largo também é um tipo de dados de caractere, mas esse tipo de dados tem um tamanho maior que o tipo de dados normal de **8 bits**. Representado por wchar_t . Geralmente tem **2** ou **4 bytes** de comprimento.

<br>

O tamanho das variáveis ​​pode ser diferente dos mostrados na tabela abaixo, dependendo do compilador e do computador que você estiver usando.

<br>

| Data Type  |      Size(bytes)      |  Range        |
|----------|:-------------:|------------------------:|
| char     |  1byte        | -127 to 127 or 0 to 255 |
| unsigned char |    1byte   |   0 to 255            |
| signed char |    1byte   |   -127 to 127           |
| int      |    4bytes   |   -2147483648 to 2147483647 |
| unsigned int      |    4bytes   |   0 to 4294967295 |
| signed int      |    4bytes   |   -2147483648 to 2147483647 |
| short int   |    2bytes   |   -32768 to 32767      |
| unsigned short int   |    2bytes   |   0 to 65,535   |
| signed short int   |    2bytes   |  -32768 to 32767   |
| long int   |    8bytes   |  -2,147,483,648 to 2,147,483,647   |
| signed long int   |    8bytes   |  same as long int   |
| unsigned long int   |    8bytes   |  0 to 4,294,967,295  |
| long long int   |    8bytes   |  -(2^63) to (2^63)-1 |
| unsigned long long int   |    8bytes   |  0 to 18,446,744,073,709,551,615 |
| float   |    4bytes   |  ... |
| double   |    8bytes   |  ... |
| long double   |    12bytes   |  ... |
| wchar_t | 2 or 4 bytes |   1 wide character            |


<br>

Exemplo para ver tamanho dos tipos de dados em seu computador:

<br>

```c
#include <iostream>
using namespace std;

int main() {
   cout << "size of char: " << sizeof(char) << endl;
   cout << "size of int: " << sizeof(int) << endl;
   cout << "size of short int: " << sizeof(short int) << endl;
   cout << "size of long int: " << sizeof(long int) << endl;
   cout << "size of float: " << sizeof(float) << endl;
   cout << "size of double: " << sizeof(double) << endl;
   cout << "size of wchar_t: " << sizeof(wchar_t) << endl;
   
   return 0;
}
```
