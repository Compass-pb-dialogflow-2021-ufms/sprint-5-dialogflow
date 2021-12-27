### Desenvolvimento
    A maior dificuldade no desenvolvimento foi a escolha de uma api de previsão de tempo,  a maioria dessas APIs possuem no plano gratuito limite de uso. Encontrei uma disponível em https://visualcrossing.com/weather-api que mesmo com limite de requisições decidi usá-la, pois são até 1000 requisições por dia. Outro ponto que perdi tempo foi na documentação dessa api, demorei para encontrar a requisição que trazia as informações corretas, mas também consegui resolver estudando a documentação, a requisição disponivel em https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cidade?unitGroup=metric&key=Chave_da_API&contentType=json, (Para conseguir a chave da api é necessário criar um login no site da api).

    A aplicação foi hosteada no heroku disponivel em https://weather-forecast-chatbot.herokuapp.com/

    A aplicação foi integrada com Line, id do bot @035hqfjs

### Tecnologias
- nodejs
 - express
 - actions-on-google
 - date-fns
 - node-fetch
 - dotenv
- Heroku


### Intents
Todas intents obrigatórias foram implementadas junto com as intents:
```
Ajuda -> Caso o usuário queira saber o que o chatbot faz
ConsultarPrevisao -> responsável em identificar quando o usuário solicita a previsão para determinada cidade e retorna as informações
```