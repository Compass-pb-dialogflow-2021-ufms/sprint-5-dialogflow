## Diário de Bordo

No primeiro momento fiz uma estrutura básica para poder subir a aplicação, criei o agente no console do dialogflow e a integração do bot nos canais <a href="https://line.me/en/">LINE</a> e <a href="https://www.facebook.com/messenger/">Facebook Messenger</a>, e também a configuração do webhook.

Então comecei a tratar os fluxos de conversa para as intents que tratam da saudação, ajuda e encerramento, também a intent de fallback.

Antes de começar a tratar das funcionalidades do bot decidi ja estabelecer a conexão com o banco de dados e desenvolver os modelos e controladores para as entidades persistíveis.

Nessa parte pensei em desenvolver sub-menus para auxiliar no atendimento ao usuário, uma para hardware, um pra software e um para o própio usuário poder listar as chamadas abertas e atualizar informações de contato (telefone e email).

Feito toda essa preparação, comecei de fato a tratar do atendimento, para o hardware foi mais volumoso pois existia a necessidade de soluções paliativas, o atendimento de software por sua vez fiz uma abstração para que qualquer problema relacionado já fosse tratado em uma unica intent, que serve como pré abertura de chamado. Par facilitar o tendimento implementei de forma que o bot trate de um problema por vez, apesar de o atendimento de hardware permitir mais de um equipamento, aconselho fortemente a também utilizar o bot para um equipamento e problema por vez.

Por fim fiz o fluxo de abertura de chamados, inicialmente pensei em realizar um sistema de login para o usuário para que a plataforma não o limitasse, porem integrar o google assistance seria muito trabalhoso no momento e optiei por utilizar o ID do usuário do canal de comunição para criar um registro no banco. Esse registro tambem contém todos os dados cadastrais do usuário porém iniciamente o registro é criado com esses dados nulos. Fiz dessa forma para que o usuário não tenha que informar seus dados todas as vezes que for abrir um chamado, apenas na primeira vez e após isso seu registro ficaram salvo no banco.

Fiz o fluxo para a listagem de todos as chamadas criadas pelo usuário e retirei a opção de atualização de dados, pelo motivo de tempo disponível, sendo o único problema enfrentado durante o projeto, que infelizmente me fez abrir mão de uma funcionalidade bônus que tinha projetado no inicio do desenvolvimento.

Finalizando o desenvolvimento do projeto fiz a multiplas respostas para as intents de saudação, encerramento e fallback, e o tratamento de erro caso algum erro ocorra durante operações no banco de dados.

## Dificuldades e Apredizados

A principal dificuldade enfrentada foi o tempo, infelizmente esse fator me fez dar prioridade as funcionalidades já estabelicidas e obrigatórias, deixando de lado algumas ideias própias para entregar o MVP esperado com qualidade.

O tempo reduzido também dificultou na fase inicial, o que acabou em um erro meu de projeto e acabei tendo que desistir de uma funcionalidade, como foi mencionado no diário de bordo.

Como apredizado novo para esse projeto eu utilizei bastante a estrutura card, se mostrou bem enficiente para perguntas objetivas, sim ou não, e redirecionar o usuário sem dar muita chance ao erro. Porém sua limitação é que essa estrutura não funciona na versão Desktop do <a href="https://line.me/en/">LINE</a> e a estrutura card não se comportou de forma esperada no Telegram, por isso integrei ao <a href="https://www.facebook.com/messenger/">Facebook Messenger</a>.

## Tecnologias

- Express
    - Responsável por gerenciar as requisições da aplicação.
- Mongoose
    - Responsável pela comunicação entre o banco de dados.
- Dotenv
    - Responsável por gerenciar as variáveis de ambiente.
- Nodemon
    - Ferramenta utilizada para auxiliar na fase de desenvolvimento.

A documentação de todas as tecnologias utilizadas no desenvolvimento podem ser encontradas em <a href="https://www.npmjs.com">npmjs</a>

## Aplicação

Para realizar qualquer mudança de desenvolvimento será necessario ter o <a href="https://nodejs.org/en/">Node</a>. Então basta clonar o repositório e rodar o comando "npm install".

A aplicação segue uma abstração do padrão arquitetural MVC.

- Pacotes:
    - controllers:
        - Controladores responsáveis pela lógica de negócio e operações com as entidades persistiveis.
    - models:
        - Modelos das entidades persistiveis.
    - database:
        - Responsável pela configuração e comunicação com o banco de dados.
    - routes:
        - Responsável por gerênciar as rotas da aplicação.
    - util:
        - Pacote de utilitários, desempenha como uma biblioteca auxiliando no desenvolvimento.

## Bot

- Intents obrigatórias:
    - Default Welcome Intent: Realiza a saudação para o usuário, distinguindo a primeira conversa das demais.
    - Default Fallback Intent: Retorna pro usuário uma mensagem de erro e o induz a procurar pelo menu de atendimento.
    - Help Intent: Mostra ao usuário o menu de atendimento.
    - Farewell Intent: Se despede do usuário.

- Atendimento a Hardware:
    - Hardware Assistance Menu Intent: Mostra ao usuário o menu para problemas de hardware.
    - Powered Off Device Intent: Retorna ao usuário uma solução paliativa, após reconhecer o equipamento e confirma se o problema foi solucionado.
    - Broken Device Intent: Após reconhecer o equipamento redireciona o usuário para a abertura de chamada.

- Atendimento a Software:
    - Software Assistance Menu Intent: Mostra ao usuário o menu para problemas de software.
    - Software Assistance Intent: Após reconhecer o problema e o sistema, redireciona o usuário para a abertura de chamada.

- Abertura de chamada:
    - Service Request Intent: Após recolher a descrição do problema cria e persiste uma nova chamada para o usuário.
    - Set User Data Intent: Responsável por recolher os dados do usuário e atualizar no registro.

- Para o usuário:
    - User Menu Intent: Mostra ao usuário o menu de operações da conta.
    - List Services Request Intent: Lista para o usuário todas as suas chamadas abertas.

Um exempo de uma conversa com o bot é:

        - usuário: oi
        - bot: Bem-vindo de volta !
               Lembrando que caso precise de ajuda ou queira relembrar minhas opções de atendimento digite "Ajuda".
        - bot: Como posso te ajudar dessa vez ?
        - usuário: meu monitor não liga
        - bot: Para seu Monitor verifique se:

               1. A fonte de energia (tomada, régua, etc) está realmente passando corrente elétrica.
               2. Todos os cabos estão bem encaixados.

               Tente liga-lo novamente.
        - bot: O problema foi resolvido ?
                -----   -----
               | Sim | | Não |
                -----   -----
        - usuário: Sim, problema resolvido.
        - bot: Sempre que precisar estarei aqui para te atender.

               Até logo e obrigado por escolher nossos serviços.

Integração:

- <a href="https://line.me/en/">LINE</a>
    - Para adicionar o bot você deverá ir em Adicionar amigos -> Pesquisar e procurar pelo ID @076yfppk.
- <a href="https://www.facebook.com/messenger/">Facebook Messenger</a>
    - Para ter acesso ao bot basta acessar este <a href="https://www.facebook.com/Suporte-N1-105342138698009/">link</a> e cliclar no botão "Enviar mensagem". 