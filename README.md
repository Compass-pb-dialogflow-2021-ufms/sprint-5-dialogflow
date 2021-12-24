# Climatact - A Dialogflow Chatbot for climate forecasting with NodeJS


## Diário de bordo
22/12/2021 - Li sobre o escopo do projeto e a API a ser consumida. Então, foi feito o setup inicial do webhook, bem como suas rotas. Além disso, fiz a documentação básica do projeto.  
23/12/2021 - Criação do bot no DialogFlow, bem como suas intents obrigatórias. Estudei a documentação do mongoose, já que pretendo usar de mais de um banco nesse projeto. Prossegui fazendo a implementação do mongoose de forma que suporte essa funcionalidade, com sucesso. Então, finalizei a conexão no atlasDB e, temporáriamente, o desenvolvimento do escopo do banco. Em seguida, trabalhei com a identificação da plataforma sendo utilizada, Line, Telegram ou DialogFlow Messenger, e descobri que este ultimo não passa a fonte na requisição, então tive que fazer essa declaração via código. Também fiz a integração com as três plataformas propostas no desafio. Por fim, incrementei a documentação.
24/12/2021 - Aprimorei as intents obrigatórias com múltiplas respostas, e refinei o código de forma padronizada antes do consumo da API o máximo possível. Após isso, voltei a trabalhar com o banco, adicionando uma intent extra de apelido para um usuário, separada do banco da identificação do usuário por plataforma.Sequencialmente, trabalhei com o consumo da API. A API original, [Previsão do tempo em XML](http://servicos.cptec.inpe.br/XML/) estava recusando minha conexão, e também queria uma API mais completa, com mais dados caso necessário, e mais localizações suportadas. Encontrei a [WeatherAPI](https://www.weatherapi.com) e decidi por utilizar a mesma. Consumi a API com o axios dentro da intent, e criei uma intent extra, utilizando de eventos para fazer um loop onde o usuário pode ver a previsão em vários locais até não querer mais, sem reiniciar o fluxo por completo. Tentei ao máximo implementar a API de forma dinâmica, e implementei a funcionalidade extra para o usuário modificar quantos dias de previsão quer exibir, em até 10 dias, por limitação da API.

## Dificuldades
- Não consegui consumir a API sugerida, obtive 'ERR_CONNECTION_REFUSED' primeiro nas chamadas, e agora não consigo acessar nem o site da documentação.
- Percebi que está ocorrendo um problema com a WeatherAPI, no qual, mesmo especificando mais do que 4 dias de previsão do tempo, a api está apenas reportando até 3, na procura sobre, parece ser um problema recente, não muito reportado, e que o comportamento esperado era retornar até 10 dias, conforme especificado na documentação.
- Hoje, 24/12, algumas cidades consultadas na API começaram a dar 400 - Bad Request, em consultas que estavam funcionando anteriormente, sem alteração no código. Espero que seja uma instabilidade temporária, e pelo que percebi é problema com a requisição do axios, tanto no log, é exibido `isAxiosError = true;` e caso copiado a url do request com status 400 e colado no Postman ou navegador, a query é executada com 200, mostrando os dados sem problemas.

## Tecnologias: 
[Axios](https://github.com/axios/axios): Ferramenta para acesso aos dados da API via o NodeJS.  
[Config](https://www.npmjs.com/package/config): Definição de parâmetros locais.  
[Express](https://expressjs.com/pt-br/): Framework de gestão de rotas e requisições/respostas.  
[Mongoose](https://mongoosejs.com): Comunicação com o banco do MongoDB Atlas.  
[WeatherAPI](https://www.weatherapi.com): API de previsão do tempo.  

## Instalação

- Aplicação em NodeJS, requer que este esteja instalado na máquina/container utilizado. 
- Faça download/clone do repositório, caso necessário extraia para uma pasta local. Importe o bot para o DialogFlow; Isso pode ser feito ao criar um novo agente no console do DialogFlow, e nas configurações deste acessar "Import and Export" e importar o zip contido no repositório.
- É necessário conectar com um banco de dados do [MongoDB](https://www.mongodb.com), recomendado utilizar o [Atlas](https://www.mongodb.com/atlas/database). [Aqui](https://medium.com/reprogramabr/conectando-no-banco-de-dados-cloud-mongodb-atlas-bca63399693f) você pode encontrar um passo à passo de como criar um cluster gratuito no Atlas e conseguir sua <i>string de conexão</i>. Com sua string em mãos, navegue para `config.example/default.json`, e cole em <b>"Add your connection string here"</b>. Após isso, renomeie `config.example` para `config` e está tudo certo.
- Utilize de uma aplicação como o ngrok para estabelecer conexão com o webhook. Instale e execute o ngrok, crie conta caso necessário. Execute o comando ngrok http 3001, e caso necessário copie o link após "Fowarding" (com final ngrok.io) e cole na página de Fulfillment no console do Dialogflow (Fulfillment -> Webhook -> URL*) com a rota "/webhook" (Ex: 123-456-789.ngrok.io/webhook). Salve no final da página. Alternativamente, utilize o link (TODO) para executar este.
- Instale as dependências do pacote antes da primeira execução com <b><i>npm install --production</i></b> dentro da pasta raiz.
- Execute o projeto com <b><i>npm start</i></b> dentro da pasta <b>raiz</b> do projeto. Após esses passos, o bot estará em execução, exibindo a mensagem 'Webhook running' como confirmação. É possível executar o bot no painel direito, ou integrar com algum serviço. Para fazer a integração, siga os passos especificados no Console do DialogFlow.

## Uso do Bot
TODO

## Funções a serem implementadas

Tenho como ideia implementar melhor a funcionalidade busca dinâmica por data na API, por enquanto só é possível indicar por quantos dias será informado o clima a partir da data atual, quero por exemplo, poder exibir a temperatura de depois de amanhã, sem exibir amanhã (escolher por data específica).

## Integração
  
- O bot está integrado com o LINE, e para acessar ele, é necessário entrar no aplicativo e procurar pelo ID @165fromy
- O bot também tem integração com o Telegram, que pode ser acessada via [este link](t.me/Climatact_bot)
- Por fim, o bot também foi integrado com o Dialogflow Messenger, para acessar, basta ir em 'Integrations' após importar e configurar o bot no Dialogflow, 'Text Based -> DialogFlow Messenger -> Try it Now' e a janela aparecerá no canto inferior direito.