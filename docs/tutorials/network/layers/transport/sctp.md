## SCTP


**SCTP** significa Stream Control Transmission Protocol.

É um protocolo orientado à conexão em redes de computadores que fornece uma associação `full-duplex`, ou seja, transmitindo múltiplos fluxos de dados entre dois pontos finais ao mesmo tempo que estabeleceram uma conexão na rede. Às vezes é referido como [TCP](../transport/tcp.md) ou **TCPng** de próxima geração, o **SCTP** facilita o suporte à conversação telefônica na Internet. Uma conversa telefônica requer a transmissão de voz junto com outros dados ao mesmo tempo em ambas as extremidades, o protocolo **SCTP** torna mais fácil estabelecer uma conexão confiável. 

O **SCTP** também visa facilitar o estabelecimento de conexões em redes sem fio e o gerenciamento da transmissão de dados multimídia. **SCTP** é um protocolo padrão `(RFC 2960)` e é desenvolvido pela Internet Engineering Task Force (**IETF**). 

<br>

Características:

- **Unicast com várias propriedades:** É um protocolo ponto a ponto que pode usar caminhos diferentes para alcançar o host final.

- **Transmissão confiável:** Usa `SACK` e `checksums` para detectar dados danificados, corrompidos, descartados, duplicados e reordenados. É semelhante ao [TCP](../transport/tcp.md), mas o `SCTP` é mais eficiente quando se trata de reordenar os dados.

- **Orientado a mensagens:** Cada mensagem pode ser enquadrada e podemos manter a ordem do fluxo de dados e as guias na estrutura. Para isso, no TCP, precisamos de uma camada diferente para abstração.

- **Multi-homing:** Pode estabelecer vários caminhos de conexão entre dois pontos finais e não precisa depender da camada IP para resiliência.

- **Segurança:** Outra característica do **SCTP** que é a segurança. No **SCTP**, a alocação de recursos para o estabelecimento da associação ocorre apenas após a verificação da identificação da troca de *cookies* para o cliente (**INIT ACK**). Como resultado, os `ataques man-in-the-middle` e de negação de serviço são menos prováveis. Além disso, o `SCTP` não permite conexões semi-abertas, tornando-o mais resistente a inundações de rede e ataques mascarados.

<br>

### Vantagens:

- É uma conexão `full-duplex`, ou seja, os usuários podem enviar e receber dados simultaneamente.

- Permite ligações semi-fechadas.

- Os limites da mensagem são mantidos e o aplicativo não precisa dividir as mensagens.

- Possui propriedades dos protocolos **TCP** e **UDP**.

- Não depende da camada IP para resiliência de caminhos.

<br>

### Desvantagens:

- Um dos principais desafios é que requer alterações na pilha de transporte no nó.

- Os aplicativos precisam ser modificados para usar **SCTP** em vez de **TCP/UDP**.

- Os aplicativos precisam ser modificados para lidar com vários fluxos simultâneos.