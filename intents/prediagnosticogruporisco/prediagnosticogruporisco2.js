function prediagnosticogruporisco2(){
    let text1, text2;
        text2 =  "👴 Pessoas com mais de 60 anos;" + "\n"
        +       "🤰 Gestantes;" + "\n"
        +       "🤒 Pessoas com doenças crônicas (como: Diabetes, doenças cardiovasculares ou pulmonares);" + "\n"
        +       "💊 Pessoas em tratamento contra o câncer."
        text1 = "Você pertence a algum desses grupos citados a seguir?"
    return [text1, text2];
}


module.exports = prediagnosticogruporisco2