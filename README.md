
# Exercício 3 da quinta sprint

Um bot que auxilia informa o usuário sobre o vírus SARS-CoV-2. O bot consegue fazer informar sobre prevenções, formas de contágio e sobre o período de incubação, além de saudar, se despedir,tratar frases que ele não entende e mostrar um "sobre mim".


## Diário de bordo

### Versão sem o tempo extra

Esse bot não é nem de perto o meu melhor em termos de cumprir os requisitos do projeto. A intent de PreDiagnosis contem somente uma resposta padrão, não consegui implementar as bubbles de respostas sugeridas e há falhas nos contextos... tudo será comentado abaixo.

Minha maior dificuldade nesse projeto foi ter muitas coisas novas como requisitos e/ou coisa para implementar, como por exemplo os cards, mandar mais de um balão de resposta e trabalhar com contextos. Acabei gastando muito tempo para implementar, ou tentar, essas novidades de maneira escalável, o que complicou a entrega.

O fallback geral funciona bem na maioria das vezes, porém, várias vezes aconteceu de um contexto sem lifespan se perpetuar. Achei a solução só aos 95 do segundo tempo, então ela só será implementada no próximo projeto.

Em relação aos cards, esbarrei no problema de não conseguir fazer um postback deles e como o tempo estava curto, deixei de lado, o que também ocorreu com a intenção de PreDiagnosis, pois ela me pareceu muito complexa e acabei não implementando para que pelo menos o que eu fiz estivesse aceitável.

Agora uma visão minha sobre o projeto: ele me acrescentou muito conhecimento e comecei a pensar em coisas para implementar que deixarão o código ainda melhor. Dessa forma, fico satisfeito com o que o projeto me proporcionou, apesar da minha entrega estar ruim. O fator coisa nova foi muito determinante, assim como a escalabilidade e a dificuldade para implementar os cards no telegram (incialmente estava em um caminho totalmente errado). Isso custou muito tempo de desenvolvimento. No geral, é isso.

### Com o tempo extra

Com o tempo a mais dado, essa entrega melhorou muito, pois problemas como falta das bubbles de respostas sugeridas, e a resposta padrão presente no PreDiagnosis foram resolvidos. O problema nos contextos ainda persiste, mas ele só acontece em alguns casos bem específicos que ainda não consegui identificar. Depois devo procurar e corrigir esse problema para entregas futuras.

Um detalhe importante desse lance do contexto, é que ele só manda a mensagem errada de fallback de acordo com o design, mas nada demais.

Obs: Podem existir pequenos bugs, pois não consegui testar de maneira apropriada o bot para ver se deixei passar algo e outro ponto a se comentar é que o pré-diagnóstico responde bem com frases simples, como pertenço ao grupo de risco ou tive febre, mas se o usuário especificar demais, pode cair no fallback. Para resolver ambos, precisava de mais tempo ainda (juro que não fico enrolando, é só que exige tempo essas coisas mesmo, pelo menos para mim).

Obss: O fluxo tenta seguir ao máximo o design enviado, portanto, se o fluxo seguir um caminho que você não considera o ideal, eu só peço para garantir se foi erro meu pelos contextos ou se é assim no design mesmo (isso aqui é só para garantir mesmo kkkk, é o medo).


## Intenções

- Agree -> Intent que uma vez acionada, analisa o contexto e encaminha o usuário para a intenção correta;

- BasicPrevention -> Quando acionada, mostra uma mensagem falando sobre as prevenções básicas que devem ser tomadas (depende do contexto prevention-followup para poder ser acionada);

- CasesInBrazil -> Intent que retorna uma resposta padrão dizendo que ainda não está implementada essa função, feita por conta das bubbles e dos textos que mencionam essa funcionalidade;

- Contagion -> Mostra o menu inicial desse contexto, além de ativá-lo e falar que informações podem ser obtidas;

- Fallback Intent -> Intenção que informa quando o bot não compreendeu algo e pede para o usuário reformular a mensagem. Tentei implementar um geral, pois se não, minhas intents ficariam uma salada com tanto fallback;

- Fever -> Intenção que cuida do fluxo de febre presente no design, fazendo alterações no banco de dados; 

- FormsOfContagion -> Quando acionada, mostra uma mensagem falando sobre as formas de contágio (depende do contexto contagion-followup para poder ser acionada);

- Goodbye -> Intenção que se despede do usuário e marca um fim de conversa;

- GotBetter -> Intenção que cuida do fluxo de melhora em caso de medicação presente no design, fazendo alterações no banco de dados, caso  necessário;

- HealthProfessionalPrevention -> Quando acionada, mostra uma mensagem falando sobre as prevenções para profissionais da saúde que devem ser tomadas (depende do contexto prevention-followup para poder ser acionada);

- Help -> Intenção acionada quando o usuário pede ajuda, mostra dados úteis para orientá-lo no funcionamento do bot;

- IncubationPeriod -> Quando acionada, mostra uma mensagem falando sobre o tempo de incubação do vírus (depende do contexto contagion-followup para poder ser acionada);

- KnowAboutMe -> Quando essa intenção é acionada, ela fala qual foi o propósito do bot e fala um pouco sobre o desenvolvedor responsável;

- MainMenu -> Quando essa intenção é acionada, mostra o menu principal para o usuário;

- MinorSymptoms -> Intenção que cuida do fluxo de sintomas leves presente no design, fazendo alterações no banco de dados;

- PreDiagnosis -> Intenção que inicia o fluxo do pré-diagnóstico presente no design, podendo criar um elemento no banco de dados, caso necessário;

- Prevention -> Mostra o menu inicial desse contexto, além de ativá-lo e falar que informações podem ser obtidas;

- RiskGroup -> Intenção que cuida do fluxo de grupo de risco presente no design, fazendo alterações no banco de dados;

- SevereSymptoms -> Intenção que cuida do fluxo de sintomas graves presente no design, fazendo alterações no banco de dados;

- ShowDiagnosis -> Intenção que mostra o resultado do pré-diagnóstico, ela é acionada somente pela intenção de SevereSymptoms, para garantir que pegamos todos os dados do usuário;

- TakingMedicine -> Intenção que cuida do fluxo de ingestão de medicamentos presente no design;

- Welcome -> Cumprimenta o usuário e mostra algumas das possibilidades de ações que ele pode ter;

- Há outras intenções, mas elas não possuem grande expressões e por isso não estão sendo detalhadas.

## Como funciona o bot

Quando ele recebe uma mensagem, o Dialogflow atribui a uma intenção e faz um requisição POST para o backend, que está hospedado na heroku. O backend pega essa requisição, trata fazendo todo o processamento necessário e devolve um json para o DialogFlow, que por sua vez extrai a mensagem a ser enviada ao usuário e a envia.


## Pastas e arquivos

O arquivo na raíz server.js conecta e incia o servidor, passando a requisição na rota "/coronavirus" para o roteador, que por sua vez extrai a intent e aciona a função necessária para a resposta. Cada função que trata as intenções estão no arquivo intents.js na pasta dialogflow/intents. Dentro da pasta dialogflow também temos a pasta responseModels, que possui o arquivo message.js, que a partir de uma string, formata ela para poder enviar para o Dialogflow, o arquivo eventTrigger.js que a partir de uma string, formata ela para o DialogFlow acionar uma outra intenção que não necessita de parametros, o arquivo cards, que formata um card (incompleto) além do arquivo context.js que devolve um payload de contexto com a session id e o nome do contexto corretos. Temos também na raíz a pasta dataBase/models que contém dois arquivos .js com os dados para os modelos no atlas, além da helpers, contendo randomIntFromInterval.js que tem uma função para gerar um número inteiro entre dois limites, usado para gerar respostas diferentes em algumas intenções e um outro arquivo que define o nome do contexto de output e extrai a session, retornando esses dois parâmetros. Por último, mas não menos importante, temos a pasta responses na raíz, que contem um arquivo .js com quase todas as strings de resposta para o usuário e a pasta Tasks, contendo os pdfs com as tarefas a serem realizadas.


## Integrações

O bot está integrado com o telegram.


## Execução do programa Remotamente/Canais de comunicação

É possível utilizar o telegram a partir do link: https://t.me/Corona_Assistant2022_Bot

Caso queira consumir o weebhook, ele está diponível no link: https://exercicio-3-sprint-5.herokuapp.com/coronavirus


## Execução localmente

-Se faz necessário ter instalado o Node.js e o ngrok
-> Passo a passo instalação Node.js: https://www.youtube.com/watch?v=Wras1X6rBrc
-> Página para a instalação do ngrok: https://ngrok.com/download

1. Abra o link: https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/tree/horiel-costa-3;

2. Selecione o botão verde "Code" e faça o download do arquivo ZIP;

3. Extraia os dados do arquivo zipado, o que irá gerar uma pasta chamada "sprint-5-dialogflow-horiel-costa-3";

4. Abra o prompt de comando nessa pasta. O vídeo: https://www.youtube.com/watch?v=NZKpDpHL5Bo mostra como navegar entre pastas e usar o prompt de comando;

5. Na pasta, realize o comando "npm install" para obter todas as dependências;

6. Após a instalação das dependencias, digite "npm start";

7. Vá para a página de instalação do ngrok e faça o download para o seu sistema operacional;

8. Após terminado o download, clique com o botão direito do mouse no arquivo que foi baixado e selecione a opção "Extrair aqui";

9. Volte para a página de instalação do ngrok e clique no "Sign up" que está disponível abaixo de onde foi feito o download;

10. Crie a sua conta e vá no menu "Your Authtoken" no canto superior esquerdo;

11. Copie o seu Authtoken e abra um novo prompt de comando navegando até a pasta onde se encontra o ngrok que baixamos e descompactamos;

12. Execute o comando "./ngrok authtoken" no prompt de comando, adicionando um espaço e o seu Authtoken. Como por exemplo: ./ngrok authtoken 22FBCMO3g4tr6EhDoHmabZziz3s_6yN8ZC4WBxvaBhZqyapGW;

13. Após o comando ter ocorrido com sucesso, escreva "./ngrok http 3000" no prompt de comando e dê um enter;

14. Aguarde um pouco e copie a url disponível na segunda aparição da palavra "Forwarding" até antes da seta("->");

15. Abra o coloque em seu navegador a seguinte url: dialogflow.cloud.google.com e faça o login com sua conta google;

16. Aceite os termos, clique em "Create Agent" no canto superior esquerdo, dê um nome para o seu agente, e defina a linguagem como pt-bt e o fuso horário no de sua preferência. Após isso, clique em "CREATE", logo ao lado do nome do agente;

17. Aguarde a criação do bot. Após isso, clique na engrenagem no canto superior esquerdo, vá no menu "Export and Import" e clique no botão "RESTORE FROM ZIP" e após isso no botão "SELECT FILE";

18. Selecione o arquivo "corona.bot.zip" e clique em "Abrir". Esse arquivo é um dos presentes na pasta "sprint-5-dialogflow-horiel-costa-2" do passo 3;

19. Após isso, digite "RESTORE" na caixa de texto indicada e aperte  botão "RESTORE" e depois em "DONE";

20. Aguarde o carregamento e aperte em "Fulfilment", opção do menu do lado esquerdo da tela;

21. Em "Webhook" substitua a url "https://exercicio-3-sprint-5.herokuapp.com/coronavirus" pela obtida no passo 14 e adicione no final dela "/coronavirus";

22. Abaixe a tela e clique no botão "Save";

23. Após isso, basta usar o bot no "Try it now", disponível no canto superior direito.