## Fundamentos em Redes de Computadores

Redes de computadores é a prática de *conectar* computadores entre si para permitir a comunicação e a troca de dados entre eles. Em geral, **Rede de Computadores** é um conjunto de dois ou mais computadores. Ele ajuda os usuários a se comunicarem com mais facilidade. Neste artigo, vamos discutir o básico que todos devem saber antes de se aprofundar em redes de computadores.

<br>

#### Como funciona uma rede de computadores?

Os blocos básicos de construção de uma rede de computadores são nós e links. Um Nó de Rede pode ser ilustrado como Equipamento para Comunicação de Dados como um *Modem*, *Roteador*, etc., ou Equipamento de um Terminal de Dados como conectar dois computadores ou mais. Link em Redes de Computadores pode ser definido como fios ou cabos ou espaço livre de redes sem fio.

O funcionamento das Redes de Computadores pode ser definido simplesmente como regras ou protocolos que auxiliam no envio e recebimento de dados através dos links que permitem a comunicação das redes de Computadores. Cada dispositivo possui um endereço IP, que ajuda na identificação de um dispositivo.

<br>

### Terminologias Básicas de Redes de Computadores

  - **Network:** Uma rede é um conjunto de computadores e dispositivos conectados entre si para permitir a comunicação e a troca de dados.

  - **Nodes:** Os nós são dispositivos conectados a uma rede. Isso pode incluir computadores, servidores, impressoras, roteadores, [switches](../layers/data_link/switches.md) e outros dispositivos.
  
  - **Protocol:** Um protocolo é um conjunto de regras e padrões que governam como os dados são transmitidos em uma rede. Exemplos de protocolos incluem [TCP/IP](#tcp-model-ancor), [HTTP](../layers/application/http.md) e [FTP](../layers/application/ftp.md) .

  - **Topologia:** A topologia de rede refere-se ao arranjo físico e lógico dos nós em uma rede. As topologias de rede comuns incluem barramento, estrela, anel, malha e árvore.
  
  - **Redes de Provedores de Serviços:** Esses tipos de redes dão permissão para obter Capacidade e Funcionalidade de Rede em locação do Provedor. As redes de provedores de serviços incluem comunicações sem fio, operadoras de dados, etc.
  
  - **Endereço IP:** Um endereço **IP** é um identificador numérico exclusivo atribuído a todos os dispositivos em uma rede. Os endereços **IP** são usados ​​para identificar dispositivos e permitir a comunicação entre eles.
  
  - **DNS:** [O Domain Name System (DNS)] é um protocolo usado para traduzir nomes de domínio legíveis por humanos (como www.google.com) em endereços **IP** que os computadores possam entender.

  - **Firewall:** Um firewall é um dispositivo de segurança usado para monitorar e controlar o tráfego de entrada e saída da rede. Os firewalls são usados ​​para proteger as redes contra acesso não autorizado e outras ameaças à segurança.


<br>

### Redes de Computadores Empresariais

- **LAN:** Uma rede local **(LAN)** é uma rede que cobre uma área pequena, como um escritório ou uma casa. As **LANs** são normalmente usadas para conectar computadores e outros dispositivos dentro de um prédio ou campus.

 - **WAN:** Uma [**Wide Area Network (WAN)**](../layers/network/WAN/intro.md) é uma rede que cobre uma grande área geográfica, como uma cidade, país ou até mesmo o mundo inteiro. As WANs são usadas para conectar **LANs** e são normalmente usadas para comunicação de longa distância.

- **Redes em nuvem:** as redes em nuvem podem ser visualizadas com uma rede de longa distância **(WAN)**, pois podem ser hospedadas em provedores de serviços em nuvem públicos ou privados e as redes em nuvem estão disponíveis se houver demanda. As redes em nuvem consistem em roteadores virtuais, firewalls, etc.

Estes são apenas alguns conceitos básicos de redes de computadores. A rede é um campo vasto e complexo, e há muito mais conceitos e tecnologias envolvidos na construção e manutenção de redes. Agora vamos discutir mais alguns conceitos sobre Redes de Computadores.

- **Sistema aberto:**  Um sistema que está conectado à rede e está pronto para comunicação. 
- **Sistema fechado:**  Um sistema que não está conectado à rede e não pode ser comunicado.

<br>

### Arquitetura de Rede de Computadores

A Rede de Computadores se enquadra nestas amplas categorias:

- **Arquitetura cliente-servidor:** A arquitetura *cliente-servidor* é um tipo de arquitetura de rede de computadores em que os nós podem ser servidores ou clientes. Aqui, o nó servidor pode gerenciar o comportamento do nó cliente.

- **Arquitetura Peer-to-Peer:** Na arquitetura **P2P** **(Peer-to-Peer)** não existe o conceito de Servidor Central. Cada dispositivo é gratuito para funcionar como cliente ou servidor.

<br>

### Dispositivos de Rede

Uma interconexão de vários dispositivos, também conhecidos como hosts, que são conectados usando vários caminhos com a finalidade de *enviar/receber* dados ou mídia. As redes de computadores também podem incluir vários dispositivos/meios que auxiliam na comunicação entre dois dispositivos diferentes; eles são conhecidos como dispositivos de rede e incluem coisas como [**roteadores**](../layers/data_link/router.md), [**switches**](../layers/data_link/switches.md), **hubs** e pontes. 

<br>

### Topologia de Rede

A topologia de rede é o arranjo de layout dos diferentes dispositivos em uma rede. Exemplos comuns incluem **barramento**, **estrela**, **malha**, **anel** e **cadeia** em série.

<br>

#### Modelo OSI 

**OSI** significa Open Systems Interconnection. É um modelo de referência que especifica padrões para protocolos de comunicação e também as funcionalidades de cada camada. O **OSI** foi desenvolvido pela Organização Internacional de Padronização e é uma arquitetura de *7 camadas*. Cada camada do OSI tem funções diferentes e cada camada deve seguir protocolos diferentes. As **7 camadas** são as seguintes: 

<br>

1. [Camada física](../layers/physical/intro.md)
2. Camada de enlace de dados
3. Camada de rede
4. Camada de transporte
5. Camada de Sessão
6. Camada de apresentação
7. Camada de aplicação

<br>

![computer network osi model](../../../../static/community/docs/tutorials/network/fundamentals/computer-network-osi-model-layers.png)

<br>

<a id="tcp-model-ancor">



</a>