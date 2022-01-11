/**
 * Function class Params:
 * @param {Object} req Webhook Requisition from DialogFlow
 * @param {Object} res Webhook Response to DialogFlow
 */
class Function {
    constructor(options) {
        this.req = options.req
        this.res = options.res
    }

    answer(text) { //Defines type of fulfillment Message to send, werther there are multiple responses or not
        //text.title = 0
        const msg = { "fulfillmentMessages": [] }
        if(typeof text == 'string') //If answer is simpleText
            return this.res.json({ "fulfillmentText": text })
        else if(typeof text.title == 'string') { //If answer is card
            msg['fulfillmentMessages'].push({
                card : text,
                "platform": getPlatform(this.req)
            })
            return this.res.json(msg)
        } else { //If answer is richText
            text.forEach(text => {
                if(typeof text.title == 'string'){ //If any of richTexts is a card
                    msg['fulfillmentMessages'].push({
                        card : text,
                        "platform": getPlatform(this.req)
                    })
                } else {
                    msg['fulfillmentMessages'].push({
                        "text": {
                            "text": [
                                text
                            ]
                        },
                        "platform": getPlatform(this.req)
                    })
                }
            })
            return this.res.json(msg)
        }
    }

    nextEvent(eventName) { //Calls event passed as parameter, throws fallback if event does not exist.
        return this.res.json({
            "followupEventInput": {
              "name": eventName,
              "languageCode": "pt-BR",
              "parameters": {}
            }
          })
    }

    answerContext(text, context, lifespan) {
        const msg = { "fulfillmentMessages": [], "outputContexts": [] }
        if(typeof text == 'string')
            return this.res.json({ "fulfillmentText": text })
        else {
            text.forEach(text => {
                if(typeof text.title == 'string'){ //If any of richTexts is a card
                    msg['fulfillmentMessages'].push({
                        card : text,
                        "platform": getPlatform(this.req)
                    })
                } else {
                    msg['fulfillmentMessages'].push({
                        "text": {
                            "text": [
                                text
                            ]
                        },
                        "platform": getPlatform(this.req)
                    })
                }
            })
            msg["outputContexts"].push( {
                "name": this.req.body.session + "/contexts/" + context,
                "lifespanCount": lifespan
            })
            return this.res.json(msg)
        }
    }
}

//DB functions------------------------------

//returns boolean comparing if user has used platform before
async function recurrentUser(req, db) {
        return getPlatformId(req) === await findUser(req, db)
}

//returns platform from source, if there's no source returns 'Other platform'
function getPlatform(req) {
    return platform = req.body.originalDetectIntentRequest.source ? req.body.originalDetectIntentRequest.source : "Other platform" //Falsy so platform is never empty 
}

//returns ID based on user platform, currently supported: LINE, Telegram, Dialogflow Messenger and Dialogflow Console.
function getPlatformId(req) {
    if(getPlatform(req) === 'line')
        return req.body.originalDetectIntentRequest.payload.data.source.userId
    if(getPlatform(req) === 'telegram')
        return req.body.originalDetectIntentRequest.payload.data.from.id
    else
        return req.body.session //Defaults to using session on platforms not yet implemented.
}

//search user in db, if not found creates entry
async function findUser(req, db) {
    uid = { userPlatformId: "" } //Empty uid if no user is found (must not return undefined)
        try {
            uid = await db.User.findOne({
                userPlatformId : getPlatformId(req)
            }).orFail()
        } catch (error) {
            addUser(req, db)
        } finally {
            return uid.userPlatformId
        }
}

//add user if does not exist passing platformId
function addUser(req, db) {
    db.User.create({ userPlatformId : getPlatformId(req) })
}

//retrieves nickname from database with proper text formatting
async function getNickname(req, db) {
    try {
        username = await db.User.findOne({
            userPlatformId : getPlatformId(req)
        }).orFail()
    } catch (error) {
        username = {nickname: ""}
    } finally {
        return username.nickname ? ', ' + username.nickname : '' //Formats string depending whether user has a nickname set
    }
}

//finds user by platform and updates his nickname
async function updateNickname(req, db) {
    let user = await db.User.findOneAndUpdate({ userPlatformId : getPlatformId(req) }, { nickname : formatNickname(req.body.queryResult.parameters.person.name) }, {new : true})
        return formatNickname(user.nickname)
}

//Util functions----------------------------

/**
 * 
 * @param {String} title Takes a string max 60 characters for the card title
 * @param {String} subtitle Takes a string max 40 characters for the card subtitle
 * @param {Array} buttonsArray Takes an array [] with 1-4 strings for each button text. Note: Strings must have less than 26 characters on LINE
 * @returns Card structure with title and buttons.
 */
function cardArray(title, subtitle, buttonsArray) {
    const buttons = []
        buttonsArray.forEach(text => {
            buttons.push({
                text: text
            })
        })

    return [{
        title: title,
        subtitle : subtitle,
        buttons
    }]
}

function getSystemCounters(context) {
    for (const contextId in context) {
        if(context[contextId].name.includes("__system_counters__"))
            return context[contextId].parameters["no-match"]
    }
}

function symptoms(queryResult) {
    return queryResult.parameters.symptoms
}

function randomize(responses) { //Randomizer for answer variety based on array length
    return rand = Math.floor(Math.random() * responses.length)
}

function randomizeBinary() { //Randomizer for answer variety between 0-1 {Deprecated}
    return rand = Math.random() < 0.5 ? 0 : 1
}

function format(text) { //Strips accentuation from string. Useful for passing strings to URLs
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function formatCpf(text) { //Strips dots and dashes from CPF
    return text.replace(/[.-\s]/g, '')
}

function formatNickname(text) { //Uppercase first letter of name
    return text.charAt(0).toUpperCase() + text.slice(1);
}

//EXPORTS------------------------------------

module.exports = {
    Function,
    recurrentUser,
    randomize,
    randomizeBinary,
    format,
    formatCpf,
    formatNickname,
    getNickname,
    updateNickname,
    symptoms,
    getSystemCounters,
    cardArray
}