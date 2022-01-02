const axios = require('axios');
const numeroAleatorio = require('../multiplaRespostas');
let dadosChamada = {};
module.exports = {
    inicioChamada(){
        let mensagens = [
            'Por favor, me informe seu nome completo',
            'Me diga seu nome completo',
            'Qual seu nome completo? '
        ]
        return mensagens[numeroAleatorio(mensagens.length)];
    },
    chamadaNome(parametros){
        dadosChamada = {nome : parametros.nome.name};
        let mensagens = [ 
            'Qual seu telefone ?',
            'Me informe seu telefone'
        ];
        return mensagens[numeroAleatorio(mensagens.length)];  
    },
    chamadaTelefone(parametros){
        dadosChamada.telefone = parametros.telefone;
        let mensagens = [ 
            'Qual seu email ?',
            'Me informe seu email'
        ];
        return mensagens[numeroAleatorio(mensagens.length)]; 
    },
    chamadaEmail(parametros){
        dadosChamada.email = parametros.email;
        let mensagens = [ 
            'Me informe seu CPF',
            'Qual seu CPF ?'
        ];
        return mensagens[numeroAleatorio(mensagens.length)]; 
    },
    chamadaCpf(parametros){
        dadosChamada.cpf = parametros.cpf;
        let mensagens = [ 
            'Agora descreva seu problema',
            'Detalhe qual seu problema'
        ];
        return mensagens[numeroAleatorio(mensagens.length)];
    },
    async chamadaDescProblema(parametros){
        dadosChamada.descricao = parametros.descricao;
        dadosChamada.status = 'ativa';
        return await this.salvaDados().then(dadosChamada = {});
    },
    async salvaDados(){
        try {
            await axios({
                method: 'post',
                url: 'https://199a-45-237-255-132.ngrok.io/bd/adicionar',
                data: dadosChamada

              });
            return `Muito Obrigado ! Seu problema foi repassado para equipe de ajustes técnicos, que entrará em contato o mais breve possivel
            \nPara ver a lista de chamadas ativas digite "CHAMADAS ATIVAS"
            \nPara ver suas chamadas digite "MINHAS CHAMADAS"`
        } catch (erro) {
            console.log(erro);
            return 'Infelizmente encontramos um problema. Por favor tente novamente !'
        }
    },
    


}