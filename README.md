
# Exercício 2 da quarta sprint

Um bot que auxilia o usuário na obtenção da previsão do tempo para municípios brasileiros, sendo o nome do bot Maju. O bot consegue obter os dados dos próximos 4 dias da previsão do tempo para todos os municípios brasileiros, saudar, se despedir e tratar frases que ele não entende.


## Diário de bordo

O desenvolvimento ocorreu de forma satisfatória no geral. Consegui resolver os problemas que tive em relação a API escolhida, que no caso foi o do IBGE, que eram o de pegar o IBGECODE (consumi outra API para isso). Mesmo funcionando, não gostei muito de como pego os dados, pois a API para pegar os códigos do IBGE falha em casos específicos, como a cidade de São Paulo e a de Costa Rica. Dessa forma, é possível afirmar com certeza que outros municípios também devem falhar, mas para descobrir, teria que ir de um em um. Independentemente disso, ela funciona na maioria esmagadora dos casos.

Uma solução que eu tinha pensado era pegar todos os ids dos municípios e guardar em um banco, dividindo por letras para a consulta ficar mais rápida. Eu faria isso através de um script pegando os dados da API do IBGE, o que seria interessante até para garantir que os dados estão atualizados e corretos, mas como nunca fiz isso anteriormente, preferi não arriscar a entrega.
Outra coisa que me incomodou foi a entidade para pegar a cidade no dialogflow. O sys.city não pega todas as cidades, e o sys.location ás vezes dá match com umas cidades muito nada a ver, o que faz o backend trabalhar sem necessidade. Não considero um problema isso, mas é algo que quero deixar comentado.

Acabei usando o fetch e o axios para fazer requisições externas, pois o axios não se dá bem com acentuação gráfica. Para a próxima entrega pretendo usar só o fetch, ele só não foi usado totalmente aqui por esse ser o primeiro contato com esse pacote, dessa forma preferi por usar somente onde era necessário.

O uso da API do IBGE se deu pelo fato da sugerida ter caído durante o desenvolvimento. Não consegui achar uma API que pegasse os 7 dias sem ser paga. Dessa forma a do IBGE pareceu interessante por pegar 4 dias a frente, além de possuir resumos sobre o que acontecerá, o que achei bem interessante.


## Intenções

- Fallback Intent -> Por ser um bot com poucas funcionalidades, optei por deixar um fallback único, que informa quando não compreendeu algo e pede para o usuário repetir;

- GetIbgeData -> Recebe o id do município da intenção GetWeatherForecast e acessa a API do Ibge, consumindo os dados de lá, formatando para que fique legível ao usuário e retornando a previsão para ele;

- GetWeatherForecast -> Extrai o nome do município digitado pelo usuário, busca pelo IBGECODE em uma api e aciona a intenção GetIbgeData, passando esse Id para ela;

- SecondTimeInFallback -> Caso o usuário envie duas vezes seguidas algo que o bot não compreendeu, Essa intenção é acionada e pergunta se ele deseja ver o menu de ajuda;

- Goodbye -> Intenção que se despede do usuário e marca um fim de conversa;

- Help -> Uma intenção que busca elucidar melhor como o usuário pode utilizar o bot ao seu favor, com alguns exemplos para elucidar as funcionalidades;

- KnowAboutMe -> Quando essa intenção é acionada, ela fala qual foi o propósito do bot e fala um pouco sobre o desenvolvedor responsável;

- Welcome -> Cumprimenta o usuário e mostra algumas das possibilidades de ações que ele pode ter;

- Há outras intenções, mas elas não possuem grande expressão, pois são de confirmação e negação dentro do contexto.

## Como funciona o bot

Quando ele recebe uma mensagem, o Dialogflow atribui a uma intenção e faz um requisição POST para o backend, que está hospedado na heroku. O backend pega essa requisição, trata fazendo todo o processamento necessário e devolve um json para o DialogFlow, que por sua vez extrai a mensagem a ser enviada ao usuário e a envia.


## Pastas e arquivos

O arquivo na raíz server.js conecta e incia o servidor, passando a requisição na rota /previsao4dias para o roteador, que por sua vez extrai a intent e aciona a função necessária para a resposta. Cada função que trata as intenções estão na pasta dialogflow/intencoes. Dentro da pasta dialogflow também temos a pasta responseModels, que possui o arquivo message.js, que a partir de uma string, formata ela para poder enviar para o Dialogflow, o arquivo eventTrigger.js que a partir de uma string, formata ela para o DialogFlow acionar uma outra intenção que não necessita de parametros, além do arquivo eventGetIbgeDataTrigger.js que aciona a intenção GetIbgeData passando os parametros necessários.


## Integrações

O bot está integrado com o telegram e com o line.


## Execução do programa Remotamente/Canais de comunicação

É possível utilizar o telegram a partir do link: https://t.me/previsao_tempo_bot

No line basta procurar o bot pelo id: @308jcvni e iniciar a conversa.

Caso queira consumir o weebhook, ele está diponível no link: https://exercicio-1-sprint-5.herokuapp.com/previsao4dias


## Execução localmente

-Se faz necessário ter instalado o Node.js e o ngrok
-> Passo a passo instalação Node.js: https://www.youtube.com/watch?v=Wras1X6rBrc
-> Página para a instalação do ngrok: https://ngrok.com/download

1. Abra o link: https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-5-dialogflow/tree/horiel-costa-1

2. Selecione o botão verde "Code" e faça o download do arquivo ZIP

3. Extraia os dados do arquivo zipado, o que irá gerar uma pasta chamada "sprint-5-dialogflow-horiel-costa-1"

4. Abra o prompt de comando nessa pasta. O vídeo: https://www.youtube.com/watch?v=NZKpDpHL5Bo mostra como navegar entre pastas e usar o prompt de comando

5. Na pasta, realize o comando "npm install" para obter todas as dependências

6. Após a instalação das dependencias, digite "npm start"

7. Vá para a página de instalação do ngrok e faça o download para o seu sistema operacional

8. Após terminado o download, clique com o botão direito do mouse no arquivo que foi baixado e selecione a opção "Extrair aqui"

9. Volte para a página de instalação do ngrok e clique no "Sign up" que está disponível abaixo de onde foi feito o download.

10. Crie a sua conta e vá no menu "Your Authtoken" no canto superior esquerdo

11. Copie o seu Authtoken e abra um novo prompt de comando navegando até a pasta onde se encontra o ngrok que baixamos e descompactamos

12. Execute o comando "./ngrok authtoken" no prompt de comando, adicionando um espaço e o seu Authtoken. Como por exemplo: ./ngrok authtoken 22FBCMO3g4tr6EhDoHmabZziz3s_6yN8ZC4WBxvaBhZqyapGW

13. Após o comando ter ocorrido com sucesso, escreva "./ngrok http 3000" no prompt de comando e dê um enter

14. Aguarde um pouco e copie a url disponível na segunda aparição da palavra "Forwarding" até antes da seta("->")

15. Abra o coloque em seu navegador a seguinte url: dialogflow.cloud.google.com e faça o login com sua conta google

16. Aceite os termos, clique em "Create Agent" no canto superior esquerdo, dê um nome para o seu agente, e defina a linguagem como pt-bt e o fuso horário no de sua preferência. Após isso, clique em "CREATE", logo ao lado do nome do agente.

17. Aguarde a criação do bot. Após isso, clique na engrenagem no canto superior esquerdo, vá no menu "Export and Import" e clique no botão "RESTORE FROM ZIP" e após isso no botão "SELECT FILE"

18. Selecione o arquivo "Maju.bot.zip" e clique em "Abrir". Esse arquivo é um dos presentes na pasta "sprint-5-dialogflow-horiel-costa-1" do passo 3.

19. Após isso, digite "RESTORE" na caixa de texto indicada e aperte  botão "RESTORE" e depois em "DONE"

20. Aguarde o carregamento e aperte em "Fulfilment", opção do menu do lado esquerdo da tela

21. Em "Webhook" substitua a url "https://exercicio-1-sprint-5.herokuapp.com/previsao4dias" pela obtida no passo 14 e adicione no final dela "/previsao4dias"

22. Abaixe a tela e clique no botão "Save".

23. Após isso, basta usar o bot no "Try it now", disponível no canto superior direito

## Observações 

- Vitor, por favor, não faça muitas requisições. Acabei criando uma chave de acesso para a API de coletar os dados do IBGE, pois o antigo limite dela era muito pequeno (1 per second, apesar que parecia ser bem menor que isso). Essa chave de acesso não necessitou do cartão de crédito, mas ele meio que está gerando uma dívida lá kkk. Espero que não de chabu.

- Aconteceu comigo dá API não achar o nome de um município e depois eu enviar ele novamente e ela achar.