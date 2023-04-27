## SLIP Full

**SLIP** significa **Serial Line Internet Protocol** . É uma implementação **TCP/IP** descrita em `RFC 1055` (Pedido de comentários). **SLIP** estabelece conexões seriais ponto a ponto que podem ser usadas em conexões dial-up, portas seriais e roteadores. Ele enquadra os pacotes **IP** encapsulados em uma linha serial para estabelecer conexão enquanto usa velocidade de linha entre `12.000 bps` e `19,2 Kbps`. 


O **SLIP** foi introduzido em 1984, quando Rick Adams o usou para conectar estações de trabalho 4.2 Berkeley `Unix` e `Sun Microsystems`. Ele logo alcançou o resto do mundo como uma implementação **TCP/IP** confiável. Agora tornou-se obsoleto após ser substituído pelo **PPP (Protocolo Ponto a Ponto)** que resolve muitas deficiências presentes nele. 

<br>

### Características

<br>

 - Introduz dois caracteres especiais **END**(decimal 192) e **ESC**(decimal 129). Dependendo se o código de byte de dados representa o caractere **END** ou **ESC**, a sequência de dois bytes de ESC e *octal 334* ou ESC e octal 335, respectivamente, é enviada no pacote de dados.
 
 - Não há tamanho máximo de pacote no **SLIP**, pois não há especificação padrão. No entanto, o valor amplamente aceito é de `1006 bytes` de datagrama para envio e recebimento.

 - O remetente e o destinatário devem estar cientes do endereço **IP** de ambas as extremidades ao usar o **SLIP**.

 - Ele suporta apenas atribuição estática durante o endereçamento **IP**.

 - Ele transfere dados de forma síncrona.

 - Um quadro **SLIP** consiste em uma carga útil (dados) e um sinalizador para atuar como um delimitador final.

<br>

**Vantagens**

 1. Ele pode permitir diferentes combinações de configurações de rede, como host-host, host-roteador, roteador-roteador, etc.

 2. Pode ser facilmente usado em microcontroladores por causa da pequena sobrecarga.

 3. É fácil de implementar sendo um protocolo básico de pacotes e devido à ampla aplicação do **TCP/IP**.

<br>

**Desvantagens**

 1. Ele não executa nenhuma autenticação de dados e os endereços **IP** não podem ser atribuídos dinamicamente durante o uso do **SLIP**.

 2. **SLIP** não fornece nenhum método de identificação de tipo. O tipo de protocolo enviado não pode ser detectado. Portanto, apenas um protocolo pode ser executado em uma conexão **SLIP**.

 3. Não possui mecanismo de detecção ou correção de erros na transmissão de dados.
Uma conexão **SLIP** não fornece nenhum mecanismo para os hosts comunicarem informações de endereçamento.

 4. O **SLIP** não fornece recursos de compactação para melhorar a taxa de transferência de pacotes. O **CSLIP** foi uma variante usada para o mesmo propósito, mas não conseguiu uma ampla aplicação.