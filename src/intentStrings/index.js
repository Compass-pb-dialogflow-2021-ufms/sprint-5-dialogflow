const functions = require("../functions")
/**
 * Intent class Params:
 * 
 * @param {Bool} returningUser True if user has used the bot before
 * @param {string} nickname nickname if set, else empty
 * @param {Object} queryResult req.body's parameters from DialogFlow's request
 * 
 */
 class Intent {

    constructor(options) {
        this.returningUser = options.returningUser
        this.nickname = options.nickname
        this.queryResult = options.queryResult
    }

    welcome() {
        if(this.returningUser) {
            const responses = [
                `Olá! Que bom ver você novamente${this.nickname}!\n\n`+
                `Como posso lhe ajudar hoje? Se estiver com dificuldade, digite ajuda que te já te auxilio.`,
                
                `Oi! Seja bem vindo de volta${this.nickname}!\n\n`+
                `Como posso lhe ajudar hoje? Se precisar de ajuda em como usar o bot, basta pedir ajuda!`
            ]
            return responses[functions.randomize(responses)]
        } else {
            const responses = [
                `Olá! Sou o assistente que irá te auxiliar! É um prazer te conhecer!\n`+
                `E se quiser que eu te chame de algum jeito específico, pode pedir!\n\n`+
                `Como posso lhe ajudar hoje? Se precisar de ajuda em como usar o bot, basta pedir ajuda!`,

                `Oi! É um prazer lhe conhecer! Vou te ajudar a saber mais sobre o SARS-CoV-2!.\n\n`+
                `Se quiser que eu te chame de algum apelido especial, basta pedir!\n\n`+
                `Como posso lhe ajudar hoje? Se estiver com dificuldade, digite ajuda que te já te auxilio.`
            ]
            return responses[functions.randomize(responses)]
        }
    }
    
    goodbye() {
        const responses = [
        `Estou aqui sempre que precisar! Até mais${this.nickname}!`,
        `Foi um prazer lhe ajudar hoje${this.nickname}.`,
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
        return `Entendi! Vamos lá${this.nickname}! Estou aqui para lhe informar sobre o SARS-CoV-2!\n`
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
            return `Certo, atualizei seu apelido para ${functions.formatNickname(this.queryResult.parameters.person.name)}!`
        else {
            const responses = [
                `Tudo bem! Agora te chamarei de ${functions.formatNickname(this.queryResult.parameters.person.name)}`,
                `Certo, te chamarei de ${functions.formatNickname(this.queryResult.parameters.person.name)} a partir de agora!`,
                `Tá bem ${functions.formatNickname(this.queryResult.parameters.person.name)}! Agora lhe chamarei assim!`
                ]
            return responses[functions.randomize(responses)]
        }
    }
}

//EXPORTS-------

module.exports = {
    Intent
}
