function hardware(problem){
    let text
    switch(problem){
        case "não liga":
            text = "Favor remover os cabos e verificar para que não haja mal contato."
            break;
        case "quebrou":
            text = "Que pena, deseja abrir um chamado para troca?"
            break;
        case "travou":
            text = "Favor desligar da tomada e tentar ligar novamente."
            break;
    }

    return text
}


module.exports = hardware