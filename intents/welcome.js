function welcome(novoNome, resposta){
    let text;
    if(resposta == false){
        text =  "Olá, seja bem vindo ao assistente de suporte N1. Qual é o seu problema?"
    }else{
        text = "Olá, " + novoNome + " seja bem vindo ao assistente de suporte N1. Qual é o seu problema?"
    }
    return text
}


module.exports = welcome