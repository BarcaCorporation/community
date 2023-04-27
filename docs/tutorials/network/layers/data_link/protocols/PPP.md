## Point-to-Point Protocol (PPP)

**PPP** significa Protocolo Ponto-a-Ponto. PPP é o protocolo **RAS (Remote Access Service)** padrão do Windows e é o protocolo Data Link Layer (**DLL**) usado para encapsular protocolos da camada de rede superior para passar por linhas de comunicação síncronas e assíncronas. Inicialmente criado como um protocolo de encapsulamento para transportar várias camadas de tráfego de rede em conexões ponto a ponto. 

Além disso, o **PPP** estabeleceu várias medidas, incluindo encapsulamento síncrono assíncrono e orientado a bit, multiplexação de protocolos de rede, negociação de sessões e negociação de compactação de dados. 

O **PPP** também reforça protocolos não **TCP/IP**, como **IPX/SPX** e **DECnet**. Um padrão anterior conhecido como **Serial Link Internet Protocol (SLIP)** foi amplamente suplantado por ele. 

O **PPP** fornece uma ampla variedade de opções configuráveis ​​para torná-lo uma opção robusta para exemplificar dados em linhas alugadas. Acima de tudo, o PPP sustenta a verificação, que pode ser usada em qualquer extremidade da associação ponto a ponto para confirmar a identidade de equipamentos ou clientes. 

O **Password Authentication Protocol (PAP)** e o **Challenge Handshake Authentication Protocol (CHAP)** podem ser usados ​​no roteador Cisco para validação.

<br>

**História do PPP:** O PPP retorna ao final da década de 1980, quando o verdadeiro padrão para execuções IP sequenciais era o SLIP. `RFC 1134`, distribuído em 1989, foi o principal relatório formal da `IETF` identificado com PPP. Este `RFC` não é apenas um padrão, mas uma proposta para o que poderia ser caracterizado como padrão PPP primário, `RFC 1171`, em 1990. Este relatório inicial foi reexaminado várias vezes e incluiu alguns registros diferentes caracterizando diferentes protocolos que contêm todo o conjunto PPP. 

Em vez de tentar criar o PPP do zero, o `IETF` construiu o PPP com base no protocolo `ISO` High-Level Data Link Control **(HDLC)**, que foi inicialmente desenvolvido pela **IBM**. 

Os desenvolvedores do PPP adotaram seu mecanismo de enquadramento do protocolo HDLC e componente de sua operação geral. Características do **PPP**:


1. Packet Framing – Formulação do pacote de dados da camada de rede dentro do bloco de enlace de dados.

2. Multi-protocolo – fornece informações de qualquer camada de rede NCP para cima ao mesmo tempo que demultiplex.

3. Transparência de bits – Deve conter certo padrão de bits no campo de dados.

4. Detecção de erros – Nenhuma modificação.

<br>

Componentes do PPP: Ele usa três componentes para permitir que o PPP transmita dados por um link serial ponto a ponto. Cada parte tem seu próprio papel autônomo e envolve o uso de outras duas tarefas completas. Esses três componentes são:

1. **High-Level Data-Link Control (HDLC) protocol:** HDLC é o método usado para enquadrar dados em links PPP. Por conta do PPP, a versão padrão do OSI é usada em vez da versão proprietária da Cisco. Essa padronização ajuda a garantir que diferentes fornecedores possam comunicar adequadamente as execuções de PPP.


2. **Link Control Protocol (LCP)**: É responsável por formular, configurar, testar, sustentar e finalizar links de transmissão. Além disso, dois terminais de conexões fornecem negociação para configuração de alternativas e uso de recursos.

3. **Network Control Protocols (NCPs):** Quadros **NCP** são usados ​​para comunicar e personalizar protocolos na camada de rede que podem ser usados ​​em sessões `PPP`. Existe um **NCP** para cada protocolo de camada superior mantido pelo `PPP`. Os **NCPs** permitem que o `PPP` funcione em conexões análogas em consonância com muitos protocolos da camada de rede.

<br>

**Working of PPP:** o PPP usa esses três componentes em conjunto para permitir a comunicação. Existem quatro etapas principais para estabelecer, manter e encerrar a sessão PPP:

<br>

- **Step-1:** A etapa inicial de configuração da sessão PPP entre os dispositivos inclui o envio do quadro de estabelecimento de link LCP para fins de configuração e teste. Esses quadros também caracterizam quais alternativas, por exemplo, compactação, autenticação e multilink, determinado host PPP escolhe. Se a autenticação for estabelecida e necessária, ela ocorrerá durante esta etapa.

- **Step-2:**  Ele usa quadros **LCP** para testar a natureza do link. Os dados reunidos podem ser usados ​​para avaliar se os links são apropriados para lidar com diferentes protocolos na camada superior.

- **Step-3:** Os quadros **NCP** são enviados pelo link para determinar quais protocolos da camada de rede precisam de configuração. Por exemplo, a conexão para usar **IP**, **IPX**, **AppleTalk** e assim por diante pode precisar ser otimizada.

- **Step-4:** Nesta etapa, ao encerrar a sessão **PPP**, os quadros de terminação do link **LCP** são usados ​​para cortar a conexão. A terceira categoria do quadro **LCP** (Link-Manutenção) é freqüentemente usada para alavancar e solucionar problemas de links **PPP**.

<br>

**Point-to-Point Protocol (PPP)** é basicamente uma **Wide Area Network (WAN)** protocolo que executa ou funciona na camada 2 simplesmente encapsulando quadros para transmissão ou transferência por diferentes links físicos ou conexões como cabos seriais, telefones celulares, cabo de fibra óptica entre outros, etc. O encapsulamento é basicamente um processo no qual o protocolo da camada inferior basicamente recebe dados do protocolo de camada superior e, em seguida, coloca ainda mais essa parte de dados de seu quadro. Em palavras simples, podemos dizer que o encapsulamento é o processo de envolver um tipo de embalagem com a ajuda de outros tipos de pacote. O **PPP** geralmente fornece encapsulamento para que vários protocolos na rede sejam suportados simultaneamente. As conexões **PPP** também entregam ou transmitem pacotes em sequência e fornecem operação bidirecional simultânea full-duplex.O encapsulamento **PPP** também é necessário para desambiguar datagramas multiprotocolo, ou seja, remoção de ambigüidade para tornar os datagramas multiprotocolo claros e fáceis de serem entendidos. O **PPP** coloca os dados em um quadro e os transmite por meio de conexão ou link **PPP**. Um quadro é basicamente definido como uma unidade de transmissão na camada de enlace de dados **(DLL)** da pilha de protocolos **OSI** . Para formar o encapsulamento, são necessários um total de `8 bytes`. Os dados geralmente são transmitidos da esquerda para a direita em quadros.

<br>

O quadro de encapsulamento PPP contém basicamente três tipos de campos conforme abaixo:


1. **Protocol Field:** Este campo é de `1` ou `2 bytes` ou seja, `8` ou `16 bits` que são utilizados para identificar o datagrama que está sendo encapsulado no campo de informação do pacote. Ele simplesmente indica o protocolo que é usado no quadro. O bit menos significativo dos bytes inferiores geralmente é definido como `1` e, por outro lado, o bit mais significativo geralmente é definido como `0`. Os tipos de protocolos que podem estar presentes são **Link Control Protocol (LCP)**, **Password Authentication Protocol (PAP)**, **Challenge Handshake Protocolo de Autenticação (CHAP)**, etc. 


2. **Campo de Informação:** Este campo é de `0` ou mais bytes. Ele também tem comprimento máximo de `1500 bytes`, incluindo preenchimento e excluindo campo de protocolo. Geralmente contém datagrama para o protocolo que é especificado e identificado no campo do protocolo. Um datagrama é basicamente uma unidade de transferência associada à rede.

3. **Campo de Preenchimento:** Este campo é opcional. Na transmissão, o campo de informação pode ser preenchido até a **Maximum Receive Unit (MRU)**. Ambos os pares devem ser capazes de reconhecer e distinguir bytes de preenchimento de dados verdadeiros ou informações reais.

<br>


### Vantagens do PPP:

- Um dos principais benefícios do **PPP** é que ele é um conjunto extensível de protocolos.

- Ele reforça a autenticação por **PAP** e **CHAP**.

- O recurso de gerenciamento de qualidade dos links avalia a qualidade dos links. O **PPP** desativa o link em caso de muitos erros.

- Um mecanismo de enquadramento gradual, comparado com um único caractere **END** em **SLIP**.

- Um processo robusto para negociar variáveis ​​de link, incluindo o tamanho máximo possível do quadro.