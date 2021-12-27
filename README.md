# Avaliação 5 - Programa de Bolsas Compass.uol e UFMS

## Diário de bordo
Basicamente, iniciei o fluxo pensando como o usuario iria conversar com o bot. Fui criar as intents obrigatórias, e depois ver como a api funciona, notei que ela retorna seus dados em xml e fui procurar algum pacote para converter xml para json então achei o xml-js que é muito bom e faz uma otima conversão para json, depois falta apenas parsear o json e estamos mostrando os dados para o usuario. A logica para pegar a maxima e minima de cada municipio segue a linha de que passerei o id e depois com o id faço o request e ele me devolve todas as previsões. Então pego o id, que em alguns casos onde o resultado é unico fiz um tratamento para ele pegar apenas o id sem ele estar em alguma posição do array, e logo após passo o id na rota de previsão de 7 dias e depois é apenas fazer a formatação do texto com os 7 dias e suas maximas e minimas. No final de tudo implementei a Despedida com uma bela mensagem e adicionei o telegram no dialogflow.

## Entrega
Para iniciar a aplicação, deve-se possuir o Node.JS na maquina.

1- Na pasta do projeto, abra o terminal e digite npm install para instalar todas as dependencias.

2- Após instalar, digite npm start para iniciar a aplicação.

3- Caso possua o ngrok(https://ngrok.com/download), abra e digite ngrok http 3000, e logo após apareça o link https de onde está hospedado a aplicação.

4- Logo após extraia o zip e importe o bot para o dialogflow na aba de configurações e Export and Import.

5- O bot já deve estar online, copiei e cole o link https feito no ngrok na aba Fulfillment no dialogflow.

6- Pronto, o bot já deve estar pronto para uso!

## Rota e Link do Bot
<li>Link do bot no telegram: t.me/botzindotempo_bot
<li>Link da api no glitch: https://tempobotzin.glitch.me/tempobot