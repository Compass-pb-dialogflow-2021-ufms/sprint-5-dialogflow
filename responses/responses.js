const responses = 
{
    aboutMe: 'Esse bot surgiu como uma demanda gerada por um exercício a ser realizado durante a quinta sprint do meu programa de bolsas na Compass UOL. A ideia do exercício é um bot que consiga auxiliar o usuário caso ele tenha algum problema técnico, seja com o seu hardware ou software e caso necessário criar uma chamada de serviço. O nome do bot é Mr. Robot.\n\n' + 
    'Quem fez ele -> O desenvolvedor responsável por esse bot foi o Horiel Corrêa Costa. No momento que ele fez, ele era um aluno de segundo semestre de faculdade e sua experiência profissional se resumia a 2 meses de estágio. Esse foi o quinto bot que ele fez, portanto, tenha paciência com a Mr. Robot :)\n\nPosso te ajudar com mais alguma coisa?',


    fallback: 'Lamento, mas infelizmente não consegui compreender o que você disse. Poderia reformular a frase para mim, por gentileza?',


    getName: [(fullName) => {return `Só confirmando, seu nome completo é: ${fullName}, correto?`}],


    getServiceCallParameters: [(id) => {return `Seu chamado foi cadastrado com sucesso em nosso sistema e nossos técnicos já estão trabalhando para resolver seu problema! O número do código para acompanhamento das atualizações é "${id}". Posso te ajudar com mais alguma coisa?`},
    
    'Houve um erro em nosso sistema e não conseguimos fazer o cadastro do seu chamado, por favor, tente novamente em alguns instantes! Nesse meio tempo, posso te ajudar com mais alguma coisa?'],
    
    
    getStatus: [(id) => {return `Não há em nosso sistema nenhum registro do chamado ${id}, confirme o número de identificação do chamado e tente novamente.`},

    (id, fullName, problemDescription, status) => {
    return `------------------------ Chamado ${id} ------------------------` + 
    `\n\nNome do cliente: ${fullName}` + 
    `\n\nDescrição do problema: ${problemDescription}` + 
    `\n\nStatus do chamado: ${status}`},

    (id, email) => {return `O email ${email} é diferente do informado na criação do chamado ${id}, confirme os seus dados e tente novamente.`},

    'Houve um erro em nosso sistema e não conseguimos fazer a busca pelo seu chamado no sistema, por favor, tente novamente em alguns instantes! Nesse meio tempo, posso te ajudar com mais alguma coisa?'],


    goodbye: ['Ok, qualquer coisa é só mandar uma mensagem que terei o prazer de te ajudar novamente. A Vitor Torino Tec agradece o contato e espera que tenha tido uma boa experiência com o bot!',

    'A Vitor Torino Tec agradece o contato! Caso precise de mais alguma coisa, não exite em perguntar ao Mr. Robot.',

    'Agradecemos o contato, qualquer coisa é só mandar uma mensagem que adoraremos te ajudar.'],


    hardwareProblem: 'Antes de abrirmos um chamado, temos algumas recomendações de medidas que podem resolver seu problema:' + 
    '\n\n1. Verifique se todos os cabos estão conectados corretamente ou se há algum mal contato;' +
    '\n2. Tente remover todos os cabos e inseri-los novamente;' +
    '\n3. Desligue seu(s) dispositivo(s) e ligue novamente;' +
    '\n\nApós testar as medidas apresentadas, seu problema foi resolvido?',
    
    
    helpMenu: 'Olá, sou o Mr. Robot. Tenho duas funções principais, te auxiliar com o seu problema técnico, seja esse no hardware ou no software, criando até um chamado, caso necessário e te mostrar o status do seu chamado. \nPara conseguir utilizar essas funções, basta dizer qual problema técnico está enfrentando, como por exemplo "Não consigo acessar o meu Outlook", ou mesmo me perguntar o status de um chamado, tal como "Status do chamado 21", que irei te responder :)' + 
    '\n\nComo posso te ajudar?',


    secondTimeInFallback: 'Desculpe-me, mas infelizmente não consegui compreender. Deseja ver o menu de ajuda? Ele contêm informações que podem ser úteis, como um pequeno guia para utilizar as minhas funcionalidades.',


    welcome: ['Olá, seja bem vindo. Eu sou o Mr. Robot, assistente virtual da loja Vitor Torino Tec. Nossa loja é especialista em resolução de problemas envolvendo tecnologia, desde a parte de hardware quanto de software. Como posso te ajudar hoje?',

    'Olá, sou o Mr. Robot da Vitor Torino Tec, como posso te ajudar hoje?',

    'Oi, o que posso fazer por voce hoje?']


}
    
    



module.exports = responses