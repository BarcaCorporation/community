## FTP File Transfer Protocol 

File Transfer Protocol (FTP) é um protocolo de camada de aplicativo que move arquivos entre sistemas de arquivos locais e remotos. Ele roda sobre o **TCP**, como o **HTTP**. Para transferir um arquivo, 2 conexões **TCP** são usadas pelo **FTP** em paralelo: conexão de controle e conexão de dados.

Por que **FTP**?
**FTP** é um protocolo de comunicação padrão. Existem vários outros protocolos, como o **HTTP**, que são usados ​​para transferir arquivos entre computadores, mas eles carecem de clareza e foco em comparação com o FTP. Além disso, os sistemas envolvidos na conexão são sistemas heterogêneos, ou seja, diferem em sistemas operacionais, diretórios, estruturas, conjuntos de caracteres, etc. o **FTP** protege o usuário dessas diferenças e transfere dados de forma eficiente e confiável. O **FTP** pode transferir arquivos *ASCII*, EBCDIC ou de imagem. O *ASCII* é o formato de compartilhamento de arquivo padrão, neste, cada caractere é codificado por NVT *ASCII*. Em *ASCII* ou EBCDIC o destino deve estar pronto para aceitar arquivos neste modo. O formato de arquivo de imagem é o formato padrão para transformar arquivos binários.


### Tipos de Conexão em FTP
 
 - Conexão de controle
 - Conexão de dados


1. Conexão de controle: Para enviar informações de controle como identificação do usuário, senha, comandos para alterar o diretório remoto, comandos para recuperar e armazenar arquivos, etc., o FTP faz uso de uma conexão de controle. A conexão de controle é iniciada na porta número 21. 

2. Conexão de dados: Para enviar o arquivo real, o **FTP** utiliza uma conexão de dados. Uma conexão de dados é iniciada na porta número 20. 
O **FTP** envia as informações de controle fora da banda, pois usa uma conexão de controle separada. Alguns protocolos enviam suas linhas de cabeçalho de solicitação e resposta e os dados na mesma conexão TCP. Por esta razão, diz-se que eles enviam suas informações de controle in-band. HTTP e SMTP são exemplos. 

<br>

### Sessão FTP

Quando uma sessão **FTP** é iniciada entre um cliente e um servidor, o cliente inicia uma conexão TCP de controle com o servidor. O cliente envia informações de controle sobre isso. Quando o servidor recebe isso, ele inicia uma conexão de dados com o lado do cliente. Apenas um arquivo pode ser enviado por uma conexão de dados. Mas a conexão de controle permanece ativa durante toda a sessão do usuário. Como sabemos, o HTTP não tem estado, ou seja, não precisa rastrear nenhum estado do usuário. Mas o **FTP** precisa manter um estado sobre seu usuário durante toda a sessão. 



### Clientes FTP

O **FTP** funciona em um modelo cliente-servidor . O cliente **FTP** é um programa executado no computador do usuário para permitir que ele converse e obtenha arquivos de computadores remotos. É um conjunto de comandos que estabelece a conexão entre dois hosts, ajuda a transferir os arquivos e fecha a conexão. 

### Estruturas de Dados FTP

O **FTP** permite três tipos de estruturas de dados: 

 - Estrutura do arquivo: Na estrutura do arquivo, não há estrutura interna e o arquivo é considerado uma sequência contínua de bytes de dados.
 - Estrutura de registro: Na estrutura de registro, o arquivo é composto de registros sequenciais.
 - Estrutura da página: Na estrutura da página, o arquivo é composto por páginas indexadas independentes.

<br>

## Comandos de FTP

| Comando | Descrição |
| ------ | ----------- |
| **USER**   | envie a identificação do usuário para o *servidor*. |
| **PASS** | envie a senha do usuário para o *servidor*. |
| **CWD**  | permita que o usuário trabalhe com um diretório ou conjunto de dados diferente para armazenamento ou recuperação de arquivos sem alterar seu login ou informações contábeis. |
| **RMD**  | faça com que o diretório especificado no nome do caminho seja removido como um diretório.|
| **MKD**  | faça com que o diretório especificado no nome do caminho seja criado como um diretório. |
| **PWD**  | faça com que o nome do diretório de trabalho atual seja retornado na resposta. |
| **RETR**  | faça com que o host remoto inicie uma conexão de dados e envie o arquivo solicitado pela conexão de dados. |
| **STOR**  | mova o armazenamento de um arquivo no diretório atual do host remoto.|
| **LIST**  | envie uma solicitação para exibir a lista de todos os arquivos presentes no diretório.|
| **ABOR**  | abortar o comando de serviço **FTP** anterior e qualquer transferência de dados associada ao *servidor*.|
| **QUIT**  | encerra um **USUÁRIO** e se a transferência de arquivos não estiver em andamento, o *servidor* fecha a conexão de controle.|

<br>

## Respostas de FTP


Algumas das respostas do FTP são: 

<br>

| Status | Descrição |
| ------ | ----------- |
| **200** |  Sucesso |
| **530** | Não está logado |
| **331** | Nome de usuário precisa de senha |
| **225** | Conexão de dados aberta; nenhuma transferência em andamento. |
| **221** | Ligação do comando fecho de serviço. |
| **551** | Ação solicitada abortada: tipo de página desconhecido. |
| **502** | Comando não existe. |
| **503** | Comandos incorreto. |
| **504** | Comando não implementado para esse parâmetro. |
 
 <br>




## Características do FTP 

 - O FTP usa o TCP como protocolo da camada de transporte.
 - É bom para transferências de arquivos simples, como durante o tempo de inicialização.
 - Erros na transmissão (perda de pacotes, erros de checksum) devem ser tratados pelo servidor TFTP.
 - Ele usa apenas uma conexão através da conhecida porta 69.
 - O TFTP usa um protocolo lock-step simples (cada pacote de dados precisa ser confirmado). Assim, o rendimento é limitado.

### Vantagens do FTP

 1. A velocidade é uma das vantagens do FTP (File Transfer Protocol).
 2. O compartilhamento de arquivos também entra na categoria de vantagens do FTP, pois entre duas máquinas os arquivos podem ser compartilhados na rede.
 3. A eficiência é maior no FTP.
  
### Desvantagens do FTP

 1. O limite de tamanho de arquivo é a desvantagem do FTP, apenas arquivos com tamanho de 2 GB podem ser transferidos.
 2. Múltiplos receptores não são suportados pelo FTP.
 3. O FTP não criptografa os dados, esta é uma das maiores desvantagens do FTP.
 4. O FTP não é seguro, usamos IDs de login e senhas para torná-lo seguro, mas eles podem ser atacados por hackers.

### FTP anônimo

O FTP anônimo está habilitado em alguns sites cujos arquivos estão disponíveis para acesso público. Um usuário pode acessar esses arquivos sem ter nenhum nome de usuário ou senha. Em vez disso, o nome de usuário é definido como anônimo e a senha é para o convidado por padrão. Aqui, o acesso do usuário é muito limitado. Por exemplo, o usuário pode ter permissão para copiar os arquivos, mas não para navegar pelos diretórios.  

Consulte o artigo sobre FTP ativo e passivo para obter mais detalhes.