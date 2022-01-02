const acoesPaliativas = {
    tela: {
        naoLiga: `Primeiramente REINICIE o computador, se não funcionar tente os próximos passos:
                        \n1 - Desconecte a tela do computador
                        \n2 - Remova possíveis sujeiras das entradas
                        \n3 - Aguarde alguns segundos 
                        \n4 - Conecte novamente a tela
                        \n\n Outra solução viável é trocar a tela de entrada(Se houver alguma disponível)`
    },
    teclado: {
        naoLiga: `Primeiramente REINICIE o computador, se não funcionar tente os próximos passos:
                        \n1 - Desconecte o teclado do computador
                        \n2 - Remova possíveis sujeiras das entradas
                        \n3 - Aguarde alguns segundos 
                        \n4 - Conecte novamente o teclado
                        \n\n Outra solução viável é trocar o teclado de entrada(Se houver alguma disponível)`
    },
    mouse: {
        naoLiga: `Primeiramente REINICIE o computador, se não funcionar tente os próximos passos:
                        \n1 - Desconecte o mouse do computador
                        \n2 - Remova possíveis sujeiras das entradas
                        \n3 - Aguarde alguns segundos 
                        \n4 - Conecte novamente o mouse
                        \n\n Outra solução viável é trocar o mouse de entrada(Se houver alguma disponível)`
    },
    webcam: {
        naoLiga: `Primeiramente REINICIE o computador, se não funcionar tente os próximos passos:
                        \n1 - Desconecte a webcam do computador
                        \n2 - Remova possíveis sujeiras das entradas
                        \n3 - Aguarde alguns segundos 
                        \n4 - Conecte novamente a webcam
                        \n\n Outra solução viável é trocar a webcam de entrada(Se houver alguma disponível)`
    },
    gabinete: {
        naoLiga: `1 - Verifique se a tomada na qual o computador apresenta-se conectado , está transmitindo energia. Uma vez que sim siga os próximos passos:
                    \n2 - Retire o computador da energia
                    \n3 - Aguarde alguns segundos 
                    \n4 - Conecte novamente o computador a tomada
                    `,
        barulho: `1 - Verifique se tem um objeto ou algo do tipo impedindo as saídas de ar do gabinete. Uma vez que não, siga os próximos passos:
                    \n2 - Retire o computador da energia
                    \n3 - Aguarde alguns segundos 
                    \n4 - Conecte novamente o computador a tomada
        `
    },
    computador: {
        naoLiga: `1 - Verifique se a tomada na qual o computador apresenta-se conectado , está transmitindo energia. Uma vez que sim siga os próximos passos:
                    \n2 - Retire o computador da energia
                    \n3 - Verifique se todos cabos estão bem conectados ao computador
                    \n4 - Aguarde alguns segundos 
                    \n5 - Conecte novamente o computador a tomada`,
        lento: `1 - REINICIE o computador, se não funcionar tente os próximos passos:
                    \n2 - Abra o antivírus do computador
                    \n3 - Mande ele executar uma varredura na sua maquina atrás de vírus
                    \n4 - Ao final da varredura, se alguma ameaça encontrada, peça para o antivírus eliminar
                    \n5 - E reinicie o computador novamente`
    },

    caixaDeSom: {
        semSom: `Primeiramente REINICIE o computador, se não funcionar tente os próximos passos:
                \n1 - Abra algum video ou algo que faça som para descobrir se algo deu certo
                \n2 - Desconecte as caixas de som do computador
                \n3 - Remova possíveis sujeiras das entradas
                \n4 - Aguarde alguns segundos 
                \n5 - Conecte novamente as caixas
                \n\n Outra solução viável é trocar as caixinhas de entrada(Se houver alguma disponível)`

    },
    roteador: {
        semInternet: `Primeiramente REINICIE o roteador, se não funcionar tente os próximos passos:
    \n1 - Desconecte os cabo ligados ao roteador
    \n2 - Remova possíveis sujeiras das entradas
    \n3 - Aguarde alguns segundos 
    \n4 - Conecte novamente os cabos`,

        naoLiga: `1 - Verifique se a tomada na qual o roteador apresenta-se conectado , está transmitindo energia. Uma vez que sim siga os próximos passos:
    \n2 - Retire o roteador da energia
    \n3 - Aguarde alguns segundos 
    \n4 - Conecte novamente o roteador a tomada`

    },
    //software
    internet: {
        semInternet: `Primeiramente REINICIE o computador, se não funcionar tente os próximos passos:
    \n1 - Desconecte o cabo da internet(Geralmente, o cabo azul) do computador
    \n2 - Remova possíveis sujeiras das entradas
    \n3 - Aguarde alguns segundos 
    \n4 - Conecte novamente o cabo
    \n\n Outra solução viável: 
    \n1 - Verifique se a tomada na qual o roteador apresenta-se conectado , está transmitindo energia. Uma vez que sim siga os próximos passos:
    \n2 - Retire o roteador da energia
    \n3 - Aguarde alguns segundos 
    \n4 - Conecte novamente o roteador a tomada `
    }
}
module.exports = acoesPaliativas;