---
lang: pt-BR
title: JSON com C++
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

## JSON em C++

<br/>

* Integrando com [_nlohmann/json_](https://github.com/nlohmann/json)


<br/>


1. Baixe o [_repositório nlohmann/json_](https://github.com/nlohmann/json)
2. Vá até o diretório: **single_include/nlohmann** e copia o arquivo **json.hpp** 
3. Adicione em seu projeto o arquivo recém copiado

<br/>
<br/>

Abaixo é mostrado como utilizar a classe para tratar objeto *JSON*. 

No exemplo abaixo, foi necessário criar um arquivo *JSON* nomeado **teste.json** com a seguinte estrutura:

<br/>

```json
{
	"username": "jones",
	"email": "jones@barca.io",
	"year": 2022
}
```

<br/>
<br/>

Crie um arquivo chamado **json_test.cpp** e adicione a seguinte estrutura:

```c++
#include "json.hpp"

using json = nlohmann::json;

int main() {
  // leia um arquivo json
  std::ifstream f("teste.json", std::ifstream::in);
  // criar objeto json
  json j; 
  // inicializa o objeto json com o que foi lido do arquivo
  f >> j; 
  // exibir o objeto json
  std::cout << j << std::endl; 

  // exemplo de uso para acessar campos no objeto json
  std::cout << j.at("username") << std::endl;
  std::cout << j.at("email") << std::endl;
  // atribuindo apenas o valor do ano
  int year = j.at("year");

  std::cout << year <<std::endl;
  return 0;
}
```

Saída de exemplo:


```sh
"jones"
"jones@barca.io"
2022
```