const axios = require('axios');
async function buscaIdCidade(estado, nomeCidade) {
    let cidade = nomeCidade.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase();
    try {
        const {
            data
        } = await axios(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
        const arrayCidades = [data];
        for (const objeto of arrayCidades) {
            for (const valor of objeto) {
                if (valor.nome.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase() === cidade) {
                    return valor.id;
                }
            }
        }
        return `Cidade não encontrada`;

    } catch (erro) {
        console.log(erro.message)
        return res.status(erro.response.status).json({mensagem: erro.message});
    }

}

module.exports = buscaIdCidade;