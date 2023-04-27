## Firewall em Rede de Computadores

Um **firewall** é um dispositivo de segurança de rede, baseado em hardware ou software, que monitora todo o tráfego de entrada e saída e, com base em um conjunto definido de regras de segurança, ele aceita, rejeita ou descarta esse tráfego específico. Aceitar: permite o tráfego Rejeitar: bloqueia o tráfego, mas responde com um “erro inacessível” Eliminar:  bloqueia o tráfego sem resposta Um **firewall** estabelece uma barreira entre redes internas seguras e redes externas não confiáveis, como a internet.


Antes dos firewalls, a segurança da rede era realizada por listas de controle de acesso (ACLs) residentes em roteadores. **ACLs** são regras que determinam se o acesso à rede deve ser concedido ou negado a um endereço **IP** específico. Mas as **ACLs** não podem determinar a natureza do pacote que está bloqueando. Além disso, o **ACL** sozinho não tem a capacidade de manter as ameaças fora da rede. Assim, o *Firewall* foi introduzido. A conectividade com a Internet não é mais opcional para as organizações. No entanto, o acesso à Internet traz benefícios para a organização; também permite que o mundo externo interaja com a rede interna da organização. Isso cria uma ameaça para a organização. Para proteger a rede interna de tráfego não autorizado, precisamos de um *Firewall*.

O firewall compara o tráfego de rede com o conjunto de regras definido em sua tabela. Depois que a regra é correspondida, a ação associada é aplicada ao tráfego de rede. Por exemplo, as regras são definidas como qualquer funcionário do departamento de RH não pode acessar os dados do servidor de código e, ao mesmo tempo, outra regra é definida como o administrador do sistema pode acessar os dados do departamento de RH e técnico. As regras podem ser definidas no firewall com base na necessidade e nas políticas de segurança da organização. Do ponto de vista de um servidor, o tráfego de rede pode ser de saída ou de entrada. O firewall mantém um conjunto distinto de regras para ambos os casos. Principalmente o tráfego de saída, originado do próprio servidor, permitiu a passagem. Ainda assim, definir uma regra no tráfego de saída é sempre melhor para obter mais segurança e evitar comunicações indesejadas. O tráfego de entrada é tratado de forma diferente. A maior parte do tráfego que chega ao firewall é um desses três principais protocolos de camada de transporte - **TCP**, **UDP** ou **ICMP**. Todos esses tipos têm um endereço de origem e um endereço de destino. Além disso, **TCP** e **UDP** têm números de porta. **ICMP** usadigite o código em vez do número da porta que identifica a finalidade desse pacote. Política padrão: é muito difícil cobrir explicitamente todas as regras possíveis no firewall. Por esse motivo, o `firewall` deve sempre ter uma política padrão. A política padrão consiste apenas em ação (aceitar, rejeitar ou descartar). Suponha que nenhuma regra seja definida sobre a conexão **SSH** com o servidor no firewall. Portanto, seguirá a política padrão. Se a política padrão do firewall estiver definida para aceitar , qualquer computador fora do seu escritório poderá estabelecer uma conexão **SSH** com o servidor. Portanto, definir a política padrão como descartar (ou rejeitar) é sempre uma boa prática.

<br>

### Geração de Firewall

Os firewalls podem ser categorizados com base em sua geração.

**Firewall de filtragem de pacotes de primeira geração:**   O firewall de filtragem de pacotes é usado para controlar o acesso à rede monitorando pacotes de entrada e saída e permitindo que eles passem ou parem com base no endereço IP de origem e destino, protocolos e portas. Ele analisa o tráfego na camada do protocolo de transporte (mas usa principalmente as 3 primeiras camadas). Os firewalls de pacotes tratam cada pacote isoladamente. Eles não têm capacidade de dizer se um pacote faz parte de um fluxo de tráfego existente. Somente ele pode permitir ou negar os pacotes com base em cabeçalhos de pacotes exclusivos. O firewall de filtragem de pacotes mantém uma tabela de filtragem que decide se o pacote será encaminhado ou descartado. A partir da tabela de filtragem fornecida, os pacotes serão filtrados de acordo com as seguintes regras: 


1. Os pacotes recebidos da rede `192.168.21.0` são bloqueados.

2. Os pacotes de entrada destinados ao servidor **TELNET** interno (porta **23**) são bloqueados.

3. Os pacotes de entrada destinados ao host `192.168.21.3` são bloqueados.

4. Todos os serviços conhecidos da rede `192.168.21.0` são permitidos.

5. **Firewall Stateful Inspection de Segunda Geração:**  Os firewalls Stateful (executam Stateful Packet Inspection) são capazes de determinar o estado da conexão do pacote, ao contrário do firewall de filtragem de pacotes, o que o torna mais eficiente. Ele rastreia o estado das conexões de rede que passam por ele, como fluxos TCP. Assim, as decisões de filtragem não seriam baseadas apenas em regras definidas, mas também no histórico do pacote na tabela de estados.

6. **Firewall de camada de aplicativo de terceira geração:**  o firewall de camada de aplicativo pode inspecionar e filtrar os pacotes em qualquer camada **OSI**, até a camada de aplicativo. Ele tem a capacidade de bloquear conteúdo específico, também reconhecer quando certos aplicativos e protocolos (como **HTTP**, **FTP**) estão sendo mal utilizados. Em outras palavras, os firewalls da camada de aplicativos são hosts que executam servidores `proxy`. Um **firewall proxy** impede a conexão direta entre ambos os lados do firewall, cada pacote deve passar pelo `proxy`. Ele pode permitir ou bloquear o tráfego com base em regras predefinidas. Nota: Os firewalls da camada de aplicativo também podem ser usados ​​como Network Address Translator (**NAT**).

7. Firewalls de próxima geração (NGFW):  os firewalls de próxima geração estão sendo implantados atualmente para impedir violações de segurança modernas, como ataques avançados de malware e ataques na camada de aplicativos. O **NGFW** consiste em inspeção profunda de pacotes, inspeção de aplicativos, inspeção SSL/SSH e muitas funcionalidades para proteger a rede dessas ameaças modernas.

<br>

### O que é Magic Firewall?

**“Magic Firewall”** é um termo usado para descrever um recurso de segurança fornecido pela empresa de hospedagem e segurança [**Cloudflare**](https://www.cloudflare.com/). É um firewall baseado em nuvem que fornece proteção contra uma ampla variedade de ameaças de segurança, incluindo ataques DDoS, injeções de **SQL**, script entre sites (XSS) e outros tipos de ataques direcionados a aplicativos da web.

O **Magic Firewall** funciona analisando o tráfego para um site e usando um conjunto de regras predefinidas para identificar e bloquear o tráfego malicioso. As regras são baseadas em inteligência de ameaças de várias fontes, incluindo a própria rede de inteligência de ameaças da empresa, e podem ser personalizadas pelos proprietários de sites para atender às suas necessidades específicas de segurança.

O **Magic Firewall** é considerado mágico” porque foi projetado para funcionar de forma transparente e invisível para os visitantes do site, sem nenhum impacto perceptível no desempenho do site. Também é fácil de configurar e gerenciar e pode ser acessado por meio do painel de controle baseado na Web da [**Cloudflare**](https://www.cloudflare.com/).

No geral, o **Magic Firewall** é uma poderosa ferramenta de segurança que fornece aos proprietários de sites uma camada adicional de proteção contra uma variedade de ameaças à segurança.

<br>

### Tipos de Firewall

Os firewalls geralmente são de dois tipos: baseados em host e baseados em rede.

Firewalls baseados em host:  O firewall baseado em host é instalado em cada nó de rede que controla cada pacote de entrada e saída. É um aplicativo de software ou conjunto de aplicativos, vem como parte do sistema operacional. Os firewalls baseados em host são necessários porque os firewalls de rede não podem fornecer proteção dentro de uma rede confiável. 

O firewall do host protege cada host contra ataques e acesso não autorizado.
Firewalls baseados em rede:  função de firewall de rede no nível da rede. Em outras palavras, esses firewalls filtram todo o tráfego de entrada e saída na rede. Ele protege a rede interna filtrando o tráfego usando regras definidas no firewall. Um firewall de rede pode ter duas ou mais placas de interface de rede (NICs). 

Um firewall baseado em rede geralmente é um sistema dedicado com software proprietário instalado.

<br>

#### Vantagens de usar Firewall

 - Proteção contra acesso não autorizado: os firewalls podem ser configurados para restringir o tráfego de entrada de determinados **endereços IP** ou redes, impedindo que **hackers** ou outros agentes mal-intencionados acessem facilmente uma rede ou sistema. Proteção contra acesso indesejado.
  
 - Prevenção de malware e outras ameaças: Prevenção de malware e outras ameaças: Firewalls podem ser configurados para bloquear o tráfego vinculado a malware conhecido ou outras questões de segurança, auxiliando na defesa contra esses tipos de ataques.

 - Controle de acesso à rede: ao limitar o acesso a indivíduos ou grupos específicos para determinados servidores ou aplicativos, os firewalls podem ser usados ​​para restringir o acesso a determinados recursos ou serviços de rede. 

  - Monitoramento da atividade da rede: os firewalls podem ser configurados para registrar e acompanhar todas as atividades da rede. Esta informação é essencial para identificar e investigar problemas de segurança e outros tipos de comportamento obscuro.
  
  - Conformidade com a regulamentação: muitos setores estão sujeitos a regras que exigem o uso de firewalls ou outras medidas de segurança. As organizações podem cumprir essas regras e evitar multas ou penalidades usando um firewall.
  
  - Segmentação de rede: ao usar firewalls para dividir uma rede maior em sub-redes menores, a superfície de ataque é reduzida e o nível de segurança é elevado. 

<br>

#### Desvantagens de usar Firewall

 - **Complexidade:** Configurar e manter um firewall pode ser demorado e difícil, especialmente para redes maiores ou empresas com uma grande variedade de usuários e dispositivos.
 
 - **Visibilidade limitada:** os firewalls podem não ser capazes de identificar ou interromper os riscos de segurança que operam em outros níveis, como o nível do aplicativo ou do endpoint, porque eles só podem observar e gerenciar o tráfego no nível da rede.

 - **Falsa sensação de segurança:** algumas empresas podem confiar demais em seu firewall e desconsiderar outras medidas de segurança cruciais, como segurança de endpoint ou sistemas de detecção de intrusão.

  - **Adaptabilidade limitada:** como os firewalls são frequentemente baseados em regras, eles podem não ser capazes de responder a novas ameaças de segurança. 

  - **Impacto no desempenho:** o desempenho da rede pode ser significativamente afetado por firewalls, principalmente se eles forem configurados para analisar ou gerenciar muito tráfego.
  
  - **Escalabilidade limitada:** como os firewalls são capazes de proteger apenas uma rede, as empresas que possuem várias redes devem implantar muitos firewalls, o que pode ser caro.

  - **Suporte VPN limitado:** alguns firewalls podem não permitir recursos complexos de **VPN**, como túnel dividido, o que pode restringir a experiência de um trabalhador remoto.
Custo: Comprar muitos dispositivos ou recursos adicionais para um sistema de firewall pode ser caro, especialmente para empresas.

<br>

#### Aplicações de Firewall em Tempo Real

 - **Redes corporativas:** muitas empresas empregam firewalls para proteção contra acesso indesejado e outros riscos de segurança em suas redes corporativas. Esses firewalls podem ser configurados para permitir apenas que usuários autorizados acessem determinados recursos ou serviços e para impedir o tráfego de determinados endereços IP ou redes. 

 - **Organizações governamentais:** as organizações governamentais frequentemente empregam firewalls para proteger dados confidenciais e aderir a regras como **HIPAA** ou **PCI-DSS**. Eles podem usar firewalls de ponta, como firewalls de próxima geração (NGFW), que podem detectar e interromper invasões, bem como gerenciar o acesso a dados e aplicativos específicos.
  
  - **Provedores de serviços:** os firewalls são usados ​​por provedores de serviços para proteger suas redes e os dados de seus clientes, incluindo **ISPs**, provedores de serviços em nuvem e empresas de hospedagem. Eles podem fazer uso de firewalls que acomodam enormes volumes de tráfego e oferecem suporte a recursos avançados, como VPN e balanceamento de carga. 

  - **Pequenas empresas:** As pequenas empresas podem usar firewalls para separar suas redes internas, restringir o acesso a recursos ou aplicativos específicos e defender suas redes contra ameaças externas.
  
  - **Redes domésticas:** para se proteger contra acesso indesejado e outros riscos de segurança, muitos *usuários domésticos* utilizam firewalls. Um firewall embutido em muitos roteadores pode ser configurado para bloquear o tráfego de entrada e restringir o acesso à rede.
  
  - **Sistemas de controle industrial (ICS):** os firewalls são usados ​​para proteger os sistemas de controle industrial contra acesso ilegal e ataques **cibernéticos** em muitas infraestruturas vitais, incluindo usinas de energia, instalações de tratamento de água e sistemas de transporte.

<br>