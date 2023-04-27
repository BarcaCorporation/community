## Domain Name System (DNS)

Domain Name System (DNS) é um nome de host para o serviço de tradução de endereço IP. **DNS** é um banco de dados distribuído implementado em uma hierarquia de servidores de nomes. É um protocolo da camada de aplicação para troca de mensagens entre clientes e servidores. É necessário para o funcionamento da Internet.

Cada host é identificado pelo endereço **IP**, mas lembrar números é muito difícil para as pessoas. Além disso, os endereços **IP** não são estáticos, portanto, é necessário um mapeamento para alterar o nome de domínio para o endereço **IP**. Portanto, o DNS é usado para converter o nome de domínio dos sites em seu endereço **IP** numérico. 

<br>

## Tipos de Domínios

 - **Domínios genéricos:** *.com*(comercial), *.edu*(educacional), *.mil*(militar), *.org*(organização sem fins lucrativos), *.net*(semelhante ao comercial) todos esses são domínios genéricos.
 - **Domínio do país:** *.in*(Índia) *.us*, *.uk*
 - **Domínio inverso:** para saber qual é o nome de domínio do site. Utilize o *IP* para mapeamento de nome de domínio. Portanto, o **DNS** pode fornecer o mapeamento, por exemplo, para encontrar os endereços IP de barca.com, então temos que digitar:

```
nslookup barca.com
```
<br>

## Organização do Domínio

É muito difícil descobrir o endereço **IP** associado a um site porque existem milhões de sites e com todos esses sites devemos conseguir gerar o endereço **IP** imediatamente, não deve haver muitos atrasos para que isso aconteça organização de o banco de dados é muito importante.

<br>

- **Registro DNS:** nome de domínio, endereço IP, qual é a validade? qual é o tempo de viver?? e todas as informações relacionadas a esse nome de domínio. Esses registros são armazenados em uma estrutura semelhante a uma árvore. 

- **Namespace:** Conjunto de nomes possíveis, planos ou hierárquicos. O sistema de nomenclatura mantém uma coleção de ligações de nomes a valores – dado um nome, um mecanismo de resolução retorna o valor correspondente.

- **Servidor de nomes:** É uma implementação do mecanismo de resolução. **DNS (Domain Name System)** = Serviço de nomes na Internet – Uma zona é uma unidade administrativa e um domínio é uma subárvore. 

### Resolução de nome para endereço

O host solicita ao servidor de nomes **DNS** que resolva o nome de domínio. E o servidor de nomes retorna o endereço **IP** correspondente a esse nome de `domínio` para o `host` para que o `host` possa se conectar futuramente a esse endereço **IP**.

<br>

 - **Hierarquia dos Servidores de Nomes Servidores de nomes raiz:** É contatado por servidores de nomes que não conseguem resolver o nome. Ele contata o servidor de nomes autorizado se o mapeamento de nomes não for conhecido. Em seguida, obtém o mapeamento e retorna o endereço IP ao host. 
  
 - **Servidor de domínio de nível superior (TLD):** é responsável por *com*, *org*, *edu*, etc, e todos os domínios de país de nível superior, como uk, fr, ca, in, etc. Eles têm informações sobre servidores de domínio autorizados e conhecem os nomes e endereços IP de cada servidor de nomes autorizado para os domínios de segundo nível. 

 - **Servidores de nomes autoritativos:** são os servidores **DNS** da organização, fornecendo nomes de host autoritativos para mapeamento de **IP** para servidores da organização. Pode ser mantido por uma organização ou provedor de serviços. Para acessar *cse.dtu.in*, temos que perguntar ao servidor `DNS` raiz, ele apontará para o servidor de domínio de nível superior e, em seguida, para o servidor de nome de domínio autoritativo que realmente contém o **endereço IP**. Portanto, o servidor de domínio autoritativo retornará o **endereço IP** associativo.

<br>

### Servidor de Nome de Domínio

A máquina cliente envia uma solicitação ao servidor de nomes local, que, caso a raiz não encontre o endereço em seu banco de dados, envia uma solicitação ao servidor de nomes raiz que, por sua vez, encaminhará a consulta para um domínio de nível superior **(TLD)** ou servidor de nomes autorizado. O servidor de nomes raiz também pode conter alguns mapeamentos de hostName para endereços **IP**. O servidor de domínio de nível superior **(TLD)** sempre sabe quem é o servidor de nomes autoritativo. Então, finalmente, o endereço **IP** é retornado ao servidor de nomes local que, por sua vez, retorna o endereço **IP** ao host.

<br>

### Funcionamento do DNS

O funcionamento do **DNS** começa com a conversão de um nome de host em um endereço IP. Um nome de domínio serve como uma identificação distinta para um site. Ele é usado no lugar de um **endereço IP** para simplificar a visita dos consumidores aos sites. Domain Name System funciona executando o banco de dados cujo trabalho é armazenar o nome de hosts que estão disponíveis na Internet. O servidor de domínio de nível superior armazena informações de endereço para domínios de nível superior, como .com e .net, .org e assim por diante. Se o cliente enviar a solicitação, o resolvedor de DNS enviará uma solicitação ao servidor **DNS** para buscar o endereço **IP**. Caso não contenha aquele endereço `IP específico` com um nome de host, ele encaminha a solicitação para outro servidor DNS. Quando o **endereço IP** chega ao resolvedor, ele conclui a solicitação pelo protocolo da Internet . 