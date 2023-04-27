## Camada Física modelo OSI

A camada física é a camada mais inferior no modelo **OSI** (Open System Interconnection), que é uma representação física e elétrica do sistema. Ela consiste em vários componentes de rede, como plugues de alimentação, conectores, receptores, tipos de cabo, etc. A camada física envia bits de dados de um(s) dispositivo(s) (como um computador) para outro(s) dispositivo(s). A Camada Física define os tipos de codificação (é assim que os 0's e 1's são codificados em um sinal). A camada física é responsável pela comunicação dos fluxos de dados brutos não estruturados em um meio físico.

<br>

### Funções desempenhadas pela camada física

Estas são algumas funções importantes e básicas que são executadas pela camada física do modelo OSI:

1. A Camada Física mantém a taxa de dados (quantos bits um remetente pode enviar por segundo).

2. Realiza sincronização de bits.

3. Ajuda na decisão do Meio de Transmissão (direção da transferência de dados).

4. Auxilia na decisão da Topologia Física (Mesh, Star, Bus, Ring) (Topologia através da qual podemos conectar os dispositivos entre si).

5. Ele ajuda no fornecimento de decisões de meio físico e interface.

6. Ele fornece dois tipos de configuração, configuração ponto a ponto e configuração multiponto.

7. Ele fornece uma interface entre dispositivos (como PCs ou computadores) e meio de transmissão.

8. Possui uma unidade de dados de protocolo em bits.

9. Dispositivos de hubs, Ethernet, etc. são usados ​​nesta camada.

10. Esta camada pertence à categoria de Camadas de Hardware (uma vez que a camada de hardware é responsável por todo o estabelecimento e processamento da conexão física também).

11. Ele fornece um aspecto importante chamado Modulação, que é o processo de converter os dados em ondas de rádio adicionando as informações a um sinal elétrico ou de nervo óptico.

12. Ele também fornece mecanismo de comutação em que os pacotes de dados podem ser encaminhados de uma porta (porta do remetente) para a porta de destino principal.

<br>

### Topologias Físicas:

Topologia Física ou Topologia de Rede é a Representação Geográfica dos Dispositivos de Ligação. A seguir estão os quatro tipos de topologia física:

1. Topologia de malha: em uma topologia de malha, todo e qualquer dispositivo deve ter uma conexão ponto a ponto dedicada com todos os outros dispositivos da rede. Aqui há mais segurança de dados porque há uma conexão ponto a ponto dedicada entre dois dispositivos. A topologia de malha é difícil de instalar porque é mais complexa.

2. Topologia em estrela: Na topologia em estrela, o dispositivo deve ter uma conexão ponto a ponto dedicada com um controlador central ou hub. A topologia em estrela é fácil de instalar e reconectar em comparação com a topologia em malha. A topologia em estrela não possui técnica de tolerância a falhas.

3. Topologia de barramento: Em uma topologia de barramento, vários dispositivos são conectados por meio de um único cabo conhecido como cabo de backbone com a ajuda de linhas de derivação e queda. É menos dispendioso em comparação com a topologia de malha e a topologia de estrela. A reconexão e a reinstalação são difíceis.

4. Topologia em Anel: Em uma topologia em anel, cada dispositivo é conectado com repetidores em um anel circular, por isso é chamado de Topologia em Anel. Na topologia em anel, um dispositivo pode enviar os dados apenas quando tiver um token, sem um token nenhum dispositivo pode enviar os dados e um token é colocado pelo monitor na topologia em anel.

<br>

**Configuração Ponto a Ponto:** Na configuração Ponto a Ponto, existe uma linha (link) totalmente dedicada a transportar os dados entre dois dispositivos.

**Configuração Multiponto:** Na configuração Multiponto, existe uma linha (link) através da qual vários dispositivos são conectados.

<br>

### Modos de Meio de Transmissão:

 1. **Modo Simplex:** Neste modo, de dois dispositivos, apenas um dispositivo pode transmitir os dados, o outro dispositivo pode apenas receber os dados. Exemplo- entrada de teclados, monitores, transmissão de **TV**, transmissão de rádio, etc.

 2. **Modo Half Duplex:** Neste modo, de dois dispositivos, ambos os dispositivos podem enviar e receber os dados, mas apenas um de cada vez, não simultaneamente. Exemplo- Walkie-Talkie, trilhos de trem, etc.
 
 3. **Modo Full-Duplex:** Neste modo, ambos os dispositivos podem enviar e receber os dados simultaneamente. Exemplo - Sistema telefônico, aplicativos de bate-papo, etc.