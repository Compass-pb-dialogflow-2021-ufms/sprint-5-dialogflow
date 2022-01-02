async function telegramUser(source){
    if(source == 'telegram'){
        const idTelegramHere = req.body.originalDetectIntentRequest.payload.data.from.id
        const nome = req.body.originalDetectIntentRequest.payload.data.from.first_name
        const usuario = new Usuario({idTelegram: idTelegramHere})
        const novoUsuario = await usuario.save()
        if(novoUsuario.idTelegram == idTelegramHere){
            resposta = true
            var novoNome = nome;
        }    
    }
}

module.exports = telegramUser