module.exports = {
    sugestaoBotoes : ["Menu", "Não, era só isso"],
    contagio() {
        return {
            mensagens: [`- Tempo de incubação do vírus
            \n- Formas de contágio
            \n\n O que sobre contágio você deseja ver ?`],
            quickReplies : ["Formas de contágio","Tempo de incubação do vírus"]
        }
    },
    incubacao() {
        return {
            mensagens: [`O "período de incubação" significa o tempo entre a contração do vírus e o início dos sintomas da doença.
            \nEsse tempo varia de 1 a 14 dias, mas geralmente pode ocorrer em torno de 5 dias. 
            \nNo entanto, dados preliminares do Coronavírus sugerem que a transmissão possa ocorrer também mesmo sem o aparecimento de sinais e sintomas.`
            ,'Posso ajudar em algo mais?'],
            quickReplies: this.sugestaoBotoes
        }
    },
    formasContagio() {
        return {
            mensagens: [`A transmissão do vírus acontece por via respiratória, através de gotículas que se espalham pelo ar quando uma pessoa que está infectada tosse ou espirra. 
            \nTambém é possível se contaminar por contato pessoal com as secreções infectadas, como: gotículas de saliva; espirro; tosse; catarro; contato pessoal próximo, como toque ou aperto de mão; e o contato com roupas e objetos contaminados.`
            ,'Posso ajudar em algo mais?'],
            quickReplies: this.sugestaoBotoes

        }

    }
}