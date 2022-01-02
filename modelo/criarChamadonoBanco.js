const Chamado = require('../modelo/chamado')

async function criarChamadonoBanco(callName, callPhone, callEmail, callCpf, callDescricao){
    const chamado = new Chamado({
        nome: callName,
        telefone: callPhone,
        email: callEmail,
        cpf: callCpf,
        descricao: callDescricao
    })

    const novoChamado = await chamado.save()
    return novoChamado
}

module.exports = criarChamadonoBanco