### Desenvolvimento
Uma das dificuldades deste projeto foi o desenvolvimento do fluxo do chatbot, no início foi desenvolvido um fluxo que somente funcionam para uma condição (problemas de hardware), o problema foi solucionado adicionando um contexto auxiliar para armazenar o hardware/software e o problema dele, colocando um output context com lifespan alto porém não adicionando esse output em nenhum input de intent. Uma outra dificuldade foi capturar a descrição do problema quando o usuário desejava criar uma chamada, uma solução que encontrei foi no momento de criar a chamada para o usuário eu somente coletava as demais informações (nome, cpf, email e telefone), já para o descrição eu utilizei dos dados capturados no início do fluxo o hardware/software e o problema.

O projeto foi integrado no Line: @849hhigy
Também foi integrado no Telegram : @assistenteTecnicoBot
Hosteado na heroku disponivel em https://assistente-suporte-bot.herokuapp.com/

### Tecnologias
- nodejs
  - express
  - mongoose
  - actions-on-google
  - dotenv
- Heroku


### Intenções
As intenções obrigatórias são necessárias para o funcionamento básico do bot, para o funcionamento esperado e com todas as funcionalidades necessárias foi preciso a inclusão de mais intenções, para capturar e identificar os problemas de hardware ou software do usuário, bem como criar e consultar chamadas ativas.
Intenções adicionadas:
```
ConsultarChamadas
CpfParaConsultarChamada
CriarChamada
Despedida
ProblemaHardware
ProblemaSoftware
SolucaoPaliativa
 - SolucaoPaliativaFollowupNao
    - SolucaoPaliativaNegarChamada
    - SolucaoPaliativaAceitaChamada
 - SolucaoPaliativaFollowupSim
```