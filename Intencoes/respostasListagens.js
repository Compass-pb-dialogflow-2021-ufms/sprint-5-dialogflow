const axios = require('axios');
module.exports = {
    async chamadasAtivas() {
        try {
            const resultado = await axios(`https://199a-45-237-255-132.ngrok.io/bd/ativas`);
            return this.mensagemChamadasAtivas(resultado.data);
        } catch (erro) {
            console.error(erro);
            return `Desculpa aconteceu um erro, tente novamente mais tarde\nDigite "Menu" para ver meus serviços`;
        }
    },
    inicioChamadasCpf() {
        return 'Informe seu cpf';
    },
    async chamadasPorCpf(parametros) {
        try {
            const resultado = await axios(`https://199a-45-237-255-132.ngrok.io/bd/${parametros.cpf}/`);
            return this.mensagemChamadasPorCpf(resultado.data);
        } catch (erro) {
            console.error(erro);
            return `Desculpa aconteceu um erro, tente novamente mais tarde\nDigite "Menu" para ver meus serviços`;
        }
    },
    mensagemChamadasAtivas(arrayChamadas) {
        if (arrayChamadas.length === 0) {
            return 'Não encontrei nenhuma chamada ativa\n Digite "MENU" para visualizar minhas outras opções'
        } else {
            let mensagem = "Chamadas Ativas: ";
            for (const objeto of arrayChamadas) {
                mensagem += `\n\nID : ${objeto._id.slice(0,9)}\nNome: ${objeto.nome}\nEmail:${objeto.email}`;
            }
            return mensagem + `\n\nPara visualizar meus outros serviços digite "MENU"`;
        }
    },
    mensagemChamadasPorCpf(arrayChamadas) {
        if (arrayChamadas.length === 0) {
            return 'Não encontrei nenhuma chamada cadastrada nesse CPF\n Digite "MENU" para visualizar minhas outras opções'
        } else {
            let mensagem = "Suas Chamadas : ";
            for (const objeto of arrayChamadas) {
                mensagem += `\n\nID : ${objeto._id.slice(0,9)}\nDescrição Problema: ${objeto.descricao}\nStatus : ${objeto.status}`;
            }

            return mensagem + `\n\nPara visualizar meus outros serviços digite "MENU"`;
        }
    }
}