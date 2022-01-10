# Projeto-3-Sprint-5
Foi desenvolvido um chatbot para retirar dúvidas sobre o Coronavírus e apresentar um pré-diagnostico.
## Diário de Bordo:
Comecei olhando algumas informações sobre covid-19 no site do ministério da saúde e ao mesmo tempo estudando o design de projeto fornecido. Iniciei a execução do sistema projetando uma maneira de devolver todos cenários possíveis de diagnósticos. Cheguei a ideia de construir um array de objeto com um código de identificação e a mensagem do resultado e assim transformar as informações passadas pelo usuário também em um código(Explicarei a construção do código em um tópico abaixo) , desse maneira, buscando um "match" entre os códigos para devolver o diagnóstico. Logo após, criei um projeto no dialogflow e comecei a criar e treinar algumas intenções e posteriormente seus fallbacks. Depois conectei a Api interna e o MongoDB Atlas ao código e desenvolvi todo mecanismo de conversação entre o sistema e o Banco de Dados. A seguir, integrei o sistema ao telegram; Como coloquei uns botões de sugestões(quickReplies) o telegram automaticamente envia uma mensagem ("Choose an item") antes dos botões, não consegui remove-la; E por fim, subi o código nesse repositório e fiz o deploy na heroku.
### Como Funciona o código de identificação do diagnóstico:
O código tem quatro parametros : 
1. **Grupo de risco** : Se pertence a um grupo de risco recebe '1' senão '0'
2. **Febre** : Se teve febre recebe '1' senão '0'
3. **Sintomas Leves** : Se teve muitos(>3) sintomas recebe '2', poucos sintomas '1' e se não teve sintomas ou teve mas melhorou recebe '0'
4. **Sintomas Graves** : Se teve sintomas graves recebe '1' senão '0'
</br> **EXEMPLO:** Um usuário que não pertence a um grupo de risco, teve febre, apresentou muitos sintomas leves e não teve sintomas graves receberá o diagnóstico de código '0120'
### Algumas tecnologias usadas:
* [Nodejs](https://nodejs.org/en/): Linguagem utilizada no desenvolvimento da aplicação;
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?https://www.mongodb.com/cloud/atlas/lp/try2-aterms&utm_source=google&utm_campaign=gs_americas_brazil_search_core_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624308&adgroup=115749705983&gclid=Cj0KCQiAkZKNBhDiARIsAPsk0WgPiIsL7i5x9sxjUjMUaUYE3LmL435nR_9HjC_aK-6_ei3TZjZaiFEaApPoEALw_wcB): Banco de Dados, com armazenamento em nuvem, que foi utilizado;
* [Express](https://www.npmjs.com/package/express): Framework que auxiliou no desenvolvimento da API interna;
* [Action-on-google](https://www.npmjs.com/package/actions-on-google) : Biblioteca que facilitou criação de ações com o Dialogflow;
* [Dotenv](https://www.npmjs.com/package/dotenv): Ferramenta que ajudou no manuseio de variáveis sensíveis do sistema;
* [Axios](https://www.npmjs.com/package/axios): Ferramenta que auxiliou nas requisições http;
* [Mongoose](https://www.npmjs.com/package/mongoose) : Biblioteca que realizou a conexão com Banco de Dados;
## Como Funciona o Sistema:
O usuário envia uma mensagem através do canal de chat (Telegram, Line, chat teste do próprio dialogflow), o dialogflow interpreta está mensagem e designa a intenção que está mais preparada para tratar essa mensagem. A intenção chama o webhook do fulfillment que fará uma requisição a api interna. O arquivo [index.js](hhttps://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-3/index.js), responsável pelo levantamento do sistema, vai ser o primeiro a ser chamado. Index.js passará a requisição para [rotaApiInterna.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-3/Rotas/rotaApiInterna.js), local que está a rota POST, rota que irá convocar [controlador.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-3/controlador.js) que fará uma busca em [objetoIntencoes.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-3/objetoIntencoes.js) atrás da intenção correta; achada a intenção será chamado algum arquivo da pasta [Intencoes](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/tree/denner-basilio-3/Intencoes) que de acordo com a intenção e os dados fornecidos chamará a função correta para o tratamento da resposta.  Eventualmente a função escolhida seja de "Saudação", rotaApiInterna.js cumprirá uma convocação a [rotaBD.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-3/Rotas/rotaBD.js) que empreenderá uma requisição que passara pelas funções de [acoesBD.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-3/BancoDeDados/acoesBD.js) até chegar em [tabelas.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-3/BancoDeDados/tabela.js) que trocará informações com o banco de dados(que foi ativado por [conexao](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-3/BancoDeDados/conexao.js) ao mesmo tempo que index.js foi chamado no inicio do fluxo) para verificar se o usuário já utilizou o chatbot anteriormente e assim proporcionar um cumprimento personalizado. Na condição de um usuário novo, rotaBD.js realizara uma nova requisição, no entanto, essa para cadastrar os dados do usuário no banco de dados.
## Intents
* **Default Welcome Intent** : Intent padrão do dialogflow que reconhece quando o usuário envia uma mensagem de saudação;
* **Default Fallback Intent** : Intent padrão do dialogflow que é acionada quando a mensagem do usuário não se encaixa em nehuma intent;
* **menu** : Intent que ira apresentar os serviços do Bot ao usuário;
* **Intents inicial "PV" como 'PV-prevencao'** : São as intençoes de prevenção, logo responsáveis por devolver informações sobre prevenção
* **Intents inicial "CT" como 'CT-contagio'** : São as intençoes de contágio, logo responsáveis por devolver informações sobre contágio
* **Intents inicial "PD" como 'PD-PreDiagnostico'** : São as intençoes de Pré-diagnóstico, logo responsáveis receber as informações do usuário e devolver um diagnóstico
* **encerramento** : Intent que é chamanda quando o usuário encerra a conversa e agradece;

## Como utilizar a Aplicação:
### Localmente(Faz-se necessário ter Nodejs e Ngrok em sua máquina):
1. Clone esse repositório;
2. No terminal do arquivo digite :" **npm install** " para instalar as dependências
3. Novamente no terminal do arquivo digite: " **node index.js** " para iniciar a aplicação
4. Use o [ngrok](https://ngrok.com/) para transformar seu servidor local num servido remoto. Digitando **ngrok http 3000**
5. Adicione "/api/interna" na Url disponibilizada pelo ngrok
6. Insira esta Url em **Dialogflow -> fulfillment -> webhook**
7. Insira nas axios a Url disponibilizada pelo ngrok, no entanto, de acordo com os endpoint(essas /) das router do [index.js](hhttps://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-3/index.js);
8. E utilize o projeto no canal de conversação de sua escolha.
### Remotamente:
1. Para utilizar remotamente basta você realizar a requisição pela URL : https://projeto-sprint-five-three.herokuapp.com/
2. Lembrando de adicionar os endpoint na url.
### Telegram :
1. Para utilizar via Telegram acesse o link: [t.me/DCovidBot_bot](https://t.me/DCovidBot_bot)
