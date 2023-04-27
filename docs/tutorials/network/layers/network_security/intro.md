## Serviços da Camada de Rede - empacotamento, roteamento e encaminhamento

A camada de rede é a terceira camada no [modelo OSI](../network/osi.md) de redes de computadores. Sua principal função é transferir pacotes de rede da origem para o destino. Está envolvido tanto no host de origem quanto no host de destino. Na origem, ele aceita um pacote da camada de transporte, encapsula-o em um datagrama e então entrega o pacote à camada de enlace de dados para que possa ser enviado ao receptor. No destino, o datagrama é desencapsulado, o pacote é extraído e entregue à camada de transporte correspondente. 

<br>

### Características:

 - A principal responsabilidade da camada de rede é transportar os pacotes de dados da origem ao destino sem alterá-los ou usá-los. 
 
 - Se os pacotes forem muito grandes para serem entregues, eles serão fragmentados, ou seja, divididos em pacotes menores. 
 
 - Ele decide a rota a ser tomada pelos pacotes para viajar da origem ao destino entre as várias rotas disponíveis em uma rede (também chamada de roteamento). 
  
 - Os endereços de origem e destino são adicionados aos pacotes de dados dentro da camada de rede. 

Os serviços que são oferecidos pelo protocolo da camada de rede são os seguintes: 

1. **Packetização** – O processo de encapsular os dados recebidos das camadas superiores da rede (também chamado de carga útil) em um pacote da camada de rede na origem e desencapsular a carga útil do pacote da camada de rede no destino é conhecido como empacotamento. 

O host de origem adiciona um cabeçalho que contém os endereços de origem e destino e algumas outras informações relevantes exigidas pelo protocolo da camada de rede à carga recebida do protocolo da camada superior e entrega o pacote à camada de enlace de dados. 

O host de destino recebe o pacote da camada de rede de sua camada de enlace de dados, desencapsula o pacote e entrega a carga útil ao protocolo da camada superior correspondente. Os roteadores no caminho não têm permissão para alterar o endereço de origem ou de destino. Os roteadores no caminho não têm permissão para desencapsular os pacotes que recebem, a menos que precisem ser fragmentados. 

2. [Roteamento](../network/type-routing.md) e Encaminhamento – 
Esses são outros dois serviços oferecidos pela camada de rede. Em uma rede, há várias rotas disponíveis da origem ao destino. A camada de rede especifica tem algumas estratégias que descobrem a melhor rota possível. Esse processo é chamado de roteamento. Há uma série de protocolos de roteamento que são usados ​​neste processo e devem ser executados para ajudar os roteadores a se coordenarem entre si e ajudar no estabelecimento de comunicação em toda a rede. 

O encaminhamento é simplesmente definido como a ação aplicada por cada roteador quando um pacote chega a uma de suas interfaces. Quando um roteador recebe um pacote de uma de suas redes conectadas, ele precisa encaminhar o pacote para outra rede conectada ( roteamento unicast ) ou para algumas redes conectadas (no caso de roteamento multicast). 

<br>

### Outros serviços:

 - **Controle de Erros:** Embora possa ser implementado na camada de rede, geralmente não é preferido porque o pacote de dados em uma camada de rede pode ser fragmentado em cada roteador, o que torna a verificação de erros ineficiente na camada de rede. 
 
 - **Controle de Fluxo:** Regula a quantidade de dados que uma fonte pode enviar sem sobrecarregar o receptor. Se a fonte produzir dados em uma taxa muito mais rápida do que o receptor pode consumi-los, o receptor ficará sobrecarregado com dados. Para controlar o fluxo de dados, o receptor deve enviar um feedback ao remetente para informar a este que está sobrecarregado de dados. Há uma falta de controle de fluxo no projeto da camada de rede. Ele não fornece diretamente nenhum controle de fluxo. Os datagramas são enviados pelo remetente quando estão prontos, sem qualquer atenção à prontidão do destinatário. 

 - **Controle de Congestionamento:** O congestionamento ocorre quando o número de datagramas enviados pela fonte está além da capacidade da rede ou dos roteadores. Este é outro problema no protocolo da camada de rede. Se o congestionamento continuar, às vezes pode ocorrer uma situação em que o sistema entra em colapso e nenhum datagrama é entregue. Embora o controle de congestionamento seja implementado indiretamente na camada de rede, ainda há uma falta de controle de congestionamento na camada de rede. 
 
<br>

### Vantagens: 

 - O serviço de empacotamento na camada de rede fornece uma facilidade de transporte dos pacotes de dados. 
 
 - O empacotamento também elimina pontos únicos de falha em sistemas de comunicação de dados. 
 
 - Os roteadores presentes na camada de rede reduzem o tráfego de rede criando domínios de colisão e broadcast. 
 
 - Com a ajuda do Forwarding, os pacotes de dados são transferidos de um lugar para outro na rede. 

<br>

### Desvantagens: 

 - Há uma falta de controle de fluxo no projeto da camada de rede. 

 - Às vezes, o congestionamento ocorre devido à presença de muitos datagramas em uma rede que estão além da capacidade da rede ou dos roteadores. Devido a isso, alguns roteadores podem descartar alguns dos datagramas e algumas informações importantes podem ser perdidas. 

 - Embora o controle indireto de erros esteja presente na camada de rede, há uma falta de mecanismos adequados de controle de erros devido à presença de pacotes de dados fragmentados, o controle de erros torna-se difícil de implementar. 