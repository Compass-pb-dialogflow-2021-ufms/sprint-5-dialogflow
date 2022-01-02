const responses = require('../../responses/responses')
const randomIntFromInterval = require('../../auxiliaryFunctions/randomIntFromInterval')


function welcome()
{
    const number = randomIntFromInterval(0, 2)
    
    return responses.welcome[number]
}


module.exports = welcome