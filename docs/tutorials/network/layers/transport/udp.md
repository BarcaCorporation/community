## User Datagram Protocol (UDP)

**User Datagram Protocol (UDP)** é um protocolo da **camada de transporte**. O **UDP** faz parte do conjunto de protocolos da Internet, conhecido como conjunto **UDP/IP**. Ao contrário do [TCP](../application/tcp.md), é um protocolo não confiável e sem conexão. Portanto, não há necessidade de estabelecer uma conexão antes da transferência de dados. O **UDP** ajuda a estabelecer conexões de baixa latência e tolerantes a perdas na rede. O **UDP** permite que o processo processe a comunicação.

Embora o [**Transmission Control Protocol (TCP)**](../application/tcp.md) seja o protocolo de camada de transporte dominante usado com a maioria dos serviços da Internet; fornece entrega garantida, confiabilidade e muito mais, mas todos esses serviços nos custam sobrecarga e latência adicionais. Aqui, o **UDP** entra em cena. Para serviços em tempo real, como jogos de computador, comunicação de voz ou vídeo, conferências ao vivo; precisamos de **UDP**. Como é necessário alto desempenho, o UDP permite que os pacotes sejam descartados em vez de processar pacotes atrasados. Não há verificação de erros no UDP, portanto, também economiza largura de banda. 
User Datagram Protocol (UDP) é mais eficiente em termos de latência e largura de banda. 

<br>

**UDP** Header


**UDP** header is an 8-bytes fixed and simple header, while for  [TCP](../application/tcp.md) it may vary from **20 bytes to 60 bytes**. The first `8 Bytes` contains all necessary header information and the remaining part consist of data. UDP port number fields are each `16 bits` long, therefore the range for port numbers is defined from `0 to 65535`; **port** number `0` is reserved. Port numbers help to distinguish different user requests or processes.

<br>

- **Porta de origem:** Porta de origem é um campo de `2 bytes` usado para identificar o número da porta da origem.

- **Porta de Destino:** É um campo de `2 Bytes`, utilizado para identificar a porta do pacote destinado.
Comprimento: Comprimento é o comprimento do **UDP** incluindo o cabeçalho e os dados. É um campo de `16 bits`.

- **Soma de verificação:** Soma de verificação é um campo de `2 bytes`. É o complemento de um de `16 bits` da soma do complemento de um do cabeçalho **UDP**, o pseudo-cabeçalho de informações do cabeçalho **IP** e os dados, preenchidos com zero octetos no final (se necessário) para fazer um múltiplo de dois octetos.



**Observações**: Ao contrário do **TCP**, o cálculo do Checksum não é obrigatório no **UDP**. Nenhum controle de erro ou controle de fluxo é fornecido pelo **UDP**. Portanto, o **UDP** depende do **IP** e do **ICMP** para relatar erros. O UDP também fornece números de porta para que possa diferenciar as solicitações dos usuários.

<br>

### Aplicações do UDP: 

- Usado para comunicação de solicitação-resposta simples quando o tamanho dos dados é menor e, portanto, há menos preocupação com o fluxo e o controle de erros.

- É um protocolo adequado para multicast, pois o UDP suporta comutação de pacotes.
UDP é usado para alguns protocolos de atualização de roteamento como RIP (Routing Information Protocol).

- Normalmente usado para aplicações de tempo real que não podem tolerar atrasos irregulares entre as seções de uma mensagem recebida.

- O UDP é amplamente utilizado em jogos online, onde a comunicação de baixa latência e alta velocidade é essencial para uma boa experiência de jogo. Os servidores de jogos geralmente enviam pequenos e frequentes pacotes de dados para os clientes, e o UDP é adequado para esse tipo de comunicação, pois é rápido e leve.

- Aplicativos de streaming de mídia, como **IPTV**, rádio online e videoconferência, usam UDP para transmitir dados de áudio e vídeo em tempo real. A perda de alguns pacotes pode ser tolerada nessas aplicações, pois os dados estão fluindo continuamente e não requerem retransmissão.

- Serviços de **VoIP (Voice over Internet Protocol)**, como [*Skype*](http://www.skype.com/)e [*WhatsApp*](https://www.whatsapp.com/), usam **UDP** para comunicação de voz em tempo real. O atraso na comunicação de voz pode ser perceptível se os pacotes estiverem atrasados ​​devido ao controle de congestionamento, portanto, o UDP é usado para garantir uma transmissão de dados rápida e eficiente.

- [**DNS (Domain Name System)**](../application/dns.md) também usa **UDP** para suas mensagens de consulta/resposta. As consultas de [**DNS**](../application/dns.md) geralmente são pequenas e exigem um tempo de resposta rápido, tornando o UDP um protocolo adequado para esse aplicativo.

- [**DHCP (Dynamic Host Configuration Protocol)**](../application/dhcp.md) usa **UDP** para atribuir dinamicamente **endereços IP** a dispositivos em uma rede. As mensagens **DHCP** geralmente são pequenas e o atraso causado pela perda ou retransmissão de pacotes geralmente não é crítico para esse aplicativo.

- As implementações a seguir usam o **UDP** como protocolo da camada de transporte:
  - - NTP (protocolo de tempo de rede)
  - - DNS (Serviço de nome de domínio)
  - - BOOTP, DHCP.
  - - NNP (protocolo de notícias de rede)
  - - TFTP, RTSP, RIP.

- A camada de aplicação pode fazer algumas das tarefas por meio de **UDP:**
  - - Traçar rota.
  - - Gravar rota.
  - - carimbo de **data/hora**.

- O **UDP** pega um datagrama da [camada de rede](../network/intro.md), anexa seu cabeçalho e o envia ao usuário. Então, funciona rápido.

- **UDP** é um protocolo nulo se você remover o campo de soma de verificação.
  - - Reduzir a exigência de recursos do computador.
  - - Ao usar **Multicast** ou **Broadcast** para transferir.
  - - A transmissão de pacotes em tempo real, principalmente em aplicações multimídia.

<br>

### UDP PSEUDO CABEÇALHO:


- o propósito de usar um pseudo-cabeçalho é verificar se o pacote UDP chegou ao seu destino correto

- o destino correto consiste em uma máquina específica e um número de porta de protocolo específico dentro dessa máquina

<br>

### Detalhes do pseudo cabeçalho UDP:

 - o próprio cabeçalho UDP especifica apenas o número da porta de protocolo. Assim, para verificar o destino, o UDP na máquina de envio calcula uma soma de verificação que cobre o endereço IP de destino, bem como o pacote UDP.

 - no destino final, o software UDP verifica a soma de verificação usando o endereço IP de destino obtido do cabeçalho do pacote IP que transportou a mensagem UDP.

 - se a soma de verificação estiver de acordo, deve ser verdade que o pacote alcançou o host de destino pretendido, bem como a porta de protocolo correta dentro desse host.

<br>

### Interface de usuário:

Uma interface de usuário deve permitir a criação de novas portas de recebimento, receber operações nas portas de recebimento que retornam os octetos de dados e uma indicação da porta de origem e do endereço de origem e uma operação que permite o envio de um datagrama, especificando os dados, origem e portas de destino e endereço a ser enviado.


### Interface IP:

- O módulo UDP deve ser capaz de determinar o endereço de internet de origem e destino e o campo de protocolo do cabeçalho de internet

- uma possível interface UDP/IP retornaria todo o datagrama da Internet, incluindo todo o cabeçalho da Internet em resposta a uma operação de recebimento

- interface também permitiria que o UDP passasse um datagrama de internet completo completo com cabeçalho para o IP a ser enviado. o IP verificaria a consistência de certos campos e calcularia a soma de verificação do cabeçalho da Internet.

- A interface IP permite que o módulo **UDP** interaja com a camada de rede da pilha de protocolos, responsável pelo roteamento e entrega de dados pela rede.

- A interface IP fornece um mecanismo para o módulo **UDP** se comunicar com outros hosts na rede, fornecendo acesso ao protocolo IP subjacente.

- A interface IP pode ser utilizada pelo módulo **UDP** para enviar e receber pacotes de dados pela rede, com o auxílio de mecanismos de roteamento e endereçamento **IP**.

- A interface IP fornece um nível de abstração que permite que o módulo **UDP** interaja com a camada de rede sem ter que lidar diretamente com as complexidades do roteamento e endereçamento IP.

- A interface IP também lida com fragmentação e remontagem de pacotes IP, o que é importante para grandes transmissões de dados que podem exceder o tamanho máximo de pacote permitido pela rede.

- A interface IP também pode fornecer serviços adicionais, como suporte para parâmetros de qualidade de serviço (**QoS**) e mecanismos de segurança, como IPsec.

- A interface IP é um componente crítico do Internet Protocol Suite, pois permite a comunicação entre os hosts na Internet e permite a transmissão contínua de pacotes de dados pela rede.

<br>