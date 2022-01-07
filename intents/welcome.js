function welcome(resposta){
    let text1, text2;
    if(resposta == false){
        text1 =  "Olá! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus." + "\n"
        +       "Neste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo." + "\n"
        +       "E não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar."
        text2 = "Sobre qual assunto você quer saber?👱🏻‍♀️"
    }else{
        text1 = "Olá novamente! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.👱🏻‍♀️"
        text2 = "Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico." + "\n" 
        + "Sobre qual assunto você quer saber?"
    }
    return [text1, text2];
}


module.exports = welcome