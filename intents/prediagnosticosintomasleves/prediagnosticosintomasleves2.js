function prediagnosticosintomasleves2(numerodeSintomas){
    let text1,text2
    if(numerodeSintomas > 3){
        text1 =  "Entendi, você está com vários sintomas de gripe."
    }else if (numerodeSintomas == 3 || 2 || 1){
        text1 =  "Entendi, você está com poucos sintomas de gripe."
    }

    text2 = "E você usou algum medicamento para tratar os sintomas? 💊"
    
    return [text1, text2];
}


module.exports = prediagnosticosintomasleves2