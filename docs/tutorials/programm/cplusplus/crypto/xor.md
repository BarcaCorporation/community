---
lang: pt-BR
title: XOR Cypher
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

## Criptografia XOR

<br/>

Uma cifra simples de repetição **XOR** (ou seja, usando a mesma chave para operação xor em todos os dados) é, portanto, algumas vezes usada para ocultar informações nos casos em que nenhuma segurança específica é necessária. A **cifra XOR** é frequentemente usada em malware de computador para dificultar a engenharia reversa.

Se a chave for aleatória e for pelo menos tão longa quanto a mensagem, a cifra XOR é muito mais segura do que quando há repetição de chave dentro de uma mensagem. Quando o fluxo de chaves é gerado por um gerador de números pseudo-aleatórios, o resultado é uma cifra de fluxo. Com uma chave verdadeiramente aleatória, o resultado é um one-time pad, que é inquebrável em teoria.

<br/>
<br/>

```c++
#include<bits/stdc++.h>
 
// função para criptografar e descriptografar
void encryptDecrypt(char inputString[]) {
  // definir XOR key com 
  // qualquer caractere
  char xorKey = 'P';
  // calcular comprimento da string
  int len = strlen(inputString);
  for (int i = 0; i < len; i++) {
    inputString[i] = inputString[i] ^ xorKey;
    printf("%c",inputString[i]);
  }
}
 
int main() {
  char cipherString[] = "Barca-Community";
  // criptografar texto Barca-Community
  printf("Texto criptografado: ");
  encryptDecrypt(cipherString);
  printf("\n");

  // descriptografar texto
  printf("Texto descriptografado: ");
  encryptDecrypt(cipherString);

  return 0;
}
```

