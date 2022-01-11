# Coronabot
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/pt-br/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas/database)
[![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)](https://www.heroku.com)

## Diário de bordo
- <b>03/01/2022</b> - Início do projeto, setup de rotas, bot no dialogflow, integrações. Também foquei um pouco na refatoração de funções envolvendo o banco de dados, que estava redundante. Além disso, desenvolvi algumas das respostas das intenções básicas.
- <b>04/01/2022</b> - Finalização das intents básicas, e mais organização das classes, de modo mais escalável. Também alterei a função de processamento de resposta, a fim de ter suporte para as cards.
- <b>05/01/2022</b> - Tive impedimentos relatados na daily que me impossibilitaram de codar muito, então apenas fiz a mudança da intent de boas vindas, para inserir a card, e também comecei a ver sobre o payload do line para cards, que não estava funcionando inicialmente.
- <b>06/01/2022</b> - Segui implementando o projeto, optando por iniciar pela parte de pré-diagnóstico, ja que aparentava ser a maior e mais significante funcionalidade. Fiquei procurando um meio de gerar o relatório, salvando os dados no mongo, e fiquei até o restante do meu tempo do dia fazendo essa implementação.
- <b>07/01/2021</b> - Sendo o dia final para entrega do bot, vi que, devido ao escopo grande do diagnóstico, dei uma pausa no fluxo e desenvolvi por completo os outros dois fluxos, de Prevenção e Contágio, respectivamente. Fiz o tratamento da fallback de ambos, embora não tive o tempo de implementar a ideia mais abstraida de um único fallback que trataria todos futuros, dependendo do contexto, ja que era muito mais complexo, e me faltava tempo. Voltei ao fluxo de diagnóstico, e finalizei a parte dos sintomas leves. Por fim, me faltando ainda terminar a documentação e fazer o deploy, com uma hora para entrega, finalizei a revisão do código, principalmente focado no fallback e no fluxo através das cards, e terminei de documentar o projeto e fazer o deploy.
- <b>09/01/2021 e 10/01/2021</b> - Pós massacre: No massacre, percebi o tanto de erros que estava tendo com meu design, que restringi o bot tanto por contextos que muitas intents só eram acessíveis em casos extremamente especificos, gerando um monte de fallbacks desnecessários. Minha prioridade foi treinar o bot, que não tive tempo de fazer antes da entrega. Isso foi um dos fatores que fazia o uso dele inviável a menos que seguindo estritamente as frases de sugestões das cards. Agora, o bot está treinado em cada intent para responder e entender muito mais dinâmicamente, seja por cards ou chat. A segunda etapa foi a correção dos contextos. Acabei removendo diversos contextos restritivos que não tinham necessidade de existir, e corrigi diversos outros que estavam ou sendo passados errados ou com lifespan incorreto. Somente isso já resolveu os maiores problemas encontrados no massacre. Então segui para finalmente ajustar os problemas do código. O principal sendo o fallback, que notei que, além do webhook estar desativado no dialogflow, não tratei as exceções genéricas. Fiz esse tratamento, e conforme fui testando percebi a facilidade de usar do recurso de contador dentro do contexto passado por fallbacks `__system_counter__` para que seja possível alterar a mensagem de fallback por profundidade sem ter que criar multiplas intents, como fiz no projeto original. O próximo passo foi corrigir as outras falhas notadas no massacre. Corrigi a lógica que estava errada de redirecionamento em respostas negativas, e readicionei o tratamento de sintomas graves, já implementando também o uso do fallback da forma mais dinâmica. Infelizmente, o início do pré-diagnóstico ainda ficou incompleto, com apenas a saudação da intent re-adicionada, já que minha implementação usando do mongo para determinar o resultado ainda está sem funcionar, e acaba quebrando a parte funcional do código. Por fim, noto que, se estivesse re-fazendo a implementação desse projeto, abordaria diversas coisas diferentemente. Evoluí muito estudando meus erros, e vendo vários pontos de vista dessa implementação, e percebi que compliquei muito e deixei partes do projeto muito confusas e complexas, quando não havia essa necessidade. Apesar de não estar contente com a entrega, fico contente com esse aprendizado massivo, e com a melhora gigantesca que terei nos próximos projetos por conta disso.

## Dificuldades
- Tive bastante dificuldade com o payload de cards do Line, que têm muitas regras especificas para o uso, como a limitação de somente 4 balões de reposta, que me fez mudar algumas opções do fluxo já que era uma limitação do software. Encontrei várias dificuldades com isso, já que foi a primeira vez usando o sistema de cards também, e sofri para encontrar algumas soluções. Outro problema é caso o texto do balão de resposta ultrapassar um limite de caracteres, toda a card não é gerada. Além disso, noto que as cards não são suportadas na versão desktop do line, sendo apenas possível testar via mobile. Fiz a integração do Telegram, porém devido ao probema ainda não resolvido com a plataforma, não tive meios de testar. Segue o link: (https://t.me/sarscovinfobot). A aplicação funciona sem problemas pelo console do dialogflow.

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
    - Na página de Fulfillment no console do Dialogflow, utilize o link (https://sars-cov-info.herokuapp.com/webhook) para executar a webhook hospedada no heroku.
    - Agora, o bot pode ser executado no painel direito do console. Ainda, é possível adicionar integrações novas através do menu Integrations.

## Intents
- `Default Welcome Intent`: Dá boas vindas ao usuário, com mensagem customizada caso já tenha usado o sistema anteriormente.
- `Default Goodbye Intent`: Se despede do usuário, quando identifica que ele não quer mais conversar com o bot.
- `Default Fallback Intent`: Intenção que é chamada sempre que o bot não entende algo.
- `Nickname Intents`: Intenção extra, que permite o usuário escolher um apelido, e caso tenha um, este é referenciado em outras intenções.
- `Menu - Contagion Intents`: Intents do tópico 2.0.0 do fluxo
- `Menu - Diagnostic Intents` Intents do tópico 6.1.0 do fluxo
- `Menu - Prevention Intents` Intents do tópico 1.0.0 do fluxo
- `Menu Only Intent`: Intent com o menu sem mensagem de boas vindas anexada.
- Devido à quantidade de intents de fluxo, apenas as principais foram listadas.


## Integração
- O bot está integrado com o LINE, e para acessar ele, é necessário entrar no aplicativo e procurar pelo ID @613ehdne, ou [escaneie o QR Code](https://qr-official.line.me/sid/L/613ehdne.png).