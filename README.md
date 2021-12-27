# Projeto-1-Sprint-5
Com auxílio de uma Api da [Prevmet](https://portal.inmet.gov.br/manual/manual-de-uso-da-api-de-previs%C3%A3o), foi desenvolvido um chabot que fornece a previsão do tempo dos próximos quatro dias de municipio no Brasil .
### Diário de Bordo:
Comecei criando um projeto no Dialogflow e testando a API sugerida que inicialmente estava funcionando bem, mas após algumas horas ela saiu do ar. Desse modo procurei outra api ate encontrar uma da prevmet; No entanto, para utilizar essa fez se necessário o uso de outra api do IBGE para buscar o geocode dos municipios, o que dificultou um pouco na organização do código, pois tinha que evitar o "timeout". Em alguns cidades a api externa demora um pouco mais para devolver os dados o que as vezes causa timeout, mas se repetir a requisição funciona normalmente. Após ter resolvido o problema da API externa, voltei para o planejamento da linha de conversação do bot e estabeleci as entities e seus valores no dialogFlow. Em seguida programei as intents e treinei algumas frases. Depois disso desenvolvi algumas funcionalidades de conversação do sistema e a API interna, que foi conectada ao dialogflow. E por fim, integrei o projeto no telegram, subi o projeto neste repositório e realizei o deploy do mesmo na Heroku, entretanto, a partir desse momento o projeto começou apresentar problemas que não ocorriam localmente. Dessa maneira, coloquei o sistema na [glitch](https://glitch.com/) ;
### Algumas tecnologias usadas:
* [Nodejs](https://nodejs.org/en/): Linguagem utilizada no desenvolvimento da aplicação;
* [Express](https://www.npmjs.com/package/express): Framework que auxiliou no desenvolvimento da API interna;
* [Action-on-google](https://www.npmjs.com/package/actions-on-google) : Biblioteca que facilitou criação de ações com o Dialogflow;
* [Axios](https://www.npmjs.com/package/axios): Ferramenta que auxiliou nas requisição http;
* [Cors](https://www.npmjs.com/package/cors): Pacote do node que facilitou o acesso a alguns recursos;
## Como Funciona o Sistema:
O usuário envia uma mensagem através do canal de chat (Telegram, API client, chat teste do próprio dialogflow), o dialogflow interpreta está mensagem e designa a intent que está mais preparada para tratar essa mensagem. A intent chama o webhook do fulfillment que fará uma requisição a api interna. O arquivo [index.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-1/index.js), responsável pelo levantamento do sistema, vai ser o primeiro a ser chamado. Index.js passará a requisição para [rotaInternaApi.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-1/Rotas/rotaApiInterna.js), local que está a rota POST, rota que irá convocar algum arquivo da pasta [Intents](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/tree/denner-basilio-1/Intents) (Pasta que tem os arquivos que tratam as respostas) que de acordo com a intent e os dados fornecidos chamará a função correta para o tratamento da resposta. Caso a função acionada necessite de dados da api externa uma requisição através de uma requisição será feita até [rotaExternaApi.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-1/Rotas/rotaApiExterna.js), onde se encontra as rotas que com ajuda do axios efetuara uma chamada de dados. [acaoApiExterna.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-1/acaoApiExterna.js) contém uma função que realiza a busca do geocode(Para buscar a previsão de uma cidade na api utilizada faz-se necessário ter o geocode dela no banco de dados do IBGE) do município que se pesquisa a previsão do tempo.
## Intents
* **Default Welcome Intent** : Intent padrão do dialogflow que reconhece quando o usuário envia uma mensagem de saudação;
* **Default Fallback Intent** : Intent padrão do dialogflow que é acionada quando a mensagem do usuário não se encaixa em nehuma intent;
* **previsaoDoTempo** : Intent responsável por receber a cidade e seu Estado para a pesquisa da previsão do tempo;
* **despedida** : Intent que é chamanda quando o usuário termina a conversa e agradece.

## Como utilizar a Aplicação:
### Localmente(Faz-se necessário ter Nodejs e Ngrok em sua máquina):
1. Clone esse repositório;
2. No terminal do arquivo digite :" **npm install** " para instalar as dependências
3. Novamente no terminal do arquivo digite: " **node index.js** " para iniciar a aplicação
4. Use o [ngrok](https://ngrok.com/) para transformar seu servidor local num servido remoto. Digitando **ngrok http 3000**
5. Adicione "/api/interna" na Url disponibilizada pelo ngrok
6. Insira esta Url em **Dialogflow -> fulfillment -> webhook**
7. Insira nas fetch a Url disponibilizada pelo ngrok, no entanto, de acordo com os endpoint(essas /) das router do [index.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-1/index.js);
8. E utilize o projeto no canal de conversação de sua escolha.
### Remotamente:
1. Para utilizar remotamente basta você realizar a requisição pela URL : https://projeto-one-sprint-five.glitch.me/
2. Lembrando de adicionar os endpoint na url.
### Telegram :
1. Para utilizar via Telegram acesse o link: [t.me/DPrevTempo_bot](https://t.me/DPrevTempo_bot)
