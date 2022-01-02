const responses = require('../../responses/responses')


function getName(req)
{
    const fullName = req.body.queryResult.parameters.fullName


    return responses.getName[0](fullName)
}


module.exports = getName