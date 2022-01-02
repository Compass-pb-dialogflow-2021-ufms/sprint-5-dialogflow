const ServiceCall = require('../../dataBase/models/serviceCall')
const formattingCpf = require('../../auxiliaryFunctions/formattingCpf')
const formattedCellNumber = require('../../auxiliaryFunctions/formattingCellNumber')
const responses = require('../../responses/responses')


async function getServiceCallParameters(req)
{
    let {fullName, cpf, cellNumber, email, problemDescription} = req.body.queryResult.parameters
    const id = await ServiceCall.count({})
    const status = 'Pendente'
    cpf = formattingCpf(cpf)
    cellNumber = formattedCellNumber(cellNumber)
    const serviceCall = {id, fullName, cpf, cellNumber, email, problemDescription, status}


    try
    {
        await ServiceCall.create(serviceCall)
        return responses.getServiceCallParameters[0](id)
    }
    catch(error)
    {
        console.log(error)
        return responses.getServiceCallParameters[1]
    }
}


module.exports = getServiceCallParameters