//DialogFlow Functions Class
class Function {
    constructor(options) {
        this.req = options.req
        this.res = options.res
    }

    answer(text) {
        return this.res.json({ "fulfillmentText": text })
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

    answerContext(text, context, lifespan) { //adds context with fulfillmentText answer
        return this.res.json({
            "fulfillmentText": text,
            "outputContexts": [ {
                "name": this.req.body.session + "/contexts/" + context,
                "lifespanCount": lifespan
            } ]
        })
    }
}

//Other Functions
function userPlatform(req, id) { //returns ID based on user platform, currently supported: LINE, Telegram, Dialogflow Messenger and Dialogflow Console.
    if(id === 'line')
        return req.body.originalDetectIntentRequest.payload.data.source.userId
    if(id === 'telegram')
        return req.body.originalDetectIntentRequest.payload.data.from.id
    if(id === 'DIALOGFLOW_MESSENGER') //Dialogflow Messenger sends no source in body, needs to be hardcoded
        return req.body.session
    if(id === 'DIALOGFLOW_CONSOLE')
        return req.body.session
}

async function getNickname(db, userId) {
    try { //Checks if UserID exists on Nicknames DB. Note: This is separated in another DB from Platform because platform treats not only userId, but sessions aswell.
        username = await db.Nickname.findOne({
            userId : userId
        }).orFail()
    } catch (error) {
        username = {name: ""}
    } finally {
        return username.name ? ', ' + username.name : '' //Formats string properly depending whether user has a nickname set
    }
}

async function checkUserId(req, db, userId, platform) {
    try { //Checks if UserID or Session exists on Platform DB, if it doesn't, adds to database depending on platform
        uid = await db.Platform.findOne({$or: [
            {userId : userId},
            {session : userId}

        ]}).orFail()
    } catch (error) {
        uid = { userId: "", session: "" }
        if((platform !== "DIALOGFLOW_CONSOLE") && (platform !== "DIALOGFLOW_MESSENGER")) {
            db.Platform.create(req.body.originalDetectIntentRequest.payload.data.source) //Create User from payload from platform (userID)
        } //DialogFlow console and messenger do not have payloads, so they need to use sessions. 
        else
            db.Platform.create(req.body) //Create User from Dialogflow's session ID
    } finally {
        return uid
    }
}

function randomize(responses) { //Randomizer for answer variety based on array length
    return rand = Math.floor(Math.random() * responses.length)
}

function randomizeBinary() { //Randomizer for answer variety between 0-1
    return rand = Math.random() < 0.5 ? 0 : 1
}

function format(text) { //Strips accentuation from string. Useful for passing strings to URLs
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function formatCpf(text) {
    return text.replace(/[.-\s]/g, '')
}

//EXPORTS----------

module.exports = {
    Function,
    userPlatform,
    randomize,
    randomizeBinary,
    format,
    formatCpf,
    getNickname,
    checkUserId,
}