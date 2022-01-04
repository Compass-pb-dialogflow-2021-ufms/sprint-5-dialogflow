//DialogFlow Functions Class
class Function {
    constructor(options) {
        this.req = options.req
        this.res = options.res
    }

    answer(text) { //Default Text answer
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

    answerContext(text, context, lifespan) { //Adds context with fulfillmentText answer
        return this.res.json({
            "fulfillmentText": text,
            "outputContexts": [ {
                "name": this.req.body.session + "/contexts/" + context,
                "lifespanCount": lifespan
            } ]
        })
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
    updateNickname
}