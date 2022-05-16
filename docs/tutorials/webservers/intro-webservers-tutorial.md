---
lang: pt-BR
title: Web Servers
description: Conectando com serviços de Banco de Dados
head:
  - - meta
    - name: foo
      content: bar
  - - link
    - rel: canonical
      href: foobar
---


# Web Servers


Para conectar sua API com um serviço de Banco de Dados é bem simples, vamos precisar de especificar algumas das opções abaixo:

---
Configurando:
  - **--user**: | especificar o usuário
  - **--password**: | específicar porta para o servidor de escutar
  - **--dbname**: | definir tradução de linguagem
---

<br>
<br>

Agora vamos digitar o comando abaixo para conectar:

```sh
barca --user root --password 12345 --dbname "test" integrate <database> <diretorio>
```

<br>
<br>
Pronto!
<br>
Seu projeto adquiriu conexão

<br>
<br>






<!-- relative path -->
[Home](../README.md)  
[Config Reference](../reference/config.md)  
[Getting Started](./getting-started.md)  
<!-- absolute path -->
[Guide](/guide/README.md)  
[Config Reference > markdown.links](/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com)  



[[toc]]