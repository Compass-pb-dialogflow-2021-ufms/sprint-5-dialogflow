const ServiceCall = require('../../dataBase/models/serviceCall')
const responses = require('../../responses/responses')


async function getStatus(req)
{
    const {id, email} = req.body.queryResult.parameters
    try
    {
        const serviceCall = await ServiceCall.findOne({id: id})
        if (serviceCall == null)
            return responses.getStatus[0](id)
        if(serviceCall.email == email)
        {
            const {fullName, problemDescription, status} = serviceCall
            return responses.getStatus[1](id, fullName, problemDescription, status)  
        }
        else
            return responses.getStatus[2](id, email)
    }
    catch(error)
    {
        console.log(error)
        return responses.getStatus[3]
    }
}


module.exports = getStatus