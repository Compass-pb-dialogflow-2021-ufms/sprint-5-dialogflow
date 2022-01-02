const responses = require('../../responses/responses')
const randomIntFromInterval = require('../../auxiliaryFunctions/randomIntFromInterval')


function goodbye()
{
    const number = randomIntFromInterval(0, 2) 


    return responses.goodbye[number]
}


module.exports = goodbye