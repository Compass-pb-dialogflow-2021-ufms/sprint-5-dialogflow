
# Avaliação Sprint 5 (terceira atividade) - Programa de Bolsas Compass.uol e UFMS

Quinta sprint do programa de bolsas Compass.uol para formação em chatbot Dialogflow.


## Diário de bordo
Comecei o projeto estruturando a base do código. Integrei ao Telegram e idealizei a atividade voltada para esta plataforma. Tive grande dificuldade para entender como as sequências do fluxo de conversa funcionavam, principalmente na parte de pré-diagnóstico. Por conta dessa dificuldade fui revisar a documentação do Dialogflow e aprender mais sobre contextos, foi algo muito positivo mas me custou um tempo precioso. Sinto que alguns obstáculos me travam por mais tempo do que eu gostaria. Não consegui desenvolver a aplicação por completo no tempo estabelecido, a parte de pré-diagnósticos foi a mais prejudicada. 


## Tecnologias


Primeiramente é necessário que o [Node.JS](https://nodejs.org/en/) e o [Ngrok](https://ngrok.com/) esteja instalado na máquina. 
  
  
  Clone este repositório e no mesmo diretório instale as depenêcias pelo terminal:

  ```
  npm install
  ```

  - Node-emojis: inserir emojis na aplicação.
  - Express para tratar das rotas e do servidor
  - Nodemon auxlia na implementação
  
  Após a instalação dos pacotes, ainda no terminal, digite
  ```
  npm start 
  ```

  Após ter feito o passo anterior, abra o terminal na pasta onde se encontra o ngrok e digite
```
./ngrok http 3333
  ```
 Copie o segundo endereço "forwarding" gerado no webhook(ele inicia com https) dentro do fulfillmet do bot no DialogFlow.

## Integração

- Integrei o chatbot ao Telegram. Ele pode ser acessado pelo [link](https://t.me/c0ron_bot) ou pelo username @c0ron_bot


- A aplicação foi hospedada no [Heroku](https://still-spire-54608.herokuapp.com/). 
