function software(problem, softwareName){
    let text
    switch(problem){
        case "com lentidão":
            text = "Favor verificar a sua conexão a internet e a sua banda larga."
            break;
        case "não instalado":
            text = "Favor fazer o download do software no site do fabricante: " + softwareName
            break;
        case "problemas ao acessar":
            text = "Favor reiniciar o " + softwareName + " e se persistir, abra uma chamado."
            break;
    }

    return text
}


module.exports = software