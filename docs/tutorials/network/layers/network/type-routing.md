### Tipos de Roteamento

O roteamento é um processo executado pelos dispositivos da camada 3 (ou camada de rede) para entregar o pacote escolhendo um caminho ideal de uma rede para outra. 

<br>

Existem 3 tipos de roteamento: 

1. Roteamento Estático: O roteamento estático é um processo no qual temos que adicionar rotas manualmente à tabela de roteamento.
  
  **Vantagens:**
    
    - Nenhuma sobrecarga de roteamento para a **CPU** do roteador, o que significa que um roteador mais barato pode ser usado para fazer o roteamento. 
    
    - Ele adiciona segurança porque um único administrador pode permitir o roteamento apenas para redes específicas. 
    
    - Sem uso de largura de banda entre os roteadores. 
    
  **Desvantagem:**
    
    - Para uma rede grande, é uma tarefa complicada para os administradores adicionar manualmente cada rota para a rede na tabela de roteamento de cada roteador. 
    
    - O administrador deve ter um bom conhecimento da topologia. Se vier um novo administrador, ele deverá adicionar manualmente cada rota para que tenha um conhecimento muito bom das rotas da topologia. 

<br>

  ### Configurações

  `R1 com endereço IP 172.16.10.6/30 em s0/0/1, 192.168.20.1/24 em fa0/0. `
  `R2 com endereço IP 172.16.10.2/30 em s0/0/0, 192.168.10.1/24 em fa0/0. `
  `R3 com endereço IP 172.16.10.5/30 em s0/1, 172.16.10.1/30 em s0/0, 10.10.10.1/24 em fa0/0. `

  Agora configurando rotas estáticas para o roteador R3:

  ```
  R3(config)#ip route 192.168.10.0 255.255.255.0 172.16.10.2
  R3(config)#ip route 192.168.20.0 255.255.255.0 172.16.10.6
  ```

  Aqui, fornecemos a rota para a rede `192.168.10.0` onde `192.168.10.0` é sua rede I'd e `172.16.10.2` e `172.16.10.6` são o endereço do próximo salto. 
 

  Agora, configurando para **R2**: 

  ```
  R2(config)#ip route 192.168.10.0 255.255.255.0 172.16.10.1
  R2(config)#ip route 10.10.10.0 255.255.255.0 172.16.10.1
  R2(config)#ip route 172.16.10.0 255.255.255.0 172.16.10.1
  ```

  Da mesma forma para **R1**:

  ```
  R1(config)#ip route 192.168.20.0 255.255.255.0 172.16.10.5
  R1(config)#ip route 10.10.10.0 255.255.255.0 172.16.10.5
  R1(config)#ip route 172.16.10.0 255.255.255.0 172.16.10.5
  ```

<br>

2. Roteamento padrão: Este é o método em que o roteador é configurado para enviar todos os pacotes para um único roteador (próximo salto). Não importa a qual rede o pacote pertence, ele é encaminhado para o roteador que está configurado para roteamento padrão. Geralmente é usado com roteadores stub. Um roteador stub é um roteador que possui apenas uma rota para alcançar todas as outras redes. 
  
  <br>

  ### Configurações

  Nesta topologia, **R1** e **R2** são roteadores stub, portanto podemos configurar o roteamento padrão para ambos os roteadores. 

  Configurando o roteamento padrão para **R1**: 

  ```
  R1(config)#ip route 0.0.0.0 0.0.0.0 172.16.10.5
  ```

  Agora configurando o roteamento padrão para R2: 

  ```
  R2(config)#ip route 0.0.0.0 0.0.0.0 172.16.10.1
  ```
  
  <br>

3. Roteamento Dinâmico: O roteamento dinâmico faz ajustes automáticos das rotas de acordo com o estado atual da rota na tabela de roteamento. O roteamento dinâmico usa protocolos para descobrir destinos de rede e as rotas para alcançá-los. RIP e OSPF são os melhores exemplos de protocolos de roteamento dinâmico. Ajustes automáticos serão feitos para alcançar o destino da rede se uma rota cair.

<br>

  #### Um protocolo dinâmico tem as seguintes características: 

  - Os roteadores devem ter o mesmo protocolo dinâmico em execução para trocar rotas. 
  
  - Quando um roteador encontra uma alteração na topologia, ele a anuncia a todos os outros roteadores. 

<br>

### Vantagens 

 - Fácil de configurar. 
 - Mais eficaz na seleção da melhor rota para uma rede remota de destino e também para     descobrir redes remotas. 

<br>

### Desvantagem 

 - Consome mais largura de banda para se comunicar com outros vizinhos. 
 - Menos seguro que o roteamento estático. 

<br>