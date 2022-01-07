module.exports = {
    inicioPreDiagnostico: {
        mensagens: [`Vou te fazer algumas perguntas relacionadas aos sintomas do Coronavírus.
        \nVale lembrar que esta consulta NÃO é um diagnóstico e sim uma orientação para caso você precise de um exame médico`, `Vamos lá ?`],
        quickReplies: ["Vamos lá", "Não"]
    },

    simPrediagnostico: {
        mensagens: [`Você pertence a algum desses grupos citados a seguir?`,
        `- Pessoas com mais de 60 anos; 
        \n- Gestantes;
        \n- Pessoas com doenças crônicas (como: Diabetes, doenças cardiovasculares ou pulmonares);
        \n- Pessoas em tratamento contra o câncer`
        ],
        quickReplies: ["Pertenço", "Não Pertenço"]
    },

    naoPrediagnostico: {
        mensagens: [`Tudo bem, caso queira fazer um pré diagnóstico mande uma mensagem.`, 'Posso ajudar em algo mais?'],
        quickReplies: ["Sim, mostrar MENU", "Não, era só isso"]
    },

    simGrupoDeRisco: {
        mensagens: [`Ok. Pelo o que você me contou, vejo que você se enquadra no grupo de risco.\n\nVamos continuar.`,
            `Você teve febre maior que 37,8ºC nos últimos 7 dias?`
        ],
        quickReplies: ["Tive", "Não Tive"]
    },

    naoGrupoDeRisco: {
        mensagens: [`Ok. Pelo o que você me contou, vejo que você não se enquadra no grupo de risco.\n\nVamos continuar.`,
            `Você teve febre maior que 37,8ºC nos últimos 7 dias?`
        ],
        quickReplies: ["Tive", "Não Tive"]
    },

    febre: {
        mensagens: [`Ok, vamos seguir`,
            `Você apresentou algum desses sintomas ?
            \n- Coriza ou nariz entupido;
            \n- Cansaço;
            \n- Dor de cabeça;
            \n- Dores no corpo ou abdominais;
            \n- Dor de garganta ;
            \n- Diarréia ou mal estar;
            \n- Tosse;
            \n- E Perda do olfato ou paladar`
        ],
        quickReplies: ["Sim", "Não"]
    },

    simSintomasLeves: {
        mensagens: [`Quantos sintomas desses você apresentou?
        \n- Coriza ou nariz entupido;
        \n- Cansaço;
        \n- Dor de cabeça;
        \n- Dores no corpo ou abdominais;
        \n- Dor de garganta ;
        \n- Diarréia ou mal estar;
        \n- Tosse;
        \n- E Perda do olfato ou paladar`],
        quickReplies: ["1", "2", "3", "Mais de Três"]
    },

    naoSintomasLeves: {
        mensagens: [`E você sentiu algum desses sintomas citados?
                    \n- Convulsão ou Vômito;
                    \n- Dificuldade para respirar;
                    \n- Sensação de desmaio;
                    \n- Dedos azulados e pálidos.`],
        quickReplies: ["Senti", "Não Senti"]
    },

    qtdSintomasLeves: {
        mensagens: [`E você usou algum medicamento para tratar os sintomas?`],
        quickReplies: ["Sim", "Não"]
    },

    simRemedio: {
        mensagens: [`Sente que melhorou de todos os sintomas?`],
        quickReplies: ["Melhorei", "Não Melhorei"]
    },

    simMelhora: {
        mensagens: [`Ótimo! Sem sintomas gripais. `,
        `E você sentiu algum desses sintomas citados?
        \n- Convulsão ou Vômito;
        \n- Dificuldade para respirar;
        \n- Sensação de desmaio;
        \n- Dedos azulados e pálidos.`
        ],
        quickReplies: ["Senti", "Não Senti"]
    },

    cenarioComGrupoDeRisco: [
        {
            cenario: 'A1',
            codigo: '1000',
            mensagem: [`Que bom! Pelas informações que você me disse, neste momento você não tem suspeita de infecção pelo Coronavírus. 
            \nMas atenção, caso você sinta que se enquadra em alguns dos sintomas ligue para o Disque Saúde 136. `, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A2',
            codigo: '1001',
            mensagem: [`Bom, pelo o que você me contou há baixa suspeita de você estar com Coronavírus. Apesar disso, você está sentindo alguns sintomas que precisam de atenção. 
            \nÉ importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.`, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A3',
            codigo: '1010',
            mensagem: [`Pelo o que você me disse, neste momento você apresenta um quadro gripal com poucos   sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus. 
            \nÉ importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.`, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A4',
            codigo: '1011',
            mensagem: [`Apesar de poucos sinais de infecção pelo Coronavírus, você me contou que está com alguns sintomas que precisam de atenção. 
            \nSe você sentir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.`, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A5',
            codigo: '1020',
            mensagem: [`Bom, pelo o que você me contou, neste momento você apresenta um quadro gripal com sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus.
            \nMesmo assim, é importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.`, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A6',
            codigo: '1021',
            mensagem: [`Bom, pelo o que você me disse, neste momento você apresenta um quadro gripal com sintomas leves e é baixa a probabilidade de infecção pelo Coronavírus. Apesar disso, você me contou que está com alguns sintomas que precisam de atenção.
            \nSe você sintir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.`, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A7',
            codigo: '1100',
            mensagem: [`Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril e que pode ter uma baixa suspeita de infecção pelo Coronavírus.
            \nPorém é preciso atenção! Se esse quadro vier a incluir mais sintomas e a febre não passar, ligue para o Disque Saúde 136.`, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A8',
            codigo: '1101',
            mensagem: [`Pelas informações que você me contou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais de que pode estar com Coronavírus.
            \nMinha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações.`, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A9',
            codigo: '1110',
            mensagem: [`Pelas informações que você me contou, neste momento você apresenta um quadro febril com poucos sintomas de gripe, podendo indicar uma baixa suspeita de infecção pelo Coronavírus. 
            \nMas atenção, se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações. `, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A10',
            codigo: '1111',
            mensagem: [`Então, pelas informações que você me indicou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais de que pode estar com Coronavírus.
            \nMinha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações. `, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A11',
            codigo: '1120',
            mensagem: [`Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril com alguns sintomas de gripe, podendo indicar uma suspeita de infecção pelo Coronavírus.
            \nFique atento! Se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações.`, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A12',
            codigo: '1121',
            mensagem: [`Pelas informações que você me indicou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais de que pode estar com Coronavírus.
            \nMinha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações.`, `E não esqueça ,por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo sua saúde em dia e realizando as medidas de prevenção necessárias.
            \nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
    ],
    cenarioSemGrupoDeRisco: [{
            cenario: 'A1',
            codigo: '0000',
            mensagem: [`Que bom! Pelas informações que você me disse, neste momento você não tem suspeita de infecção pelo Corona vírus. Mas atenção, caso você sinta que se enquadra em alguns dos sintomas ligue para o Disque Saúde 136.`
            , ` Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A2',
            codigo: '0001',
            mensagem: [`Bom, pelo o que você me contou há baixa suspeita de você estar com Coronavírus. Apesar disso, você está sentindo alguns sintomas que precisam de atenção. É importante se cuidar ! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.  `, ` Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A3',
            codigo: '0010',
            mensagem: [`Pelo o que você me disse, neste momento você apresenta um quadro gripal com poucos sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus. É importante se cuidar ! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.  `, ` Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A4',
            codigo: '0011',
            mensagem: [`Apesar de poucos sinais de infecção pelo Coronavírus, você me contou que está com alguns sintomas que precisam de atenção. \nSe você sintir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.  `, ` Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A5',
            codigo: '0020',
            mensagem: [` Bom, pelo o que você me contou, neste momento você apresenta um quadro gripal com sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus. 
            Mesmo assim, é importante se cuidar ! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.  `, ` Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A6',
            codigo: '0021',
            mensagem: [`Bom, pelo o que você me disse, neste momento você apresenta um quadro gripal com sintomas leves e é baixa a probabilidade de infecção pelo Coronavírus. Apesar disso, você me contou que está com alguns sintomas que precisam de atenção.    
            Se você sintir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136.  `, ` Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir. `]
        },
        {
            cenario: 'A7',
            codigo: '0100',
            mensagem: [`Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril e que pode ter uma baixa suspeita de infecção pelo Coronavírus. 
            Porém é preciso atenção ! Se esse quadro vier a incluir mais sintomas e a febre não passar, ligue para o Disque Saúde 136.`, ` Cuide-se ! E se puder, fique em casa ! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir.`]
        },
        {
            cenario: 'A8',
            codigo: '0101',
            mensagem: [`Pelas informações que você me contou, você apresenta um quadro febril com outros sintomas   que precisam de atenção, pois você apresenta sinais de que pode estar com Coronavírus.  
            Minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações.`, ` Cuide-se ! E se puder, fique em casa ! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir.`]
        },
        {
            cenario: 'A9',
            codigo: '0110',
            mensagem: [`Pelas informações que você me contou, neste momento você apresenta um quadro febril com poucos sintomas de gripe, podendo indicar uma baixa suspeita de infecção pelo Coronavírus. 
            Mas atenção,  se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações`, ` Cuide-se ! E se puder, fique em casa ! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir.`]
        },
        {
            cenario: 'A10',
            codigo: '0111',
            mensagem: [`Então, pelas informações que você me indicou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais de que pode estar com Coronavírus.  
            Minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações.`, ` Cuide-se ! E se puder, fique em casa ! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir.`]
        },
        {
            cenario: 'A11',
            codigo: '0120',
            mensagem: [`Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril com poucos sintomas de gripe, podendo indicar uma baixa suspeita de infecção pelo Coronavírus. 
            Fique Atento! Se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações`, ` Cuide-se ! E se puder, fique em casa ! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir.`]
        },
        {
            cenario: 'A12',
            codigo: '0121',
            mensagem: [`Pelas informações que você me contou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta grandes chances de estar com Coronavírus.   
            Minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 para mais orientações.`, ` Cuide-se ! E se puder, fique em casa ! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se prevenir.`]
        },
    ]

}