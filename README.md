
# Avaliação Sprint 5 - Programa de Bolsas Compass.uol e UFMS

Segunda atividade da quinta sprint do programa de bolsas Compass.uol para formação em chatbot Dialogflow.


## Diário de bordo
Primeiramente estabeleci como seria a estrutura do projeto, definindo arquivos e pastas para aplicação. Eu defini a rota e configurei o Ngrok para conectar no Dialogflow. Em seguida, fiz um rascunho no papel do fluxo de conversa do chatbot. Notei que na especificação todos os problemas de software eram necessários abrir um chamado, o que faz sentido porque na maioria das empresas o privilégio dos usuários é bem limitado. Tendo isso em mente, eu trabalhei nas respostas do hardware. O usuário consegue conectar um cabo fora do lugar, mas muitas vezes não é permitida a instalação de um software. 
	Caso o usuário não tenha sucesso no seu problema o chatbot pede os seus dados para a abertura do chamado, nesse momento eu tentei implementar a parte bônus para coletar os dados e armazenar no banco, enfrentei dificuldade em retornar a informação para o usuário, os dados eram armazenados no bancos, entretanto, a resposta não era retornada a tempo o que fazia o tempo do dialogflow estourar e o bot não respondia nada. Optei por deixar o mockup. Estou contente com essa atividade, acredito que eu consegui abstrair de uma maneira melhor meu código e melhor minhas frases no console do dialogflow.


## Funcionamento e tecnologias

- A aplicação dá boas vindas para o usuário, e passa uma instrução básica sobre o funcionamento da ferramenta. Quando o usuário informa o problema, o chatbot responde com a identificação do problema ( software ou hardware) caso seja de hardware o fluxo da conversa busca solucionar o problema antes de um chamado ser aberto, caso o problema persista o chabot pede ao usuário suas informações pessoais (nome completo, telefone, e-mail, CPF e descrição do problema)  para a abertura do chamado. Quando é um erro de software o chatbot identifica e já pede ao usuário suas informações.
 
Primeiramente é necessário que o [Node.JS](https://nodejs.org/en/) e o [Ngrok](https://ngrok.com/) esteja instalado na máquina. 
  
  
  Clone este repositório e no mesmo diretório instale as depenêcias pelo terminal:

  ```
  npm install
  ```

  - MongoDB para armazenar os dados.
  - Express para tratar das rotas e do servidor
  - Nodemon auxlia na implementação
  
  Após a instalação dos pacotes, ainda no terminal, digite
  ```
  npm start 
  ```

  Após ter feito o passo anterior, abra o terminal na pasta onde se encontra o ngrok e digite
```
./ngrok http 3333
  ```
 Copie o segundo endereço "forwarding" gerado no webhook(ele inicia com https) dentro do fulfillmet do bot no DialogFlow.

## Integração

- Integrei o chatbot ao Dialogflow Messager e ao Line. 
Para executar pelo DialogFlow é necessário abrir o console do Dialogflow, clicar em Integrations( localizado na aba lateral) e na seara Text Basic clicar em Dialogflow Messenger, irá abrir uma janela na mesma página. Ao final desta janela clique no "Try it now" em azul no canto direito.

- Para executar pelo Line é necessário ter uma conta na aplicação e buscar pelo id: @019ixmjv (Para funcionar corretamente a aplicação deve estar rodando localmente com o Ngrok configurado na rota 3333)

- A aplicação foi hospedada no [Heroku](https://peaceful-cliffs-46263.herokuapp.com/). 

