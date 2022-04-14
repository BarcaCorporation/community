---
lang: pt-BR
title: Winsock TCP/IP 
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

## TCP Client/Server no Windows

<br/>

Um soquete do Windows (Winsock) é uma Interface de Programação de Aplicativos (API) que permite a comunicação entre o software de rede do Windows e os serviços de rede, como o **TCP/IP** (Transmission Control Protocol/Internet Protocol). O *Winsock* é baseado na interface de soquetes **Berkeley Unix**.

Existe dois tipos de aplicativos em rede de soquete: servidor e cliente.

Servidores e Clientes têm comportamentos distinto, o processo de criá-los é diferente. O que vem a seguir é o modelo geral para criar um cliente e servidor TCP/IP de streaming.

<br/>
<br/>


<br/>

## Winsock Server

Siga as simples etapas para construir um servidor **TCP** no Windows

1. Inicialize o Winsock.
2. Crie um soquete.
3. Vincular o soquete.
4. Escutar o soquete de um cliente.
5. Aceitar conexão de um cliente.
6. Receber e enviar dados.
7. Desconectar.


::: details TCP Server Código-Fonte 
```c++
#undef UNICODE

#define WIN32_LEAN_AND_MEAN

#include <windows.h>
#include <winsock2.h>
#include <ws2tcpip.h>
#include <stdlib.h>
#include <stdio.h>
// necessário associar com Ws2_32.lib
#pragma comment (lib, "Ws2_32.lib")
// #pragma comment (lib, "Mswsock.lib")

#define DEFAULT_BUFLEN 512
#define DEFAULT_PORT "27015"

int __cdecl main(void) {
    WSADATA wsaData;
    int iResult;

    SOCKET ListenSocket = INVALID_SOCKET;
    SOCKET ClientSocket = INVALID_SOCKET;

    struct addrinfo *result = NULL;
    struct addrinfo hints;

    int iSendResult;
    char recvbuf[DEFAULT_BUFLEN];
    int recvbuflen = DEFAULT_BUFLEN;
    
    // iniciar Winsock
    iResult = WSAStartup(MAKEWORD(2,2), &wsaData);
    if (iResult != 0) {
      printf("WSAStartup failed\nError: %d\n", iResult);
      return 1;
    }

    ZeroMemory(&hints, sizeof(hints));
    hints.ai_family = AF_INET;
    hints.ai_socktype = SOCK_STREAM;
    hints.ai_protocol = IPPROTO_TCP;
    hints.ai_flags = AI_PASSIVE;

    // tratar endereço e a porta do servidor
    iResult = getaddrinfo(NULL, DEFAULT_PORT, &hints, &result);
    if ( iResult != 0 ) {
      printf("getaddrinfo failed\nError: %d\n", iResult);
      WSACleanup();
      return 1;
    }

    // crie um SOCKET para se conectar ao servidor
    ListenSocket = socket(result->ai_family, result->ai_socktype, result->ai_protocol);
    if (ListenSocket == INVALID_SOCKET) {
      printf("socket failed\nerror: %ld\n", WSAGetLastError());
      freeaddrinfo(result);
      WSACleanup();
      return 1;
    }

    // configurar o soquete TCP
    iResult = bind( ListenSocket, result->ai_addr, (int)result->ai_addrlen);
    if (iResult == SOCKET_ERROR) {
      printf("bind failed\nError: %d\n", WSAGetLastError());
      freeaddrinfo(result);
      closesocket(ListenSocket);
      WSACleanup();
      return 1;
    }

    freeaddrinfo(result);

    iResult = listen(ListenSocket, SOMAXCONN);
    if (iResult == SOCKET_ERROR) {
      printf("listen failed\nerror: %d\n", WSAGetLastError());
      closesocket(ListenSocket);
      WSACleanup();
      return 1;
    }

    // aceitar conexão com um cliente
    ClientSocket = accept(ListenSocket, NULL, NULL);
    if (ClientSocket == INVALID_SOCKET) {
      printf("accept failed\nError: %d\n", WSAGetLastError());
      closesocket(ListenSocket);
      WSACleanup();
      return 1;
    }
    // sair
    closesocket(ListenSocket);

    // esperar resposta
    do {

      iResult = recv(ClientSocket, recvbuf, recvbuflen, 0);
      if (iResult > 0) {
        printf("Bytes recebido: %d\n", iResult);
        // reenviar buffer ao cliente
        iSendResult = send( ClientSocket, recvbuf, iResult, 0 );
        if (iSendResult == SOCKET_ERROR) {
          printf("send failed\nError: %d\n", WSAGetLastError());
          closesocket(ClientSocket);
          WSACleanup();
          return 1;
        }
        printf("Bytes enviado: %d\n", iSendResult);
      }
      else if (iResult == 0)
        printf("Desconectando...\n");
      else  {
        printf("recv failed\nError: %d\n", WSAGetLastError());
        closesocket(ClientSocket);
        WSACleanup();
        return 1;
      }

    } while (iResult > 0);

    // desligue a conexão desde que terminamos
    iResult = shutdown(ClientSocket, SD_SEND);
    if (iResult == SOCKET_ERROR) {
      printf("shutdown failed\nError: %d\n", WSAGetLastError());
      closesocket(ClientSocket);
      WSACleanup();
      return 1;
    }

    // limpar e sair
    closesocket(ClientSocket);
    WSACleanup();

    return 0;
}
```
:::

## Winsock Client

1. Inicialize o Winsock.
2. Crie um soquete.
3. Conectar com o servidor.
4. Enviar e receber dados.
5. Desconectar.


::: details TCP Client Código-Fonte 
```c++
#define WIN32_LEAN_AND_MEAN

#include <windows.h>
#include <winsock2.h>
#include <ws2tcpip.h>
#include <stdlib.h>
#include <stdio.h>

// necessário vincular com Ws2_32.lib, Mswsock.lib e Advapi32.lib
#pragma comment (lib, "Ws2_32.lib")
#pragma comment (lib, "Mswsock.lib")
#pragma comment (lib, "AdvApi32.lib")

#define DEFAULT_BUFLEN 512
#define DEFAULT_PORT "27015"

int __cdecl main(int argc, char **argv) {
  WSADATA wsaData;
  SOCKET ConnectSocket = INVALID_SOCKET;
  struct addrinfo *result = NULL, *ptr = NULL, hints;
  const char *sendbuf = "welcome to barca";
  char recvbuf[DEFAULT_BUFLEN];
  int iResult;
  int recvbuflen = DEFAULT_BUFLEN;
  
  // validar parâmetros
  if (argc != 2) {
    printf("usage: %s server-name\n", argv[0]);
    return 1;
  }

  // iniciar Winsock
  iResult = WSAStartup(MAKEWORD(2,2), &wsaData);
  if (iResult != 0) {
    printf("WSAStartup failed\nError: %d\n", iResult);
    return 1;
  }
  // clear buffer
  ZeroMemory( &hints, sizeof(hints) );
  hints.ai_family = AF_UNSPEC;
  hints.ai_socktype = SOCK_STREAM;
  hints.ai_protocol = IPPROTO_TCP;

  // receber e tratar endereço e porta do servidor
  iResult = getaddrinfo(argv[1], DEFAULT_PORT, &hints, &result);
  if ( iResult != 0 ) {
    printf("getaddrinfo failed \nError: %d\n", iResult);
    WSACleanup();
    return 1;
  }

  // conectar a um endereço de rede válido
  for(ptr=result; ptr != NULL ;ptr=ptr->ai_next) {
    // criar um socket para conectar com servidor
    ConnectSocket = socket(ptr->ai_family, ptr->ai_socktype, ptr->ai_protocol);
    if (ConnectSocket == INVALID_SOCKET) {
      printf("socket failed with error: %ld\n", WSAGetLastError());
      WSACleanup();
      return 1;
    }

    // conectar ao servidor.
    iResult = connect( ConnectSocket, ptr->ai_addr, (int)ptr->ai_addrlen);
    if (iResult == SOCKET_ERROR) {
      closesocket(ConnectSocket);
      ConnectSocket = INVALID_SOCKET;
      continue;
    }
    break;
  }

  freeaddrinfo(result);

  if (ConnectSocket == INVALID_SOCKET) {
    printf("Unable to connect to server!\n");
    WSACleanup();
    return 1;
  }

  // enviar dados em buffer
  iResult = send(ConnectSocket, sendbuf, (int)strlen(sendbuf), 0 );
  if (iResult == SOCKET_ERROR) {
    printf("send failed with error: %d\n", WSAGetLastError());
    closesocket(ConnectSocket);
    WSACleanup();
    return 1;
  }
  printf("Bytes enviado: %ld\n", iResult);

  // desconectar após envio de dados
  iResult = shutdown(ConnectSocket, SD_SEND);
  if (iResult == SOCKET_ERROR) {
    printf("shutdown failed \nError: %d\n", WSAGetLastError());
    closesocket(ConnectSocket);
    WSACleanup();
    return 1;
  }

  do {
    iResult = recv(ConnectSocket, recvbuf, recvbuflen, 0);
    if ( iResult > 0 )
      printf("Bytes recebido: %d\n", iResult);
    else if ( iResult == 0 )
      printf("Desconectado\n");
    else
      printf("recv failed\nError: %d\n", WSAGetLastError());

  } while( iResult > 0 );

  // limpar e sair
  closesocket(ConnectSocket);
  WSACleanup();

  return 0;
}
```
:::

<br/>




