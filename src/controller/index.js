const axios = require("axios")
const db = require("../db")

const intents = async (req, res) => {

    try {
        const { queryResult, originalDetectIntentRequest } = req.body
        const { intent, parameters } = queryResult

        let displayName = intent.displayName
        let platform = originalDetectIntentRequest.source ? originalDetectIntentRequest.source : "DIALOGFLOW_MESSENGER"
        userPlatform(req, platform) 
        
        try {
            username = await db.User.findOne({
                userId : userId
            }).orFail()
        } catch (error) {
            username = {name: ""}
        }
        const nickname = username.name ? ', ' + username.name : '' //formats string properly depending whether user has a nickname set

        try {
            uid = await db.Platform.findOne({$or: [
                {userId : userId},
                {session : userId}

            ]}).orFail()
        } catch (error) {
            uid = { userId: "", session: "" }
            if((platform !== "DIALOGFLOW_CONSOLE") && (platform !== "DIALOGFLOW_MESSENGER")) //DialogFlow console and messenger do not have payloads, so they need to use sessions.
                db.Platform.create(originalDetectIntentRequest.payload.data.source)
            else
                db.Platform.create(req.body)
        }

        switch (displayName) {
                
            //DEFAULT WELCOME INTENT START-------------------------------------------------------------
            case 'Default Welcome Intent':
                randomize()
                try {
                    switch (rand) {
                        case 0:
                            if((uid.userId === userId) || (uid.session === userId))
                                res.json(answer(`Olá! Que bom ver você novamente${nickname}! Se quiser, basta pedir que te informo a previsão do tempo.`))
                            else
                                res.json(answer(`Olá! Sou um bot para previsão do tempo! É um prazer te conhecer!`))
                        break
                    
                        case 1:
                            if((uid.userId === userId) || (uid.session === userId))
                                res.json(answer(`Oi! Seja bem vindo de volta${nickname}! Vou te auxiliar novamente com a previsão do tempo!`))
                            else
                                res.json(answer(`Oi! É um prazer lhe conhecer! Estou aqui para te auxiliar com a previsão do tempo.`))
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //DEFAULT WELCOME INTENT END---------------------------------------------------------------

            //DEFAULT GOODBYE INTENT START-------------------------------------------------------------
            case 'Default Goodbye Intent':
                randomize()
                try {
                    switch (rand) {
                        case 0:
                                res.json(answer(`Estou aqui sempre que precisar! Até mais${nickname}!`))
                        break
                    
                        case 1:
                                res.json(answer(`Foi um prazer lhe ajudar hoje${nickname}.`))
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //DEFAULT GOODBYE INTENT END---------------------------------------------------------------

            //DEFAULT FALLBACK INTENT START------------------------------------------------------------
            case 'Default Fallback Intent':
                randomize()
                try {
                    switch (rand) {
                        case 0:
                                res.json(answer("Não consegui compreender o que você disse. Se estiver precisando, pode me pedir ajuda."))
                        break
                    
                        case 1:
                                res.json(answer("Desculpe, não entendi o que você quis dizer. Se precisar, basta me pedir ajuda."))
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //DEFAULT FALLBACK INTENT END--------------------------------------------------------------

            //CLIMATE LOOP INTENT START----------------------------------------------------------------
            case 'Help Intent':
                res.json(answer(
                    `Entendi! Vamos lá${nickname}! Eu sou um bot para lhe informar a previsão do tempo nos próximos dias.\n`+
                    `Basta me informar a cidade que quer saber o clima pelos próximos sete dias, ou por exemplo, perguntar 'previsão do tempo em são paulo' ou 'clima em cuiabá'.\n`+
                    `Caso eu não esteja entendendo, tente reformular sua pergunta, por favor. É um prazer te ajudar!`+
                    `Quase esqueci de mencionar, mas se quiser, você pode escolher um apelido para que eu te chame, basta pedir.`
                    ))
            break
            //CLIMATE LOOP INTENT END------------------------------------------------------------------

            //CLIMATE INTENT START---------------------------------------------------------------------
            case 'Climate Intent':
                randomize()
                try {
                    switch (rand) {
                        case 0:
                                res.json(answer(
                                `Certo${nickname}! Aqui está a previsão do tempo em ${parameters.location.city} nos próximos 7 dias:\n`+
                                `Deseja saber o clima em outra cidade?`
                                ))
                        break
                    
                        case 1:
                            res.json(answer(
                                `Certo${nickname}! Aqui está a previsão do tempo em ${parameters.location.city} nos próximos 7 dias:\n`+
                                `Deseja saber o clima em outra cidade? Variation 2`
                                ))
                        break
                    }

                } catch (error) {
                    console.log(error)
                } 
            break
            //CLIMATE INTENT END-----------------------------------------------------------------------

            //CLIMATE LOOP INTENT START----------------------------------------------------------------
            case 'Climate Loop Intent':
                res.json(nextEvent("climateEvent"))
            break
            //CLIMATE LOOP INTENT END------------------------------------------------------------------

            //NICKNAME INTENT START--------------------------------------------------------------------
            case 'Nickname Intent':
                res.json(answer("Então vamos lá, como posso te chamar?"))
            break
            //NICKNAME INTENT END----------------------------------------------------------------------

            //NICKNAME INTENT - NEXT START-------------------------------------------------------------
            case 'Nickname Intent - next':
                    try {
                        user = await db.User.findOne( {
                            userId : userId
                        } ).orFail()
                    } catch (error) {
                        user = ''
                    }

                    if(user !== '')
                        res.json(answer(`Você já tem um nome cadastrado: ${user.name}`))
                    else {
                        db.User.create({ name : parameters["given-name"], userId : userId})
                        res.json(answer(`Certo, te chamarei de ${parameters["given-name"]} a partir de agora!`))
                    }
            break
            //NICKNAME INTENT - NEXT END---------------------------------------------------------------
        }

    } catch (error) {    
            console.log(error)
    }

}

const log = (req, res) => {
    res.json(answer("GET sucessful"))
}

//basic structure for dialogflow fulfillmentText
function answer(text) {
    return { "fulfillmentText": text }
}

//sets ID based on user platform
function userPlatform(req, id) {
    if(id === 'line')
        userId = req.body.originalDetectIntentRequest.payload.data.source.userId
    if(id === 'telegram')
        userId = req.body.originalDetectIntentRequest.payload.data.from.id
    if(id === 'DIALOGFLOW_MESSENGER') //Dialogflow Messenger sends no source in body, needs to be hardcoded
        userId = req.body.session
    if(id === 'DIALOGFLOW_CONSOLE')
        userId = req.body.session
}

function randomize() {
    rand = Math.random() < 0.5 ? 0 : 1;
}

//Does not work, according to dialogflow documentation, when followupEventInput is passed, ignores fulfillmentText and messages.
function answerEvent(text, eventName) {
    return {
            "fulfillmentText": text,
            "followupEventInput": {
                "name": eventName,
                "languageCode": "pt-BR"
            }
    }
}

//Calls event passed as parameter, throws fallback if event does not exist.
function nextEvent(eventName) {
    const a = {
        "followupEventInput": {
          "name": eventName,
          "languageCode": "pt-BR",
          "parameters": {}
        }
      }
    console.log(a)
    return a
}

module.exports = {
    intents,
    log
}
