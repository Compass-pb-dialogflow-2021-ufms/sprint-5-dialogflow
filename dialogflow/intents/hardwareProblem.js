function hardwareProblem(message)
{
    const userText = message.queryText

    if(userText.search('quebr') == -1)
    {
        const text = 'Antes de abrirmos um chamado, temos algumas recomendações de medidas que podem resolver seu problema:' + 
        '\n\n1. Verifique se todos os cabos estão conectados corretamente ou se há algum mal contato;' +
        '\n2. Tente remover todos os cabos e inseri-los novamente;' +
        '\n3. Desligue seu(s) dispositivo(s) e ligue novamente;' +
        '\n\nApós testar as medidas apresentadas, seu problema foi resolvido?'

        return text
    }
    else
    {
        const event = 'name'
        return event
    }
}


module.exports = hardwareProblem