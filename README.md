# Projeto-2-Sprint-5
Foi desenvolvido um chatbot para assistência de suporte em nive 1.
### Diário de Bordo:
Iniciei planejando a linha de raciocínio do sistema, apresentou um pouco de trabalho porque é um projeto de muitas variáveis na qual o usuário pode dizer de diversas maneiras diferente. Depois de planejar, fui para execução, criei um projeto no dialogflow, fiz algumas entities. Obtei em utilizar as ententies para filtrar essas variáveis, então elas ficaram responsáveis por denominar para o backend o componente/programa e qual problema ele apresentou. Em seguida, produzi um "repositório" com determinadas ações que poderiam ser tomadas para resolver certas dificuldades. Logo após criei e treinei certas intents. Encontrei adversidades com contexto, em certos momentos o contexto não era "respeitado"; Quando o usuário iria realizar a descrição do problema para o cadastro da chamada acontecia de acionar as intents que reconheciam se o problema era no hardware ou software, dessa forma quebrando o contexto da chamada(contextos abertos para recolhimento das informçãoes para abertura de chamada); Resolvi isso treinando todas as frases treinadas das intents de **hardware** e **software** em **chamadaDescProblema** . Posteriormente, conectei a Api interna e o MongoDB Atlas ao código e desenvolvi todo mecanismo de conversação entre o sistema e o Banco de Dados. E por fim, integrei o sistema ao Telegram e ao line, subi o código nesse repositório e fiz o deploy na heroku;
### Algumas tecnologias usadas:
* [Nodejs](https://nodejs.org/en/): Linguagem utilizada no desenvolvimento da aplicação;
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?https://www.mongodb.com/cloud/atlas/lp/try2-aterms&utm_source=google&utm_campaign=gs_americas_brazil_search_core_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624308&adgroup=115749705983&gclid=Cj0KCQiAkZKNBhDiARIsAPsk0WgPiIsL7i5x9sxjUjMUaUYE3LmL435nR_9HjC_aK-6_ei3TZjZaiFEaApPoEALw_wcB): Banco de Dados, com armazenamento em nuvem, que foi utilizado;
* [Express](https://www.npmjs.com/package/express): Framework que auxiliou no desenvolvimento da API interna;
* [Action-on-google](https://www.npmjs.com/package/actions-on-google) : Biblioteca que facilitou criação de ações com o Dialogflow;
* [Dotenv](https://www.npmjs.com/package/dotenv): Ferramenta que ajudou no manuseio de variáveis sensíveis do sistema;
* [Axios](https://www.npmjs.com/package/axios): Ferramenta que auxiliou nas requisições http;
* [Mongoose](https://www.npmjs.com/package/mongoose) : Biblioteca que realizou a conexão com Banco de Dados;
## Como Funciona o Sistema:
O usuário envia uma mensagem através do canal de chat (Telegram, Line, chat teste do próprio dialogflow), o dialogflow interpreta está mensagem e designa a intent que está mais preparada para tratar essa mensagem. A intent chama o webhook do fulfillment que fará uma requisição a api interna. O arquivo [index.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-2/index.js), responsável pelo levantamento do sistema, vai ser o primeiro a ser chamado. Index.js passará a requisição para [rotaApiInterna.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-2/Rotas/rotaApiInterna.js), local que está a rota POST, rota que irá convocar algum arquivo da pasta [Intencoes](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/tree/denner-basilio-2/Intencoes) que de acordo com a intent e os dados fornecidos chamará a função correta para o tratamento da resposta. Em [repositorio.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-2/repositorio.js) ficam as respostas de algumas ações que o usuário pode tomar para resolver o problema antes de abrir um chamado. Eventualmente a função escolhida precise usar o banco de dados, rotaApiInterna.js cumprira uma convocação a [rotaBD.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-2/Rotas/rotaBD.js) que empreenderá uma requisição que passará pelas funções de [acoesBD.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-2/BancoDeDados/acoesBD.js) até chegar em [tabelas.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-2/BancoDeDados/tabelas.js) que trocará informações com o banco de dados. Banco que foi ativado anteriormente por [conexao](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-2/BancoDeDados/conexao.js) no inicio do fluxo;
## Intents
* **Default Welcome Intent** : Intent padrão do dialogflow que reconhece quando o usuário envia uma mensagem de saudação;
* **Default Fallback Intent** : Intent padrão do dialogflow que é acionada quando a mensagem do usuário não se encaixa em nehuma intent;
* **menu** : Intent que ira apresentar os serviços do Bot ao usuário;
* **hardware** : Intent responsável por reconhecer se o problema relatado pelo usuário é no hardware. Ele identifica dois valores o "componete" e qual "defeito" ele apresentou;
* **software** : Intent responsável por reconhecer se o problema relatado pelo usuário é no software. Ele identifica qual "programa" apresentou defeito;
* **chamada** : Intent que inicia o processo de recebimento das informações para abrir uma chamada.;
* **chamadaNome** : Recebe o nome do usuário para cadastro da chamada;
* **chamadaTelefone** : Recebe o telefone do usuário para cadastro da chamada;
* **chamadaEmail** : Recebe o email do usuário para cadastro da chamada;
* **chamadaCpf** : Recebe o CPF do usuário para cadastro da chamada;
* **chamadaDescProblema** : Recebe a declaração do problema do usuário;
* **listaChamadasAtivas** : Intent que reconhece quando o usuário quer visualizar as chamadas ativas;
* **listaChamadasPorCpf** : Intent que reconhece quando o usuário quer visualizar as suas chamadas;
* **listaChamadaCPF** : Recebe o CPF do usuário para realizar uma busca pelas chamadas feitas por dele;
* **despedida** : Intent que é chamanda quando o usuário encerra a conversa e agradece;

## Como utilizar a Aplicação:
### Localmente(Faz-se necessário ter Nodejs e Ngrok em sua máquina):
1. Clone esse repositório;
2. No terminal do arquivo digite :" **npm install** " para instalar as dependências
3. Novamente no terminal do arquivo digite: " **node index.js** " para iniciar a aplicação
4. Use o [ngrok](https://ngrok.com/) para transformar seu servidor local num servido remoto. Digitando **ngrok http 3000**
5. Adicione "/api/interna" na Url disponibilizada pelo ngrok
6. Insira esta Url em **Dialogflow -> fulfillment -> webhook**
7. Insira nas axios a Url disponibilizada pelo ngrok, no entanto, de acordo com os endpoint(essas /) das router do [index.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/blob/denner-basilio-2/index.js);
8. E utilize o projeto no canal de conversação de sua escolha.
### Remotamente:
1. Para utilizar remotamente basta você realizar a requisição pela URL : https://projeto-sprint-five-two.herokuapp.com/
2. Lembrando de adicionar os endpoint na url.
### Telegram :
1. Para utilizar via Telegram acesse o link: [t.me/DAssisSuporte_bot](https://t.me/DAssisSuporte_bot)
### Line :
1. Para utilizar via Line acesse o link: [Assistente Suporte](https://liff.line.me/1645278921-kWRPP32q/?accountId=881akgsj)
