
# Exercício 2 da quinta sprint

Um bot que auxilia o usuário na jornada de suporte nível N1 em uma loja de assistencia de hardware e software, sendo o nome do bot Mr. Robot. O bot consegue fazer chamados, consultar o status de chamados feitos, sugerir ações básicas para problemas em hardware, saudar, se despedir, mostrar um menu de ajuda, além de tratar frases que ele não entende.


## Diário de bordo

Fiquei satisfeito com a entrega que estou fazendo. Não tive problemas no desenvolvimento desse bot e tentei botar em prática o feedback que recebi do bot da sprint-4. A ideia que tive com esse bot era mais voltada ao público do que para os funcionários da empresa, por isso acabei alterando a ideia do bonus de listar todos os chamados ativos para pegar o status de um chamado específico.

A necessidade do email na intent de GetStatus se deu como uma ideia de "validação", para que o usuário tenha que saber pelo menos alguma informação do chamado que ele deseja ver. Não usei outros dados como cpf e telefone para que não fosse necessário ficar toda hora colocando dados pessoais mais importantes no chat.


## Intenções

- Fallback Intent -> Por ser um bot com poucas funcionalidades, optei por deixar um fallback único, que informa quando não compreendeu algo e pede para o usuário repetir;

- ChangeName -> Captura o novo nome digitado pelo usuário e acionando e enviando o nome para a intent de GetServiceCallParameters;

- GetName -> Captura o nome do usuário e pergunta se está correto. Há duas follow ups para essa intenção, caso a resposta seja positiva, essa follow up aciona a intent de GetServiceCallParameters e envia o nome junto, caso a resposta seja negativa, a intent de ChangeName é acionada;

- GetServiceCallParameters -> Intenção que captura os outros dados necessários para criar um chamado, além de criar o chamado nobanco de dados com os parametros coletados;

- GetStatus -> Intenção que coleta o id do chamado e o email informado na criação do chamado em questão. Retorna o status do chamado e possui algumas validações, como a existencia do chamado e a validação comentada no diário de bordo;

- Goodbye -> Intenção que se despede do usuário e marca um fim de conversa;

- Help -> Uma intenção que busca elucidar melhor como o usuário pode utilizar o bot ao seu favor, com alguns exemplos para elucidar as funcionalidades;

- KnowAboutMe -> Quando essa intenção é acionada, ela fala qual foi o propósito do bot e fala um pouco sobre o desenvolvedor responsável;

- SecondTimeInFallback -> Caso o usuário envie duas vezes seguidas algo que o bot não compreendeu, Essa intenção é acionada e pergunta se ele deseja ver o menu de ajuda;

- TellTheHardwareProblem -> Intenção busca na mensagem do usuário se há o radical do verbo quebrar, se houver, aciona a intenção GetName, caso contrário, solicita que o usuário realize algumas medidas, se elas se mostrarem efetivas, pergunta se pode ajudar com mais alguma coisa, caso não sejam, também aciona a intent GetName;

- TellTheSoftwareProblem -> Quando acionada, aciona a intenção de GetName;

- Welcome -> Cumprimenta o usuário e mostra algumas das possibilidades de ações que ele pode ter;

- Há outras intenções, mas elas não possuem grande expressão, pois são de confirmação e negação dentro do contexto.

## Como funciona o bot

Quando ele recebe uma mensagem, o Dialogflow atribui a uma intenção e faz um requisição POST para o backend, que está hospedado na heroku. O backend pega essa requisição, trata fazendo todo o processamento necessário e devolve um json para o DialogFlow, que por sua vez extrai a mensagem a ser enviada ao usuário e a envia.


## Pastas e arquivos

O arquivo na raíz server.js conecta e incia o servidor, passando a requisição na rota /assistencia para o roteador, que por sua vez extrai a intent e aciona a função necessária para a resposta. Cada função que trata as intenções estão na pasta dialogflow/intencoes. Dentro da pasta dialogflow também temos a pasta responseModels, que possui o arquivo message.js, que a partir de uma string, formata ela para poder enviar para o Dialogflow, o arquivo eventTrigger.js que a partir de uma string, formata ela para o DialogFlow acionar uma outra intenção que não necessita de parametros, além do arquivo eventGetServiceCallParametersTrigger.js que aciona a intenção GetServiceCallParameters passando os parametros necessários. Temos também na raíz a pasta dataBase/models que contém um arquivo .js com os dados para o modelo no atlas, além da auxiliaryFunctions, contendo randomIntFromInterval.js que tem uma função para gerar um número inteiro entre dois limites, usado para gerar respostas diferentes em algumas intenções e dois arquivos para deixar os dados (cpf e número de telefone) no formato mais formal e legível. 


## Integrações

O bot está integrado com o telegram e com o line.


## Execução do programa Remotamente/Canais de comunicação

É possível utilizar o telegram a partir do link: https://t.me/Tec_Suporte_Bot

No line basta procurar o bot pelo id: @788ydxmf e iniciar a conversa.

Caso queira consumir o weebhook, ele está diponível no link: https://exercicio-2-sprint-5.herokuapp.com/assistencia


## Execução localmente

-Se faz necessário ter instalado o Node.js e o ngrok
-> Passo a passo instalação Node.js: https://www.youtube.com/watch?v=Wras1X6rBrc
-> Página para a instalação do ngrok: https://ngrok.com/download

1. Abra o link: https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/tree/horiel-costa-1;

2. Selecione o botão verde "Code" e faça o download do arquivo ZIP;

3. Extraia os dados do arquivo zipado, o que irá gerar uma pasta chamada "sprint-5-dialogflow-horiel-costa-2";

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

18. Selecione o arquivo "Mr.Robot.zip" e clique em "Abrir". Esse arquivo é um dos presentes na pasta "sprint-5-dialogflow-horiel-costa-2" do passo 3;

19. Após isso, digite "RESTORE" na caixa de texto indicada e aperte  botão "RESTORE" e depois em "DONE";

20. Aguarde o carregamento e aperte em "Fulfilment", opção do menu do lado esquerdo da tela;

21. Em "Webhook" substitua a url "https://exercicio-2-sprint-5.herokuapp.com/assistencia" pela obtida no passo 14 e adicione no final dela "/assistencia";

22. Abaixe a tela e clique no botão "Save";

23. Após isso, basta usar o bot no "Try it now", disponível no canto superior direito.