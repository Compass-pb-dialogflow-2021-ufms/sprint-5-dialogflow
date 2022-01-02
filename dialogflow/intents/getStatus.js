const ServiceCall = require('../../dataBase/models/serviceCall')


async function getStatus(req)
{
    const {id, email} = req.body.queryResult.parameters

    try
    {
        const serviceCall = await ServiceCall.findOne({id: id})
        if (serviceCall == null)
            console.log(`Não há em nosso sistema nenhum registro do chamado ${id}`)
        if(serviceCall.email == email)
        {
            const {fullName, problemDescription, status} = serviceCall  
        }
        else
            console.log(`O email ${email} é diferente do informado na criação do chamado ${id}!`)

    }
    catch(error)
    {
        console.log(error)
        // return 'Houve um erro em nosso sistema e não conseguimos fazer a busca pelo seu chamado no sistema, por favor, tente novamente em alguns instantes! Nesse meio tempo, posso te ajudar com mais alguma coisa?'
    }
}


module.exports = getStatus