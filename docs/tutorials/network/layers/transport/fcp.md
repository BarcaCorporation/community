## FCP


Protocolo significa um conjunto de instruções ou regras e regulamentos. Portanto, em vez de aprender primeiro sobre o protocolo de canal de fibra, vamos entender o que é um canal de fibra:

Fibre Channel é uma tecnologia de rede de alta velocidade usada principalmente para transmissão de dados entre data centers, servidores de computador, [switches](../data_link/switches.md) e armazenamento em taxas de dados de até `128 Gbps` com distâncias de até `10 km`.

Fibre Channel Protocol (**FCP**) é o protocolo de interface **SCSI (Small Computer System Interface)** operando em uma conexão Fibre Channel estabelecida. Como o Fibre Channel nos fornece um serviço de transferência de dados em alta velocidade, ele pode ser usado para conectar estações de trabalho, mainframes, monitores, dispositivos de armazenamento e supercomputadores. O **FCP** fornece uma maneira padronizada de armazenamento, transferência de dados e rede, pois a principal tarefa do **FCP** é garantir a transferência bem-sucedida de informações/dados grandes e volumosos para que os fabricantes possam suportar facilmente uma variedade de canais e redes.  

O protocolo Fibre Channel, também conhecido como **FC**, é um método de transferência de dados serialmente sobre cobre ou *fibra óptica* para obter menor latência e velocidades mais rápidas. É um protocolo de interface **SCSI** que utiliza conexões Fibre Channel. Este protocolo é usado para conectar computadores de alto desempenho, dispositivos de armazenamento, mainframes, estações de trabalho de big data e monitores como telas virtuais estruturadas de big data.

Portanto, o Fibre Channel é usado principalmente para conectar o armazenamento de dados do computador a servidores em redes de área de armazenamento (SAN) em data centers comerciais. Embora o canal de fibra funcione principalmente em cabos de fibra óptica, ele também é capaz de transmitir por cabos de cobre. Conforme mencionado anteriormente, os canais de fibra podem transmitir dados de `até 128 Gbps` (Gigabits por segundo), daí o nome alternativo Gigabit Fibre Channel (GFC).

<br>

### Topologias FCP
 - DAS (Armazenamento de Conexão Direta)
 - NAS (armazenamento conectado à rede)
 - SAN (rede de área de armazenamento)

### Portas FCP
  - Porta N (a porta do nó)
  - Porta F (a porta do tecido)
  - Porta L (a porta de loop)
  - Porta FL (a porta de loop de tecido)
  - Porta E (a porta de extensão)
  - Porta G (a porta genérica)
  - Porta GL (a porta de loop genérica)
  - Porta SL (a porta de loop segmentada)
  - Porta TL (a porta de loop traduzida)
  - Porta T (a porta do tronco)

<br>

Existem dois protocolos principais para canais de fibra em relação ao armazenamento em bloco:

  1. Fibre channel protocol (FCP): abordado no artigo 

  2. FICon (Fibre Connection) é um protocolo que transporta comandos ESCon (Enterprise Systems Connection), usados ​​por computadores mainframe [IBM](https://www.ibm.com/), sobre Fibre Channel.


<br>

### Recursos do FCP Fibre Channel

 - Velocidade de transferência de dados de até 128Gbps em uma distância de 10Km.
 
 - Tanto o cabo de fibra óptica quanto os cabos de cobre podem ser usados.
 
 - FCP é usado para transmitir comandos SCSI (Small Computer System Interface) através de uma Fibre Channel Network (FCN)
 
 - O Fibre Channel Protocol (FCP) é um protocolo original usado em Storage Area Network (SAN).
 
 - Os conectores SFP (Small Form-factor Pluggable) são usados ​​para facilitar uma conexão confiável, com fio e de alta velocidade.
 
 - O Fibre Channel Protocol (FCP) oferece uma faixa de largura de banda de 100 MB/s a 1,6 GB/s e pode suportar distâncias de até 500 metros a 10 quilômetros.
 
 - O FCP opera de maneira semelhante aos protocolos TCP e UDP.
 
 - O Fibre Channel Protocol (FCP) é confiável e estável, com um design equilibrado.
 
 - No Fibre Channel Protocol (FCP), os World Wide Names (WWN) são usados ​​para endereçamento. 
 
 - Esses endereços de 8 bytes consistem em 16 caracteres hexadecimais.
 
 - O Fibre Channel Protocol (FCP) usa um formato como 15:00:00:f0:8c:95:de.
 
 - Capacidade de transportar vários conjuntos de comandos de interface existentes, incluindo Protocolo de Internet (IP), SCSI, IPI, HIPPI-FP e áudio/vídeo.
 
 - Suporte para vários níveis de custo/desempenho, de pequenos sistemas a supercomputadores.
 
 - No Fibre Channel Protocol (FCP), um adaptador de barramento de host dedicado, cabos especializados e switches são usados. É diferente da Ethernet em todas as camadas do modelo OSI, incluindo a camada física


**Nome mundial (WWN):** Um World Wide Name (**WWN**) ou World Wide Identifier (**WWID**) é um identificador exclusivo usado em tecnologias de armazenamento como Fibre Channel. É um identificador exclusivo que é codificado em cada fibra, semelhante a como os dispositivos têm endereços MAC. É um nome de 64 ou 128 bits e é atribuído pelo Institute of Electrical and `Electronics Engineers IEEE` . Cada dispositivo de armazenamento de rede produzido por um fabricante deve incluir o WWN do fabricante, para ajudar os administradores de sistema (SA) a categorizar e identificar exclusivamente os segmentos de armazenamento.

O **WWN** procura por exemplo:

`15:00:00:f0:8c:08:95:de`

<br>

### Tipos de World Wide Name (WWN)

Existem basicamente dois tipos de WWNs implementados em uma FC [**Storage Area Network (SAN)**](../network/SAN/intro.md): 

<br>

1. **World Wide Node** Name (**WWNN**): Um World Wide Node Name, **WWNN** ou **WWnN**, é um World Wide Name atribuído a um nó (um terminal, um dispositivo) em uma malha Fibre Channel.

2. **World Wide Port** Name (**WWPN**): um World Wide Port Name, **WWPN** ou **WWpN**, é um nome mundial atribuído a uma porta em uma malha Fibre Channel.

Para se comportar como um identificador único na rede, ele funciona de forma semelhante ao endereço MAC no protocolo Ethernet.

<br>

O **Fibre Channel Protocol (FCP)** usa nomes de nós mundiais (WWNN) para identificar nós em redes de armazenamento de dados. Esses nomes podem identificar várias interfaces de rede em um único nó. O WWPN (World Wide Port Name) também pode ser derivado do WWNN.

- No Fibre Channel Protocol (FCP), um nome de porta mundial exclusivo (WWPN) é atribuído a cada porta individual em um nó.

- No Fibre Channel Protocol (FCP), um Host Bus Adapter (HBA) multiporta terá um número diferente de World Wide Port Names (WWPNs) para cada porta. Os WWPNs são semelhantes ao endereço MAC nas redes Ethernet. No protocolo Fibre Channel (FCP), os nomes de portas mundiais (WWPN) são gravados pelo fabricante. Eles são validados para serem globalmente únicos.

- No protocolo Fibre Channel (FCP), os nomes de portas mundiais (WWPNs) são atribuídos aos adaptadores de barramento de host (HBAs) nos sistemas cliente e de armazenamento.

- No Fibre Channel Protocol (FCP), os World Wide Port Names (WWPNs) recebem mais importância ao configurar redes Fibre Channel, em comparação com os World Wide Node Names (WWNNs).

- No protocolo Fibre Channel (FCP), os nomes de portas mundiais (WWPNs) não podem ser alterados depois de atribuídos.

<br>

### Vantagens

- FCP tem alto desempenho

- Fornece um bom backup e restauração e consolidação simplificada

- Também oferece fluxo de dados sem congestionamento, largura de banda Gigabit, compatibilidade com várias topologias e protocolos, controle de fluxo e autogerenciamento

- Ele está fornecendo transferência de dados em alta velocidade

- É econômico

- Dados de alta velocidade podem ser transferidos a uma distância de 10 km

- Suporta vários recursos tolerantes a falhas

- FCP com boa largura de banda e velocidade

- O protocolo FCP utiliza quadros de dados para transmitir informações através de uma rede, que pode ser usado tanto para comunicações em nível de link quanto em nível de dispositivo

- FCP com bom controle de fluxo

- O protocolo Fibre Channel (FCP) é conhecido por sua natureza equilibrada e confiável, proporcionando comunicação estável entre dispositivos

- O FCP é um protocolo balanceado e confiável usado para transmitir comandos SCSI (Small Computer System Interface) em redes Fibre Channel (FCN)


### Desvantagem

- O **FCP** pode ter um custo mais caro em comparação com o `iSCSI`

- O **FCP** pode ser mais caro e complexo de implementar

- O **FCP** requer a atualização dos cartões nos servidores

- Também comprando cabos e switches FC

- Mais caro que **SCSI (Small Computer System Interface)**

- Mais complexo que **SCSI (Small Computer System Interface)**

- É necessário mais equipamento/overhead (como cabos FC, interruptores, etc.)