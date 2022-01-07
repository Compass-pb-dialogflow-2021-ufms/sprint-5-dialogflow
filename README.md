# Avaliação 5 - Programa de Bolsas Compass.uol e UFMS

## Diário de bordo
Comecei o projeto olhando o design e como seria a minha logica ao realizar todo o fluxo, iniciei pela as sequencias mais faceis(Welcome, Contágio e Prevenção) onde contágio e prevenção possuem o mesmo raciocinio e são semelhantes em desenvolvimento, e Welcome que foi bem tranquilo pois agora é algo bem comum. A parte incompleta e provavelmente a mais dificil para mim foi a de pré-diagnostico que o começo foi-se razoavel mas na metade tomei uma decisão de projeto horrivel. Eu possuia dois pensamentos na cabeça quando cheguei na metade do desenvolvimento, poderia fazer o pre-diagnostico e ir salvando algumas variaveis no banco que fosse criando para saber quais sintomas e/ou qual grupo o usuario pertence para dar o diagnostico no final mas não sabia se do jeito que iria fazer poderia funcionar e estava com pouco tempo. Então pensei na maneira que está implementada que devolve alguns diagnosticos mas não todos que é um unica intent que se cria varios ramos e fluxos de sim e não para no final de determinado fluxo dar-se o diagnostico correto, é uma maneira muito bagunçada e muito incorreta ou apenas executei de maneira errada. Entretanto chegando muito fundo no fluxo de sim ou não, a ferramenta possui um limite de caracters de nome de intents e contextos possivel, no caso o maximo é 5 de contexto, o que me limitou e me fez criar a intent g que não está nada interpretativa. Nessa mesma intent passei tambem por algo muito estranho, por mais que o nome da intent e sua resposta estejam no codigo, qualquer acesso a ela dava timeout, assim sendo tive que colocar a resposta no console para poder avançar e mandar o diagnostico(desculpa vitor, menti pra você 😔).

## Principais Intents
- Contagio: Intent que informa formas de contágio e o tempo de incubação do vírus.
- Prevenção: cuidados básicos e cuidados voltados para os profissionais de saúde.
- Encerramento: Intent que encerra a conversa com o usuario.
- Pré-diagnostico - grupo de risco: Intent que começa o fluxo principal de pre-diagnostico e entrega 4/16 feedbacks de diagnostico
- Pré-diagnostico - sintomas leves: Intent não terminada que leva o usuario ao fim do fluxo mas sem diagnostico.

## Entrega
Para iniciar a aplicação, deve-se possuir o Node.JS na maquina.

1- Na pasta do projeto, abra o terminal e digite npm install para instalar todas as dependencias.

2- Após instalar, digite npm start para iniciar a aplicação.

3- Caso possua o ngrok(https://ngrok.com/download), abra e digite ngrok http 3000, e logo após apareça o link https de onde está hospedado a aplicação.

4- Logo após extraia o zip e importe o bot para o dialogflow na aba de configurações e Export and Import.

5- O bot já deve estar online, copiei e cole o link https feito no ngrok na aba Fulfillment no dialogflow.

6- Pronto, o bot já deve estar pronto para uso!

## Rota e Link do Bot
<li>Link do bot no telegram: t.me/compasscorona_bot
<li>Link da api no glitch: https://delirious-lead-catshark.glitch.me/botcorona 