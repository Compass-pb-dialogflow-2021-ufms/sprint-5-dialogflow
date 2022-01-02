const ServiceCall = require('../../dataBase/models/serviceCall')
const formattingCpf = require('../../auxiliaryFunctions/formattingCpf')
const formattedCellNumber = require('../../auxiliaryFunctions/formattingCellNumber')


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
        return `Seu chamado foi cadastrado com sucesso em nosso sistema e nossos técnicos já estão trabalhando para resolver seu problema! O número do código para acompanhamento das atualizações é "${id}". Posso te ajudar com mais alguma coisa?`
    }
    catch(error)
    {
        console.log(error)
        return 'Houve um erro em nosso sistema e não conseguimos fazer o cadastro do seu chamado, por favor, tente novamente em alguns instantes! Nesse meio tempo, posso te ajudar com mais alguma coisa?'
    }
}


module.exports = getServiceCallParameters