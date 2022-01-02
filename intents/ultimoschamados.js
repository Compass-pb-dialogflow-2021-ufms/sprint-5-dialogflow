function ultimoschamados(ultimosChamados){
    let last = (Object.keys(ultimosChamados).length) - 1 ;
    let text = "Nome: " + ultimosChamados[last].nome + "\n" +
                "CPF: " + ultimosChamados[last].cpf + "\n" +
                "Descrição: " + ultimosChamados[last].descricao
    return text;
}

module.exports = ultimoschamados