# Avaliação 5 - Programa de Bolsas Compass.uol e UFMS

## Diário de bordo
Basicamente iniciei pensando no fluxo proposto e como o usuario poderia iniciar o contexto, logo após fui começando a criar o projeto e as intents no dialogflow, criei as obrigatorias(Saudação, Ajuda e Encerramento), algumas frases foram treinadas e após foi criar elas foi criar as adicionais como Chamado, Hardware, Software e Ultimos Chamados. Chamado pode-se criar um chamado apenas digitando chamado/não resolveu e/outras frase ou indo pelo o contexto de sim do fluxo de hardware; Hardware e Software são bem semelhantes pois ao usuario passar problemas que estão nas Entities, na mensagem eu retorno uma frase especifica de suporte para cada caso. E Ultimos Chamados que apenas lista o ultimo chamado feito para que a pessoa possa acompanhar o que foi criado. Nos ultimos dias da sprint, foi-se tentado aplicar o feedback passado pelo o Vitor então muito no codigo está modularizado menos uma função que é a do instagramUser que volta a mensagem personalizada e não foi dada-se um tempo necessario a ela.

## Intents
- Ajuda: Apenas uma mensagem que auxilia o usuario, sobre o que ele pode realizar com o bot.
- Chamado: Intenção que cria um chamado, e o usuario passa suas informação e manda para o banco.
- Encerramento: Uma mensagem de despedida para o usuario.
- Hardware: Intenção no qual se passa um problema de Hardware e volta uma mensagem especifica para cada caso sobre o suporte para aquele problema.
- Software: Intenção no qual se passa um problema de Software e volta uma mensagem especifica para cada caso sobre o suporte para aquele problema.
- Ultimos Chamados: Intenção que mostra o ultimo chamado criado no banco.
- Hardware - yes: Intenção que vem do Sim dentro do followup de hardware que cria um chamado e adiciona no banco.

## Entrega
Para iniciar a aplicação, deve-se possuir o Node.JS na maquina.

1- Na pasta do projeto, abra o terminal e digite npm install para instalar todas as dependencias.

2- Após instalar, digite npm start para iniciar a aplicação.

3- Caso possua o ngrok(https://ngrok.com/download), abra e digite ngrok http 3000, e logo após apareça o link https de onde está hospedado a aplicação.

4- Logo após extraia o zip e importe o bot para o dialogflow na aba de configurações e Export and Import.

5- O bot já deve estar online, copiei e cole o link https feito no ngrok na aba Fulfillment no dialogflow.

6- Pronto, o bot já deve estar pronto para uso!

## Rota e Link do Bot
<li>Link do bot no telegram: t.me/suporten1_bot
<li>Link da api no glitch: https://suporten1bot.glitch.me/botsuporte 
<li>Link do bot no line: https://line.me/R/ti/p/%40030hcyfd