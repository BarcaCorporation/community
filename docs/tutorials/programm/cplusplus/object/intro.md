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

## Classes & Objetos em C/C++ 

<br/>


Uma **Classe** em *C/C++*, é um bloco de estrutura codificada que leva a alguns tipos de dados definido pelo programador. 

Podemos imaginar que as classes são como conjuntos e as instâncias/objetos são como elementos destes conjuntos.

Uma *interface* em **C++** (ou assinatura da classe) é definida por um arquivo de cabeçalho (**arquivo.h** ou **arquivo.hpp**), segue as etapas mostrado abaixo:


`conta.h`
```c
#include <iostream>
using namespace std;

class Conta {
  // campos privado
  int numero;
  string nome;
  float saldo;
  
  // campos público
  public:
    void init(string n, float s);
    void deposito(float valor);
    void consulta();
    int saque(float valor);
};
```

<br/>

Já a implementação da **Classe** é definida por um arquivo de extensão `.cpp` como a estrutura abaixo:

`conta.cpp`
```c
#include "conta.h"

void Conta::init(string n, float s)
{
  nome = n;
  saldo = s;
  if (saldo < 0)
    cout << "Erro ao tentar criar conta!" << endl;
}

void Conta::deposito(float valor)
{
  saldo = saldo + valor;
}

void Conta::consulta()
{
  cout << "Cliente: " << nome << endl;
  cout << "Saldo Atual: " << saldo << endl;
  cout << "Numero da Conta: " << numero << endl;
}

int Conta::saque(float valor)
{
  if (saldo < valor)
    return 0;
  else
  {
    saldo = saldo - valor;
    return 1;
  }
}

```

<br>

Última etapa seria a implementação desta Classe **Conta** em seu programa principal:

`main.cpp`
```c
#include "conta.h"

void main() {
  Conta MinhaConta;
  Conta *OutraConta;

  MinhaConta.saldo = 10; // ERROR: FORMATO INDESEJADO

  MinhaConta.inicializa("Maria", 10.25);
  OutraConta->inicializa("João", 220.00);

  MinhaConta.deposito(12.75);
  MinhaConta.consulta();
  MinhaConta.saque(15.00);
  MinhaConta.consulta();

  OutraConta->consulta();
}
```


<br/>


::: tip DICA

 **C++** possibilita ao desenvolvedor separar a interface de uma classe de sua implementação.
Esta padronização, além de facilitar a modificação dos programas, permite com que qualquer cliente que queira usar uma determinada classe apenas inclua a sua interface, não expondo o acesso direto ao *código-fonte*.

:::

## Construtores
<br/>
