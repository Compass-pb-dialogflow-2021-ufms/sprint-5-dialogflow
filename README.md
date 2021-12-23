# Climatact - A Dialogflow Chatbot for climate forecasting with NodeJS


## Diário de bordo
TODO

## Tecnologias: 
[Express](https://expressjs.com/pt-br/): Framework de gestão de rotas e requisições/respostas.  
[Axios](https://github.com/axios/axios): Ferramenta para acesso aos dados da API via o NodeJS.  
[Mongoose](https://mongoosejs.com): Comunicação com o banco do MongoDB Atlas.  
[Previsão do tempo em XML](http://servicos.cptec.inpe.br/XML/): API de previsão do tempo.  

## Instalação

- Aplicação em NodeJS, requer que este esteja instalado na máquina/container utilizado. 
- Faça download/clone do repositório, caso necessário extraia para uma pasta local. Importe o bot para o DialogFlow; Isso pode ser feito ao criar um novo agente no console do DialogFlow, e nas configurações deste acessar "Import and Export" e importar o zip contido no repositório.
- Utilize de uma aplicação como o ngrok para estabelecer conexão com o webhook. Instale e execute o ngrok, crie conta caso necessário. Execute o comando ngrok http 3001, e caso necessário copie o link após "Fowarding" (com final ngrok.io) e cole na página de Fulfillment no console do Dialogflow (Fulfillment -> Webhook -> URL*) com a rota "/webhook" (Ex: 123-456-789.ngrok.io/webhook). Salve no final da página. Alternativamente, utilize o link (TODO) para executar este.
- Instale as dependências do pacote antes da primeira execução com <b><i>npm install --production</i></b> dentro da pasta raiz.
- Execute o projeto com <b><i>npm start</i></b> dentro da pasta <b>raiz</b> do projeto. Após esses passos, o bot estará em execução, exibindo a mensagem 'Webhook running' como confirmação. É possível executar o bot no painel direito, ou integrar com algum serviço. Para fazer a integração, siga os passos especificados no Console do DialogFlow.

## Integração
  
- O bot está integrado com o LINE, e para acessar ele, é necessário entrar no aplicativo e procurar pelo ID TODO
- O bot também tem integração com o Telegram, que pode ser acessada via [TODO](TODO)
- Por fim, o bot também foi integrado com o Dialogflow Messenger... TODO
