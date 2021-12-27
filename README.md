
# Avaliação Sprint 5 - Programa de Bolsas Compass.uol e UFMS

Quinta sprint do programa de bolsas Compass.uol para formação em chatbot Dialogflow.


## Diário de bordo
De início eu pretendia utilizar a Api que foi dada como sugestão, estudei como tratar uma SOAP, porém na tarde sexta(24/11) ela começou a apresentar instabilidade. O que me obrigou a mudar de Api, visto que eu não fazia ideia do tempo de interrupção do serviço. Mudei para a [HG Brasil](https://hgbrasil.com/status/weather) que possui uma boa documentação e segue o padrão REST, em contra partida possui um limite de buscas de cidade por dia (foi a única gratuita que pssuia a função de previsão para n dias). 
Tive dificuldade em definir quais são as cidades brasileiras e as estrangeiras, resolvi fazer isso utilizando as entidades do dialogflow, mas acredito que é possível melhorar esse tratamento. Também acho que a estrutura do projeto poderia ficar melhor dividida, na próximas entregas pretendo utilizar o express.Router() para definir melhorar as rotas e exportar funcionalidades de uma forma mais limpa dentro do projeto. 

## Funcionamento e tecnologias

- A aplicação dá boas vindas para o usuário, e passa uma instrução básica sobre o funcionamento da ferramenta. Quando o usuário informa o nome da cidade que deseja obter a previsão, o bot exibe o nome da cidade, a hora da última atualização da previsão consultada e a temperatura máxima, temperatura mínima e condição nos próximos 7 dias. 
Quando o usuário se despede o chatbot exibe uma mensagem instigando o retorno do mesmo.
 
Primeiramente é necessário que o [Node.JS](https://nodejs.org/en/) e o [Ngrok](https://ngrok.com/) esteja instalado na máquina. 
  
  
  Clone este repositório e no mesmo diretório instale as depenêcias pelo terminal:

  ```
  npm install
  ```

  - Axios para consumir a api externa
  - Express para tratar das rotas e do servidor
  
  Após a instalação dos pacotes, ainda no terminal, digite
  ```
  npm start 
  ```

  Após ter feito o passo anterior, abra o terminal na pasta onde se encontra o ngrok e digite
```
./ngrok http 3000
  ```
 Copie o segundo endereço "forwarding" gerado no webhook(ele inicia com https) dentro do fulfillmet do bot no DialogFlow.

 Integrei o chatbot ao Dialogflow Message e ao Line
  Para executar pelo DialogFlow basta executar o live server no arquivo index.html que está na raiz do projeto e abrir na porta que o live server informou. 

  Para executar pelo Line é necessário ter uma conta na aplicação e ler o QRcode abaixo ou buscar pelo id: @932deesw 

  ![QR Code](qrcode.png)

  ## Fluxo de conversa do chatbot

```
  usuário: Bom dia
  chatbot: Saudação
  usuário: previsão do tempo para Campo Grande
  chatbot: exibe temperatura de Campo Grande
  usuário: tchau tchau
  chatbot: Despedida
  ```