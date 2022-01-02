# N1 Support
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/pt-br/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas/database)
[![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)](https://www.heroku.com)
[![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)](https://www.notion.so)


## Diagrama de Fluxo


## Diário de bordo
- <b>27/12/2021</b> - Início do desenvolvimento do Webhook, definição de rotas e funções, criação do banco de dados, intenção básicas no webhook e no dialogflow, bem como as integrações requeridas, e documentação inicial.  
- <b>28/12/2021</b> - Segui implementando a atividade, criando a intenção de Chamado para N2, com tratamento das informações a serem coletadas via slot filling. Também implementei da intenção de diagnóstico de Hardware, abordei a identificação do problema do usuário de forma um pouco diferente, identificando o problema com sinônimos da entidade, e agrupando em subtipos, permitindo que dependendo do subtipo, ofereça soluções mais apropriadas ao problema. Também procurei formas de aplicar o feedback de entregas passadas, melhorando todo o código já escrito.  
- <b>29/12/2021</b> - Tive a idéia de consumir a [NotionAPI](https://developers.notion.com), lançando os chamados no website, que usufrui de ferramentas para busca e organização para o N2. Continuei com a implementação das intenções requeridas, terminando o diagnóstico de Hardware, e também o diagnóstico de Software.
- <b>30/12/2021</b> - Foquei boa parte do dia reestruturando meu código. Além da separação das funções em um arquivo separado, também separei as respostas do dialogflow em outro arquivo. Aproveitei o tempo restante para melhorar a documentação.
- <b>01/01/2022</b> - Alterei como estava abordando as funções no controller, que necessitavam passar os mesmos parâmetros constantemente, então criei classes para funções do dialogflow e resposta(strings). Com todas intenções principais prontas, e o webhook funcional, executei diversos testes, tratei mais algumas intenções de fallback, e treinei o bot no dialogflow. Por fim, adicionei maior variedade de respostas ao bot, e esclareci outras, para melhorar o entendimento do usuário. Por fim, fiz o deploy no [Heroku](https://www.heroku.com) e finalizei a documentação para entrega.

## Dificuldades
- Tive dificuldade inicial com os contextos dentro do dialogflow, porém rapidamente resolvi as duvidas pendentes, e não tive mais problemas.  
- Tentei bastante encontrar uma solução mais abstrata para não ter que usar if/else ou switch/case na chamada de métodos, e embora chegar a algumas, nenhuma me satisfez, ou tratou de forma tão eficar e legível quanto o switch/case, então por hora mantive a estruturação via este.  
- Fiquei com umas dúvidas em relação ao último feedback que não foram possíveis de conversar sobre antes do fim de semana, porém tirei o máximo que entendi, e apliquei ao meu código. No entanto, ainda pretendo revisar esse feedback junto ao instrutor, para aprimorar também na próxima entrega.

## Tecnologias: 
[Config](https://www.npmjs.com/package/config): Definição de parâmetros locais.  
[Express](https://expressjs.com/pt-br/): Framework de gestão de rotas e requisições/respostas.  
[Heroku](https://www.heroku.com): Upload do webhook, para uso no fulfillment do DialogFlow.  
[Mongoose](https://mongoosejs.com): Comunicação com o banco do MongoDB Atlas.  
[NodeJS](https://nodejs.org/): Ambiente de execução com JavaScript, base da execução do webhook.  
[NotionAPI](https://developers.notion.com): API para comunicação com database do Notion, front-end para leitura das chamadas para N2 pelos funcionários.

## Instalação
- Aplicação em NodeJS, requer que este esteja instalado na máquina/container utilizado. 
- Faça download/clone do repositório, caso necessário extraia para uma pasta local. Importe o bot para o DialogFlow; Isso pode ser feito ao criar um novo agente no console do DialogFlow, e nas configurações deste acessar "Import and Export" e importar o zip contido no repositório.  

- <b>Execução local:</b>
    - É necessário conectar com um banco de dados do [MongoDB](https://www.mongodb.com), recomendado utilizar o [Atlas](https://www.mongodb.com/atlas/database). [Aqui](https://medium.com/reprogramabr/conectando-no-banco-de-dados-cloud-mongodb-atlas-bca63399693f) você pode encontrar um passo à passo de como criar um cluster gratuito no Atlas e conseguir sua <i>string de conexão</i>. Com sua string em mãos, navegue para `config.example/default.json`, e cole em <b>`"Add your connection string here"`</b>.
    - Como o webhook consome a [NotionAPI](https://developers.notion.com), é preciso configurar as variáveis `notion -> key` e `notion -> db` no arquivo `config.example/default.json`. O guia [Getting started with NotionAPI](https://developers.notion.com/docs/getting-started) ensina como criar sua chave, criar a integração no notion, e pegar o ID do database de forma muito explicativa e visual. Você deve duplicar o [template](https://mashirokuuhaku.notion.site/83c63f83fcdb4089851a39c53b7cee36?v=8665abd4f37045db859b43d7c694c0ff) de lista de clientes(canto superior direito da página), ou recriar o banco com as mesmas propriedades para integração.
        - Após esses passos, renomeie `config.example` para `config` e está tudo certo.
    - Utilize de uma aplicação como o ngrok para estabelecer conexão com o webhook. Instale e execute o ngrok, crie conta caso necessário. Execute o comando ngrok http 3001, e caso necessário copie o link após "Fowarding" (com final ngrok.io) e cole na página de Fulfillment no console do Dialogflow (Fulfillment -> Webhook -> URL*) com a rota "/webhook" (Ex: 123-456-789.ngrok.io/webhook). Salve no final da página.
    - Instale as dependências do pacote antes da primeira execução com <b><i>npm install --production</i></b> dentro da pasta raiz.
    - Execute o projeto com <b><i>npm start</i></b> dentro da pasta <b>raiz</b> do projeto. Após esses passos, o bot estará em execução, exibindo a mensagem 'Webhook running' como confirmação. É possível executar o bot no painel direito, ou integrar com algum serviço. Para fazer a integração, siga os passos especificados no Console do DialogFlow.  

- <b>Execução via Heroku Webhook:</b>
    - Na página de Fulfillment no console do Dialogflow, utilize o link (https://aqueous-sierra-28306.herokuapp.com/webhook) para executar a webhook hospedada no heroku.
    - Agora, o bot pode ser executado no painel direito do console. Ainda, é possível adicionar integrações novas através do menu Integrations.

## Intents
- Implementadas:
    - `Default Welcome Intent`: Dá boas vindas ao usuário, com mensagem customizada caso já tenha usado o sistema anteriormente.
    - `Default Goodbye Intent`: Se despede do usuário, quando identifica que ele não quer mais conversar com o bot.
    - `Default Fallback Intent`: Intenção que é chamada sempre que o bot não entende algo. Ela sugere que o usuário chame a `Help Intent`, para aprender a navegar pelo bot.
    - `Nickname Intent`: Intenção extra, que permite o usuário escolher um apelido, e caso tenha um, este é referenciado em outras intenções.  
    - `Help Intent`: Ensina ao usuário como utilizar o bot, sugerindo frases de como iniciar o fluxo.
    - `Nickname Intent`: Pergunta ao usuário como quer ser chamado.
    - `Nickname Intent Next`: Caso o usuário não tenha um apelido, adiciona no banco, relacionando com o ID/Session.
    - `Report Intent`: Tenta adicionar um chamado à ser tratado pelo suporte N2 no banco e na interface de front-end através da API do Notion. Caso falhe, informa que não foi possível criar um chamado no momento.
    - `Diagnose Intent`: Pede confirmação do tipo de problema.
    - `Diagnose Intent Fallback`: Caso a resposta de confirmação do tipo de problema não seja compreendida, tenta ajudar o usuário a responder mais objetivamente.
    - `Diagnose Confirmation Intent`: Chama `Diagnose Intent - Software` ou `Diagnose Intent - Hardware`, dependendo da resposta de confirmação do problema.
    - `Diagnose Intent - Software`: Generaliza o problema informado pelo usuário dentro da entidade `@softwareProblem` entre 5 parâmetros, para ajudar no diagnóstico do problema, já que pelo escopo, todos problemas de software são passados via chamado.
    - `Diagnose Intent - Hardware`: Tenta tratar o problema informado pelo usuário com propostas de soluções paliativas. Caso o problema seja de uma peça/computador quebrado ou defeituoso, abre um chamado.
    - `Diagnose Intent - Hardware - Yes`: Se o usuário confirma que teve seu problema resolvido pela solução paliativa, finaliza o atendimento.
    - `Diagnose Intent - Hardware - No`: Se o problema ainda não foi resolvido, abre um chamado para N2 tentar solucionar.

## Contexts
- `goodbyeContext`: Não é desejavel que, caso o usuário esteja inserindo alguma resposta e o bot entenda como fim de conversa por alguma razão, então criei o contexto para permitir que o usuário possa chamar o `Default Goodbye Intent` de forma restrita.
- `diagnoseContext`: Contexto para começar o diagnóstico, tem seu propósito similar ao `goodbyeContext`, ja que não é desejado que o usuário chame por acidente a intenção quando, por exemplo, está alterando seu apelido.

## Integração
- O bot está integrado com o LINE, e para acessar ele, é necessário entrar no aplicativo e procurar pelo ID @@532yhotx, ou [escaneie o QR Code](https://line.me/R/ti/p/%40532yhotx).
- O bot também tem integração com o Telegram, que pode ser acessada via [este link](https://t.me/N1Support_bot).
- Por fim, o bot também foi integrado com o Dialogflow Messenger, para acessar, basta ir em 'Integrations' após importar e configurar o bot no Dialogflow, 'Text Based -> DialogFlow Messenger -> Try it Now' e a janela aparecerá no canto inferior direito. Alternativamente, acesse o [Glitch.me](https://tartan-grizzly-hotel.glitch.me) contendo o script do mensageiro.
- Você pode ver a [Lista de Chamados aqui](https://mashirokuuhaku.notion.site/83c63f83fcdb4089851a39c53b7cee36?v=8665abd4f37045db859b43d7c694c0ff). Ela é automaticamente atualizada sempre que um chamado é criado.