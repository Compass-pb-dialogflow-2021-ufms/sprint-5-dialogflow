# N1 Support

## Diagrama de Fluxo


## Diário de bordo
- <b>27/12/2021</b> - Início do desenvolvimento do Webhook, definição de rotas e funções, criação do banco de dados, intents básicas no webhook e no dialogflow, bem como as integrações requeridas, e documentação inicial.  

## Dificuldades


## Tecnologias: 
[Axios](https://github.com/axios/axios): Ferramenta para acesso aos dados da API via o NodeJS.  
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
    - `Default Welcome Intent`: Dá boas vindas ao usuário, com mensagem customizada caso já tenha usado o sistema anteriormente.
    - `Default Goodbye Intent`: Se despede do usuário, quando identifica que ele não quer mais conversar com o bot.
    - `Default Fallback Intent`: Intenção que é chamada sempre que o bot não entende algo. Ela sugere que o usuário chame a `Help Intent`, para aprender a navegar pelo bot.
    - `Nickname Intent`: Intenção extra, que permite o usuário escolher um apelido, e caso tenha um, este é referenciado em outras intenções.  

## Integração
- O bot está integrado com o LINE, e para acessar ele, é necessário entrar no aplicativo e procurar pelo ID @@532yhotx, ou [escaneie o QR Code](https://line.me/R/ti/p/%40532yhotx).
- O bot também tem integração com o Telegram, que pode ser acessada via [este link](https://t.me/N1Support_bot)
- Por fim, o bot também foi integrado com o Dialogflow Messenger, para acessar, basta ir em 'Integrations' após importar e configurar o bot no Dialogflow, 'Text Based -> DialogFlow Messenger -> Try it Now' e a janela aparecerá no canto inferior direito.