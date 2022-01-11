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
        let firstResponse, subtitleResponse, secondResponse, responseArray = []
            if(this.returningUser) {
                firstResponse = [
                    `Olá! Que bom ver você novamente${this.nickname}!\n\n Sou um assistente para tirar as suas duvidas sobre o Corona-virus.`,
                    
                    `Oi! Seja bem vindo de volta${this.nickname}!\n\n Estou disponível para lhe ajudar com qualquer dúvida que tenha sobre o SARS-CoV-2.` ,

                    `Olá novamente${this.nickname}! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.️`
                ]
            } else {
                firstResponse = [
                    `Olá! Sou o assistente que irá te auxiliar! É um prazer te conhecer!\n`+
                    `Fui especialmente treinado para tirar todas suas dúvidas sobre o Corona-virus.\n\n`+
                    `Neste canal, você pode me perguntar sobre o contágio do vírus, pedir dicas de prevenção, ou fazer um pré-diagnóstico.\n`+
                    `Também conto com uma funcionalidade extra onde você pode cadastrar um apelido, caso queira!`,

                    `Oi! É um prazer lhe conhecer! Vou te ajudar a saber mais sobre o SARS-CoV-2!.\n\n`+
                    `Neste canal, você pode me perguntar sobre o contágio do vírus, pedir dicas de prevenção, ou fazer um pré-diagnóstico.\n\n`+
                    `Todas informações são confiáveis, direto do ministério da saúde, então pode ficar tranquilo com a informação passada.\n`+
                    `Se quiser que eu te chame de algum apelido especial, basta pedir!`,

                    `Olá! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.\n`+
                    `Neste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n`+
                    `E não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.`
                ]
            }
                subtitleResponse = [
                    `Como posso lhe ajudar hoje?`,
                    `Sobre qual assunto quer saber?`,
                    `Quer saber sobre qual assunto hoje?` 
                ]
                secondResponse = functions.cardArray('Menu Principal', subtitleResponse[functions.randomize(subtitleResponse)], ['Prevenção', 'Contágio', 'Pré-diagnóstico', 'Outras dúvidas'])
        return responseArray.concat(firstResponse[functions.randomize(firstResponse)], secondResponse)
    }
    
    goodbye() {
        let firstResponse, secondResponse, responseArray = []
        firstResponse = [
            `Se você precisar de mais informações sobre o Coronavírus, pode me chamar.\n`+
            `E caso sentir que se enquadra em alguns dos sintomas, ligue para o Disque Saúde 136!\n`
        ]
        secondResponse = [
        `Estou aqui sempre que precisar! Até mais${this.nickname}!`,
        `Foi um prazer lhe ajudar hoje${this.nickname}.`,
        `Até mais! Qualquer coisa, é só me mandar um oi${this.nickname}!`,
        `Até${this.nickname}! Contente em lhe ajudar!`,
        ]
        return responseArray.concat(firstResponse[functions.randomize(firstResponse)], secondResponse[functions.randomize(secondResponse)])
    }

    fallback() {
        let responses = []
        let counter = functions.getSystemCounters(this.queryResult.outputContexts)
            if(counter == 1 || counter == 0 ) {
                responses = [
                    "Não consegui compreender o que você disse.",
                    "Desculpe, não entendi o que você quis dizer.",
                    `Perdão${this.nickname}, mas não consegui compreender.`,
                    `Lamento, mas não entendi.`,
                    ]
            } else if(counter == 2) {
                responses = [
                    "Eu ainda não entendi o que você disse. Vamos tentar novamente..."
                ]
            } else {
                responses = [
                    "Desculpe, realmente não consegui entender o que você disse. Vamos parar por aqui. " + 
                    "Cuide se, e não se esqueça: caso você se enquadre em alguns dos sintomas, ligue para o Disque saúde 136."
                ]
            }
        return responses[functions.randomize(responses)]
    }

    nicknameStart() {
        const responses = [
            `Certo, e como quer que eu te chame?`,
            `Tudo bem, como posso te chamar?`,
            `Sem problemas, como deseja ser chamado?`
            ]
            return responses[functions.randomize(responses)]
    }

    nicknameNext(req, db) {
        functions.updateNickname(req, db)
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

    menuLoop() {
        let subtitleResponse = [
                `Como posso lhe ajudar agora?`,
                `Sobre qual assunto quer saber?`,
                `Quer saber sobre qual assunto?` 
            ]
            const responses = functions.cardArray('Menu Principal', subtitleResponse[functions.randomize(subtitleResponse)], ['Prevenção', 'Contágio', 'Pré-diagnóstico', 'Outras dúvidas'])
        return responses
    }

    prevention() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Eu sei ótimas dicas de prevenções básica e do profissional da saúde.\n`
            ]
            secondResponse = functions.cardArray('Prevenção', 'Qual a sua dúvida? Prevenção profissional ou básica?', ['Prevenção Básica', 'Profissional'])
        return responseArray.concat(firstResponse[functions.randomize(firstResponse)], secondResponse)
    }

    prevention__basic() {
        let firstResponse, secondResponse, thirdResponse, responseArray = []
            firstResponse = [
                `Vou citar alguns cuidados básicos que reduzem o risco geral de contrair ou transmitir infecções respiratórias agudas, incluindo o coronavírus: \n\n`+
                `Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou use álcool em gel 70%;\n\n`+
                `Ao tossir ou espirrar, cubra o nariz e boca com lenço ou com o braço. Não use as mãos;\n\n`+
                `Evite tocar nos olhos, nariz e boca com as mãos não lavadas;\n\n`+
                `Não compartilhe objetos pessoais;\n\n`+
                `Mantenha os ambientes bem ventilados;\n\n`+
                `Tenha um comportamento amigável mas sem o contato físico, ou seja, sem apertos do mão, beijos e abraços;\n\n`+
                `Evite aglomerações se estiver doente;\n\n`+
                `Quando precisar sair de sua residência, sempre utilize máscaras caseiras feitas de tecido.`
            ]
            secondResponse = [ {
                title: 'Proteja-se do coronavírus',
                subtitle: 'Assista ao video informativo do Ministério da Saúde.',
                imageUri: 'https://img.youtube.com/vi/cvdskDhw-Ps/0.jpg',
                buttons: [ {
                    text: 'Abrir vídeo',
                    postback: 'https://www.youtube.com/watch?v=cvdskDhw-Ps'
                } ]
            } ]
            thirdResponse = [
                `Posso ajudar em algo mais?`
            ]
        return responseArray.concat(firstResponse, secondResponse, thirdResponse)
    }

    prevention__professional() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelecidas.  \n\n`+
                `Ao prestar serviços que atendam casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:\n\n`+
                `Para serviços em ambulatório: O uso de máscara cirúrgica e luvas descartáveis.\n\n`+
                `Para o atendimento em UPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de proteção ou protetor facial.\n\n`+
                `Além disso, para a realização de procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95.`
            ]
            secondResponse = functions.cardArray('Prevenção do Profissional', 'Posso ajudar em algo mais?', ['Sim', 'Não, era só isso'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    contagion() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Eu posso te informar sobre as principais formas de contágio e sobre o período de incubação por coronavírus. \n`
            ]
            secondResponse = functions.cardArray('Contágio', 'Qual a sua dúvida?', ['Formas de contágio', 'Período de incubação'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    contagion__transmission() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `A transmissão do vírus acontece por via respiratória, através de gotículas que se espalham pelo ar quando uma pessoa que está infectada tosse ou espirra.\n\n`+
                `Também é possível se contaminar por contato pessoal com as secreções infectadas, como: gotículas de saliva; espirro; tosse; catarro; contato pessoal próximo, como toque ou aperto de mão; e o contato com roupas e objetos contaminados.\n`
            ]
            secondResponse = functions.cardArray('Formas de contágio', 'Posso ajudar em algo mais?', ['Sim', 'Não, era só isso'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    contagion__incubation() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `O "período de incubação" significa o tempo entre a contração do vírus e o início dos sintomas da doença.\n\n`+
                `Esse tempo varia de 1 a 14 dias, mas geralmente pode ocorrer em torno de 5 dias.\n\n`+ 
                `No entanto, dados preliminares do Coronavírus sugerem que a transmissão possa ocorrer também mesmo sem o aparecimento de sinais e sintomas.`
            ]
            secondResponse = functions.cardArray('Período de incubação', 'Posso ajudar em algo mais?', ['Sim', 'Não, era só isso'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    __fallback() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Desculpe, algumas perguntas ainda não consigo te responder`
            ]
            secondResponse = [
                `Me diga, qual a sua dúvida relacionada ao Coronavírus?`
            ]
        return responseArray.concat(firstResponse, secondResponse)
    }

    __fallbackExplicit() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Ainda não consegui identificar a sua dúvida.\n\n`+
                `Você pode me perguntar sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.`
            ]
            secondResponse = [
                `Me conta, qual a sua dúvida?`
            ]
        return responseArray.concat(firstResponse, secondResponse)
    }

    __fallbackFinal() {
        const responses = [
            `Desculpe, não consegui identificar a sua dúvida. Vamos parar por aqui. `
        ]
        return responses
    }

    startDiagnostic() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Vou te fazer algumas perguntas relacionadas aos sintomas do Coronavírus.\n\n`+
                `Vale lembrar que esta consulta NÃO é um diagnóstico e sim uma orientação para caso você precise de um exame médico.`
            ]
            secondResponse = functions.cardArray('Vamos lá?', '', ['Sim', 'Não'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    diagnostic() {
        if(this.queryResult.parameters.genericAccept == 'No')
            return `Tudo bem, caso queira fazer um pré diagnóstico mande uma mensagem.`

        let firstResponse, secondResponse, thirdResponse, responseArray = []
        firstResponse = [
            `A seguir vou citar alguns sintomas e gostaria que você me informasse se teve algum deles. E se sim, quantos você sentiu.`
        ]
        secondResponse = [
            `- Coriza ou nariz entupido;\n`+
            `- Cansaço;\n`+
            `- Dor de cabeça;\n`+
            `- Dores no corpo ou abdominais;\n`+
            `- Dor de garganta;\n`+
            `- Diarréia ou mal estar;\n`+
            `- Tosse;\n`+
            `- E Perda do olfato ou paladar;`
        ]
        thirdResponse = functions.cardArray('Quantos sintomas sentiu?', '', ['Nenhum', '1-2', '3', 'Mais de três'])
    return responseArray.concat(firstResponse, secondResponse, thirdResponse)
    }

    diagnostic__fallback() {
        let firstResponse, secondResponse, thirdResponse, responseArray = []
            firstResponse = [
                `Não entendi. Para continuarmos, você precisa me indicar se apresentou ou não algum desses sintomas citados:`
            ]
            secondResponse = [
                `- Coriza ou nariz entupido;\n`+
                `- Cansaço;\n`+
                `- Dor de cabeça;\n`+
                `- Dores no corpo ou abdominais;\n`+
                `- Dor de garganta;\n`+
                `- Diarréia ou mal estar;\n`+
                `- Tosse;\n`+
                `- E Perda do olfato ou paladar;`
            ]
            thirdResponse = functions.cardArray('Quantos sintomas sentiu?', '', ['Nenhum', '1-2', '3', 'Mais de três'])
        return responseArray.concat(firstResponse, secondResponse, thirdResponse)
    }

    diagnostic__fallbackImplicit() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Desculpe, ainda não consegui entender.`
            ]
            secondResponse = functions.cardArray('Quantos dos sintomas apresentados sentiu?', '', ['Nenhum', '1-2', '3', 'Mais de três'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    diagnostic__fallbackFinal() {
        const responses = [
            `Realmente, não consegui entender. Vamos parar por aqui.`
            ]
            return responses
    }

    diagnostic__symptoms() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Que bom! Sem sintomas de gripe!`,
                `Entendi, você está com poucos sintomas de gripe.`,
                `Entendi, você está com vários sintomas de gripe.`
            ]
            secondResponse = functions.cardArray('E você usou algum medicamento para tratar os sintomas?', '', ['Sim', 'Não'])
        if(functions.symptoms(this.queryResult) != 0)
            return responseArray.concat(firstResponse[functions.symptoms(this.queryResult)], secondResponse)
        else
            return this.diagnostic__symptomsSerious(firstResponse[0]) //problem here, no easy way to pass context, and clear current contexts
    }

    symptoms__fallback() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Não entendi.`
            ]
            secondResponse = functions.cardArray('Para continuarmos, você precisa me indicar se usou ou não algum medicamento.', '', ['Usei medicamentos', 'Não usei'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    symptoms__fallbackImplicit() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Desculpe, ainda não consegui entender.`
            ]
            secondResponse = functions.cardArray('Você usou algum medicamento?', '', ['Sim', 'Não'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    symptoms__fallbackFinal() {
        const responses = [
            `Realmente, não consegui entender. Vamos parar por aqui.`
            ]
            return responses
    }

    diagnostic__medicine() {
        if(this.queryResult.parameters.medicine == 'No')
            return this.diagnostic__medicine__improvement()
        const responses = functions.cardArray('Sente que melhorou?', '', ['Sim', 'Não'])
            return responses
    }

    medicine__fallback() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Não entendi.`
            ]
            secondResponse = functions.cardArray('Para continuarmos, você precisa me indicar se melhorou ou não com o medicamento.', '', ['Melhorei', 'Não melhorei'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    medicine__fallbackImplicit() {
        let firstResponse, secondResponse, responseArray = []
            firstResponse = [
                `Desculpe, ainda não consegui entender.`
            ]
            secondResponse = functions.cardArray('Você melhorou com o medicamento?', '', ['Sim', 'Não'])
        return responseArray.concat(firstResponse, secondResponse)
    }

    medicine__fallbackFinal() {
        const responses = [
            `Realmente, não consegui entender. Vamos parar por aqui.`
            ]
        return responses
    }

    diagnostic__medicine__improvement() {
        return this.diagnostic__symptomsSerious()
    }

    diagnostic__symptomsSerious(extraResponse) {
        let firstResponse, secondResponse, responseArray = []
            if(this.queryResult.parameters.symptoms) { //called from 6.1.0
                return [`Que bom! Sem sintomas de gripe. `, `Resultado: Ainda não implementado`]
            } else if (this.queryResult.parameters.medicine) { //called from 6.1.1
                return this.result() //This should not be result, should instead be responseArray, but contexts should be changed. because of my implementation, I couldn't change context if the intent is not called by user. Will solve this on next project/iteration.
            } else if (this.queryResult.parameters.gotBetter) { //called from 6.1.2
                if(this.queryResult.parameters.gotBetter == 'Yes') {
                    extraResponse = [
                        `Ótimo! Sem sintomas gripais!`
                    ]
                }

            }
            firstResponse = [
                `- Convulsão ou Vômito;\n`+
                `- Dificuldade para respirar;\n`+
                `- Sensação de desmaio;\n`+
                `- Dedos azulados e pálidos.`
            ]
            secondResponse = functions.cardArray('E você sentiu algum desses sintomas citados acima?', '', ['Sim', 'Não'])
        return responseArray.concat(extraResponse ? extraResponse : [], firstResponse, secondResponse)
    }

    diagnostic__improvement__fallback() { //Using system counter there's no need to implement separate fallbacks, unfortunately no time to rewrite all.
        let firstResponse, secondResponse, responses = []
        let counter = functions.getSystemCounters(this.queryResult.outputContexts)
            if(counter == 0 || counter == 1 ) {
                firstResponse = [
                    "Não entendi."
                    ]
                secondResponse = [
                    `Para concluir o pré diagnóstico, você precisa me indicar se teve ou não algum desses sintomas citados:\n\n`+
                    `- Convulsão ou Vômito;\n`+
                    `- Dificuldade para respirar;\n`+
                    `- Sensação de desmaio;\n`+
                    `- Dedos azulados e pálidos.`
                ]
                return responses.concat(firstResponse, secondResponse)

            } else if(counter == 2) {
                responses = [
                    "Desculpe, ainda não consegui entender. Você teve algum dos sintomas citados?"
                ]
            } else {
                responses = [
                    "Realmente não consegui entender o que você disse. Vamos parar por aqui."
                ]
            }
                return responses
    }

    result() {
        return `Resultado: Ainda não implementado`
    }

    cases() {
        return `Desculpe, parece que essa funcionalidade ainda não foi implementada.`
    }
    
    other() {
        return `Desculpe, parece que essa funcionalidade ainda não foi implementada.`
    }

}

//EXPORTS-------

module.exports = {
    Intent
}