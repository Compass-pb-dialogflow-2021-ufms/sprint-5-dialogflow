const functions = require("../functions")
/**
 * Intent class Params:
 * 
 * @param {Object} uid Contains user found in DB, else is empty
 * @param {string} userId user passed by platform payload or dialogflow session
 * @param {string} nickname nickname if set, else empty
 * @param {Object} queryResult req.body's parameters from DialogFlow's request
 * 
 */
 class Intent {

    constructor(options) {
        this.uid = options.uid
        this.userId = options.userId
        this.nickname = options.nickname
        this.queryResult = options.queryResult
    }

    welcome() {
        switch (functions.randomizeBinary()) {
            case 0:
                if((this.uid.userId === this.userId) || (this.uid.session === this.userId))
                    return `Olá! Que bom ver você novamente${this.nickname}! Vou te ajudar com seus problemas técnicos hoje.\n\n`+
                    `Você está tendo um problema de hardware ou software? Se não souber, digite ajuda que te já te auxilio.`
                else
                    return `Olá! Sou o assistente que irá te ajudar com seus problemas técnicos! É um prazer te conhecer!\n`+
                    `Se quiser que eu te chame de algum jeito específico, pode pedir!\n\n`+
                    `Você está tendo um problema de hardware ou software? Caso não saiba, digite ajuda que te auxilio com o tipo de problema já.`
        
            case 1:
                if((this.uid.userId === this.userId) || (this.uid.session === this.userId))
                    return `Oi! Seja bem vindo de volta${this.nickname}! Sou o assistente que irá te ajudar com seus problemas técnicos!\n\n`+
                    `Você está tendo um problema de hardware ou software? Caso não saiba, digite ajuda que te auxilio com o tipo de problema já.`
                else
                    return `Oi! É um prazer lhe conhecer! Vou te ajudar com seus problemas técnicos hoje.\n\n`+
                    `Se quiser que eu te chame de algum apelido especial, basta pedir!\n\n`+
                    `Você está tendo um problema de hardware ou software? Se não souber, digite ajuda que te já te auxilio.`
        }
    }
    
    goodbye() {
        const responses = [
        `Estou aqui sempre que precisar! Até mais${this.nickname}!`,     //Trying array approach for responses, index needs to be Math.floor((Math.random() * responses.length) + 1) when > 2
        `Foi um prazer lhe ajudar hoje${this.nickname}.`,                //It is much more scalable, but less readable. Refactor this
        `Até mais! Qualquer coisa, é só me mandar um oi${this.nickname}!`,
        `Até${this.nickname}! Contente em lhe ajudar!`
        ]
        return responses[functions.randomize(responses)]
    }

    fallback() {
        const responses = [
            "Não consegui compreender o que você disse. Se estiver precisando, pode me pedir ajuda.",
            "Desculpe, não entendi o que você quis dizer. Se precisar, basta me pedir ajuda.",
            `Perdão${this.nickname}, mas não consegui compreender. Pode pedir ajuda, se precisar.`,
            `Lamento, mas não entendi. Precisando, pode me pedir que te ajudo${this.nickname}.`
            ]
            return responses[functions.randomize(responses)]
    }

    help() {
        return `Entendi! Vamos lá${this.nickname}! Sou um assistente para suporte básico sobre computadores, seja software ou hardware!\n`+
        `Problemas de software são os problemas com programas do seu computador, como antivirus ou seu navegador. Já problemas de harware são problemas físicos `+
        `com seu computador. Barulhos, problema para ligar ou desligar, e até peças quebradas são problemas de hardware!\n`+ 
        `Ofereço diversas respostas para problemas como, "Meu computador não está ligando" ou "Meu mouse não está funcionando".\n`+
        `Caso eu não consiga resolver seu problema de imediato, crio um chamado com nosso suporte N2, e assim que possível eles lhe auxiliarão!\n\n`+
        `Mas vamos lá, me diz então, seu problema é com software ou hardware?`
    }

    nicknameStart() {
        const responses = [
            `Certo, e como quer que eu te chame?`,
            `Tudo bem, como posso te chamar?`,
            `Sem problemas, como deseja ser chamado?`
            ]
            return responses[functions.randomize(responses)]
    }

    nicknameNext() {
        if(this.nickname !== '')
            return `Você já tem um nome cadastrado${this.nickname}!`
        else {
            const responses = [
                `Tudo bem! Agora te chamarei de ${this.queryResult.parameters["given-name"]}`,
                `Certo, te chamarei de ${this.queryResult.parameters["given-name"]} a partir de agora!`,
                `Tá bem ${this.queryResult.parameters["given-name"]}! Agora lhe chamo assim!`
                ]
            return responses[functions.randomize(responses)]
        }
    }

    report() {
        const responses = [
            `Certo${this.nickname}! Enviamos seu relatório para equipe responsável, e retornaremos uma resposta em breve.`,
            `Enviamos tudo para equipe responsável, e assim que possivel te responderão${this.nickname}!`,
            `Pronto${this.nickname}. Agora, basta aguardar resposta de nossa equipe, para resolvermos seu problema!`
            ]
            return responses[functions.randomize(responses)]
    }

    reportFallback() {
        const responses = [
            `Ops${this.nickname}. Parece que não foi possível gerar um relatório nesse momento. Tente novamente mais tarde.`,
            `Desculpe${this.nickname}, mas não conseguirei enviar um relatório agora. Tente mais tarde.`,
            `Estou com algum problema, e não estou conseguindo gerar relatórios no momento. Tente de novo depois, por favor${this.nickname}.`
            ]
            return responses[functions.randomize(responses)]
    }

    diagnose() {
        const responses = [
            `Você está tendo um problema de ${this.queryResult.parameters.type}, certo?`,
            `Seu problema é de ${this.queryResult.parameters.type}, isso?`,
            `Problema de ${this.queryResult.parameters.type}, está certo?`
            ]
            return responses[functions.randomize(responses)]
    }

    diagnoseFallback() {
        const responses = [
            `Desculpe, não entendi. Caso o tipo de problema que está tendo tenha sido identificado corretamente, responda 'sim'.`,
            `Não estou entendendo. Se seu problema foi identificado certo, responda que 'sim'.`
            ]
            return responses[functions.randomize(responses)]
    }

    diagnoseConfirmation() {
        return `${this.queryResult.outputContexts[0].parameters.type}Diagnose`
    }

    diagnoseConfirmationFallback() {
        return 'Ops, parece que estou com algum problema no momento, tente novamente mais tarde!'
    }

    diagnoseHardware() {
        switch (this.queryResult.parameters.hardwareProblem[0]) {
            case "boot":
                return `Seu ${this.queryResult.parameters.hardwareType} não está ligando?\n\n`+
                `1- Verifique se os cabos estão bem conectados, principalmente os cabos que vão na tomada, em ambas pontas\n`+
                `2- Cheque o cabo de conexão entre seu monitor e o computador, e verifique que o monitor está ligado.\n`+
                `3- Confira se seu teclado está funcionando e bem conectado, caso não esteja seu computador não iniciará.\n`+
                `Após seguir esses passos, seu problema foi resolvido?`
    
            case "noise":
                return `Seu ${this.queryResult.parameters.hardwareType} está fazendo barulhos estranhos?\n\n`+
                `1- Verifique se os não há nada solto aparente dentro do gabinete, como uma das ventoinhas.\n`+
                `2- Caso seu computador esteja fazendo sons similares à 'bips' quando está iniciando, verifique o site do fabricante de sua placa mãe para mais informações.\n`+
                `3- Se estiver escutando sons que lembram marimbondos, pode ser que o cooler esteja sujo, ou algum fio esteja em seu caminho. Com cuidado, limpe o cooler e remova fios, caso necessário.\n`+
                `Após seguir esses passos, seu problema foi resolvido?`
    
            case "blinking":
                return `Seu ${this.queryResult.parameters.hardwareType} não está acendendo?\n\n`+
                `Verifique conexões dos cabos do dispositivo. Caso o dispositivo também esteja desligado, verifique também a conexão com energia\n`+
                `Após seguir esses passos, seu problema foi resolvido?`
    
            case "spinning":
                return `Seu ${this.queryResult.parameters.hardwareType} não está rodando?\n\n`+
                `1- Confira se não há sujeira obstruindo o funcionamento do dispositivo.\n`+
                `2- Verifique se o dispositivo está conectado corretamente na entrada apropriada.\n`+
                `Após seguir esses passos, seu problema foi resolvido?`
    
            default: //'broken' or others
                return "callReport"
        }
    }
}

//EXPORTS-------

module.exports = {
    Intent
}
