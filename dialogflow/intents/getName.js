function getName(req)
{
    const fullName = req.body.queryResult.parameters.fullName
    const text = `Só confirmando, seu nome completo é: ${fullName}, correto?`

    return text
}


module.exports = getName