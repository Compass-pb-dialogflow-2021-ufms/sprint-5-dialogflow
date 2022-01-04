# Coronabot
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/pt-br/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas/database)
[![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)](https://www.heroku.com)


## Diagrama de Fluxo


## Diário de bordo
- <b>03/01/2021</b> - Início do projeto, setup de rotas, bot no dialogflow, integrações. Também foquei um pouco na refatoração de funções envolvendo o banco de dados, que estava redundante. Além disso, desenvolvi algumas das respostas das intenções básicas.

## Dificuldades


## Tecnologias: 
[Config](https://www.npmjs.com/package/config): Definição de parâmetros locais.  
[Express](https://expressjs.com/pt-br/): Framework de gestão de rotas e requisições/respostas.  
[Heroku](https://www.heroku.com): Upload do webhook, para uso no fulfillment do DialogFlow.  
[Mongoose](https://mongoosejs.com): Comunicação com o banco do MongoDB Atlas.  
[NodeJS](https://nodejs.org/): Ambiente de execução com JavaScript, base da execução do webhook.  

## Instalação
- Aplicação em NodeJS, requer que este esteja instalado na máquina/container utilizado. 
- Faça download/clone do repositório, caso necessário extraia para uma pasta local. Importe o bot para o DialogFlow; Isso pode ser feito ao criar um novo agente no console do DialogFlow, e nas configurações deste acessar "Import and Export" e importar o zip contido no repositório.  

- <b>Execução local:</b>
    - É necessário conectar com um banco de dados do [MongoDB](https://www.mongodb.com), recomendado utilizar o [Atlas](https://www.mongodb.com/atlas/database). [Aqui](https://medium.com/reprogramabr/conectando-no-banco-de-dados-cloud-mongodb-atlas-bca63399693f) você pode encontrar um passo à passo de como criar um cluster gratuito no Atlas e conseguir sua <i>string de conexão</i>. Com sua string em mãos, navegue para `config.example/default.json`, e cole em <b>`"Add your connection string here"`</b>.
        - Após esse passo, renomeie `config.example` para `config` e está tudo certo.
    - Utilize de uma aplicação como o ngrok para estabelecer conexão com o webhook. Instale e execute o ngrok, crie conta caso necessário. Execute o comando ngrok http 3001, e caso necessário copie o link após "Fowarding" (com final ngrok.io) e cole na página de Fulfillment no console do Dialogflow (Fulfillment -> Webhook -> URL*) com a rota "/webhook" (Ex: 123-456-789.ngrok.io/webhook). Salve no final da página.
    - Instale as dependências do pacote antes da primeira execução com <b><i>npm install --production</i></b> dentro da pasta raiz.
    - Execute o projeto com <b><i>npm start</i></b> dentro da pasta <b>raiz</b> do projeto. Após esses passos, o bot estará em execução, exibindo a mensagem 'Webhook running' como confirmação. É possível executar o bot no painel direito, ou integrar com algum serviço. Para fazer a integração, siga os passos especificados no Console do DialogFlow.  

- <b>Execução via Heroku Webhook:</b>
    - Na página de Fulfillment no console do Dialogflow, utilize o link (TODO) para executar a webhook hospedada no heroku.
    - Agora, o bot pode ser executado no painel direito do console. Ainda, é possível adicionar integrações novas através do menu Integrations.

## Intents
- Implementadas:

## Contexts


## Integração
- O bot está integrado com o LINE, e para acessar ele, é necessário entrar no aplicativo e procurar pelo ID @613ehdne, ou [escaneie o QR Code](https://qr-official.line.me/sid/L/613ehdne.png).
- O bot também tem integração com o Telegram, que pode ser acessada via [este link](t.me/sarscovinfobot).
- Por fim, o bot também foi integrado com o Dialogflow Messenger, para acessar, basta ir em 'Integrations' após importar e configurar o bot no Dialogflow, 'Text Based -> DialogFlow Messenger -> Try it Now' e a janela aparecerá no canto inferior direito. Alternativamente, acesse o [Glitch.me](#) contendo o script do mensageiro.