---
lang: pt-BR
title: TCP
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

## Protocolo TCP

<br/>
<br/>

### História

<br/>

Em maio de 1974, o Instituto de Engenheiros Eletricistas e Eletrônicos publicou um artigo intitulado "A Protocol for Packet Network Interconnection".

Os autores do artigo, Vinton G. Cerf e Robert Kahn descreveram um protocolo de interconexão para compartilhamento de recursos usando comutação de pacotes ao longo dos nós. Um componente central de controle deste modelo foi o Transmission Control Program, que incorporou os elos e serviços orientados para datagrama entre hosts.

O programa de controle de transmissão monolítico foi dividido depois dentro de uma arquitetura modular formada de um Protocolo de controle de transmissão na camada orientada a conexão e o Protocolo de internet na camada de interconexão. O modelo se torna informalmente conhecido como **TCP/IP**, embora formalmente tenha sido chamado de Internet Protocol Suite.

<br/>
<br/>

### Visão

<br/>

**TCP** é um dos protocolos de comunicação, da camada de transporte da rede de computadores do Modelo OSI, que dão suporte a rede global de internet, verificando se os dados são enviados na sequência correta e sem erros. É complementado pelo protocolo da Internet, normalmente chamado de **TCP/IP**.

Neste protocolo da camada de transporte (camada 4 OSI) se assentam a maioria das aplicações cibernéticas, como o **SSH**, **FTP**, **HTTP** — portanto, a World Wide Web, devido sua versatilidade e robustez. O Protocolo de controle de transmissão provê confiabilidade, entrega na sequência correta e verificação de erros dos pacotes de dados, entre os diferentes nós da rede, para a camada de aplicação.

As Aplicações que não requerem um serviço de confiabilidade de entrega de pacotes podem se utilizar de protocolos mais simples como o User Datagram Protocol (**UDP**), que provê um serviço que enfatiza a redução de latência da conexão.

<br/>
<br/>

## TCP Client

<br/>
<br/>


<br/>

## TCP Server

<br/>

