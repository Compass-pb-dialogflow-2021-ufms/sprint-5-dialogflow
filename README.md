### Desenvolvimento
O projeto não está completo, tomando o design apresentado como referência, está faltando muitas condições e funcionalidades. Somente alguns fluxos de conversa que estão funcionando da maneira esperada, outros fluxos que deveriam possuir uma fallback próprio também não foram implementados. O fluxo de pré-diagnóstico é o que está mais incompleto, ele apenas funciona caso o usuário responda sim em todos os casos e no final não apresenta o resultado do diagnóstico.

A maior dificuldade do projeto foi devido o tamanho do chatbot, pois são vários fluxos com muitas condições, não consegui desenvolver uma forma prática de navegar pelo fluxo, ou seja, criei várias intents de followup para responder às questões de sim e não o que imagino que não seja a melhor forma de desenvolver o chatbot, mas atribuindo contextos corretamente o fluxo acabou funcionando da maneira esperada. 

O bot consegue identificar se usuário já tenha se comunicado com o bot, também implementei o reset dessa condição quando o bot se despede do usuário (quando a intent de encerramento é ativada uma chamada no banco para remover o id do usuário).

O bot foi integrado no Line @355ugvex

Projeto foi hosteado no heroku https://sars-cov-2-chatbot.herokuapp.com/

### Tecnologias
- nodejs
 - express
 - actions-on-google
 - dotenv
 - ngrok
- heroku



###### Observação
No tempo previsto para o desenvolvimento do projeto houveram alguns impedimentos pessoais, imagino que conseguiria desenvolver um melhor projeto caso tivesse mais tempo
