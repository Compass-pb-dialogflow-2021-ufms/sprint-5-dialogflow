## Diário de Bordo

O começo do projeto comecei como de costume, preparei as intents no console do Dialogflow, fiz o código báse para subir a aplicação e o fluxo de conversa da intents obrigatórias que não envolviam chamada de api. Também já foi feito a integração do chatbot ao <a href="https://line.me/en/">LINE</a>.

Na tentativa de estabelecer a comunicação com a API sugerida acabei me deparando com o primeiro problema, a API estava fora do ar.
Acabei então por procurar uma outra e optei por utilizar a <a href="https://www.weatherbit.io">weatherbit</a> que me trouxe apenas 2 limitações:
    
- Limite de 500 chamadas diárias.
- A API não informa o horário da coleta de dados, o que me impossibilitou contemplar o último tópico das regras de negócio.

Estabelecida a comunicação entre a a API, me foquei na previsão do tempo e tratamento de erros, o que ocorreu sem grandes problemas.

Também achei interessante criar nesse momento uma nova funcionalidade, verificar a temperatura atual de alguma cidade.

Após a fase de desenvolvimento eu também fiz a integração do bot no Dialogflow Messenger e no Telegram, porém neste último não pude testar o funcionamento por limitações da minha conta pessoal.

## Tecnologias

- Express
  - Responsável por gerenciar as requisições da aplicação.
- Axios
  - Responsável pela comunicação entre a <a href="https://www.weatherbit.io">API</a> de consulta.
- Nodemon
  - Ferramenta utilizada para auxilair na fase de desenvolvimento.
- Dotenv
  - Responsável por gerenciar as variáveis de ambiente.

A documentação de todas as tecnologias utilizadas no desenvolvimento podem ser encpntradas em <a href="https://www.npmjs.com">npmjs</a>

## Aplicação

Para realizar qualquer mudança de desenvolvimento será necessario ter Node. Então basta clonar o repositório e rodar o comando "npm install".

- Pacotes
  - API: Comunicação com a <a href="https://www.weatherbit.io">API</a> de consulta.
  - controllers: controlador da rota. Aonde a as regras de negócio foram desenvolvidadas.
  - routes: rota da aplicação.

## Bot

Intents:
- Default Welcome Intent
  - Mensagem de boas-vindas. Induz o usuário a entrar na Forecast Weather Intent.
- Default Fallback Intent
  - Caso o bot não entenda o que foi falado, seja por erro de digitação ou péla mensagem estar fora de escopo, será retornado uma mensagem de que isso não é um assunto tratado pelo bot.
- Farewell Intent
  - Caso o usuário se despeça-se do bot, é retornado uma mensagem de despedida.
- Forecast Weather Intent
  - O bot informará a previsão do tempo de 1 semana para cidade solicitada. Há uma variante em que se pode dar enfâse a previsão de um dia específico dentro desta 1 semana. Caso a cidade não seja no Brasil ou o data da previsão solicitada for fora desta 1 semana será retornado uma mensagem de erro ao usuário explicitando o problema encontrado.
- Current Temperature Intent
  - O bot retornará uma mensagem com temperatura atual da cidade informada, a memsagem é personalizada de a cordo com a temperatura atual (frio intenso, frio ameno, ameno, calor ameno e calor intenso). E de maneira semelhante que acontece na Forecast Weather Intent, caso a cidade não for entendia ou não estiver no Brasil será retornado uma mensagem de erro.

Um exemplo de uma conversa com o bot é:

        - usuário: oi
        - bot: Olá ! Sou seu metereologista pessoal.

               Posso dizer o clima de qualquer cidade do Brasil, quando precisar é só me chamar.
        - usuário: como Campo Grande vai estar amanhã ?
        - bot : A previsão do 2021-12-26 para a cidade de Campo Grande é de: Nuvens quebradas.
                Com máxima de: 25.1 ºC
                E mínima de: 20.4 ºC
                
                Lembrando que você também pode pedir a previsão de uma semana inteira.
                Além disso, posso ajudar em algo mais ?
        - usuário: não, obrigado
        - bot: Sempre que precisar é só me chamar.
               Até mais e lembre-se, se for sair leve um casaquinho.

Integração:
- <a href="https://line.me/en/">LINE</a>
  - Para adicionar o bot você deverá ir em Adicionar amigos -> Pesquisar e procurar pelo ID @248ozrhx
- <a href="https://telegram.org">Telegram</a> (Não Testado)
  - Para ter acesso ao bot basta acessar este <a href="http://t.me/prev_tem_bot">link</a>.
- Dialogflow Messenger
  - Para ter acesso ao bot em seu website devera implementar este agente.

        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>.
        <df-messenger
              intent="WELCOME"
              chat-title="sprint-5-dialogflow-1"
              agent-id="281cdb05-6672-4686-90e2-6316c05f3924"
              language-code="pt-br"
        ></df-messenger>