const dbInfoCovid = require('../utils/dbUtilities');
const hourOfTheDay = require('../utils/getGreetingTime');

async function welcomeUser(req, res) {
    const welcomeAnswers = ['Sobre qual assunto você quer saber?', 'Como posso te ajudar?', 'O que gostaria de saber?']

    if (req.body.originalDetectIntentRequest.source === 'line') {
        const idUserSaved = await dbInfoCovid.saveUserMessageId(req.body.originalDetectIntentRequest.payload.data.source.userId);

        if (idUserSaved) {
            return res.send({
                "fulfillmentMessages": [{
                        "text": {
                            "text": [
                                `Olá novamente! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus`
                            ]
                        },
                    },
                    {
                        "text": {
                            "text": [
                                `Você pode tirar dúvidas comigo sobre prevenção, contágio ou realizar um pré-diagnóstico.\n\n${welcomeAnswers[Math.floor(Math.random() * 3)]}\n\nPrevenção, Contágio ou Pré-diagnóstico?`
                            ]
                        },
                    },
                ]
            })
        }

    }

    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Olá! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.\n\nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio ou realizar um pré-diagnóstico, por exemplo.\n\nE não se preocupe, pois todos os dados que eu te contar são retirados de fontesseguras que você pode confiar`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `${welcomeAnswers[Math.floor(Math.random() * 3)]}\n\nPrevenção, Contágio ou Pré-diagnóstico?`
                    ]
                },
            },

        ]
    })

}

function showMainMenu(req, res) {
    const menuAnswers = ['Sobre qual assunto você quer saber?', 'Como posso te ajudar?', 'O que gostaria de saber?'];

    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Você pode tirar dúvidas comigo sobre prevenção, contágio ou realizar um pré-diagnóstico.\n\n${menuAnswers[Math.floor(Math.random() * 3)]}\n\nPrevenção, Contágio ou Pré-diagnóstico?`
                ]
            },
        }]
    })
}

function helpUser(req, res) {

    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Eu sou uma assistente virtual treinada para tirar suas duvidas relacionadas ao Coronavirus\n\nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio ou realizar um pré-diagnóstico, por exemplo.\n\nE não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar`,
                ]
            }
        }]
    })
}

async function farewellUser(req, res) {

    if (req.body.originalDetectIntentRequest.source === 'linse')
        await dbInfoCovid.removeUserMesseId(req.body.originalDetectIntentRequest.payload.data.source.userId);


    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Se você precisar de mais informações sobre o Coronavírus, pode me chamar.\n\nE caso sentir que se enquadra em alguns dos sintomas, ligue para o Disque Saúde 136! `,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `${hourOfTheDay.getGreetingTime()}`
                    ]
                },
            },

        ]
    })
}

function askWichPrevention(req, res) {
    const askPrevention = ['Me conta, qual a sua dúvida?', 'Qual a sua duvida?', 'Me diga, qual a sua dúvida relacionada ao Coronavírus?']
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Eu sei ótimas dicas de prevenções básica e do profissional da saúde.`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `${askPrevention[Math.floor(Math.random() * 3)]}\n\nPrevenção básica ou Prevenção do profissional?`
                    ]
                },
            },

        ]
    })
}

function getBasicPrevention(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Vou citar alguns cuidados básicos que reduzem o risco geral de contrair ou transmitir infecções respiratórias agudas, incluindo o coronavírus:\n\n Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou use álcool em gel 70%;\n\nAo tossir ou espirrar, cubra o nariz e boca com lenço ou com o braço. Não use as mãos;\n\nEvite tocar nos olhos, nariz e boca com as mãos não lavadas\n\n Não compartilhe objetos pessoais;\n\n Mantenha os ambientes bem ventilados;\n\nTenha um comportamento amigável mas sem o contato físico, ou seja, sem apertos do mão, beijos e abraços;\n\n Evite aglomerações se estiver doente\n\nQuando precisar sair de sua residência, sempre utilize máscaras caseiras feitas de tecido.`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `Você também pode assistir o video informativo do Ministério da Saúde: https://www.youtube.com/watch?v=cvdskDhw-Ps\n\nPosso ajudar em algo mais?`
                    ]
                },
            },

        ]
    })
}

function redirectToMainMenu(req, res) {
    return res.send({
        "followupEventInput": {
            "name": "redirecionaMenuPrincipalEvnt",
            "languageCode": "pt-BR",
        }
    })
}

function redirectToEndConversation(req, res) {
    return res.send({
        "followupEventInput": {
            "name": "encerrarDialogoEnvt",
            "languageCode": "pt-BR",
        }
    })
}

function getHealthProfessionalPrevention(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelecidas.\n\nAo prestar serviços que atendam casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:\n\nPara serviços em ambulatório: O uso de máscara cirúrgica e luvas descartáveis\n\nPara o atendimento em UPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de proteção ou protetor facial.\n\n Além disso, para a realização de procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `Posso ajudar em algo mais?`
                    ]
                },
            },

        ]
    })
}

function askWichContagion(req, res) {

    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Eu posso te informar sobre as principais formas de contágio e sobre o período de incubação por coronavírus.`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `Qual a sua duvida?\n\nFormas de contágio ou Período de incubação?`
                    ]
                },
            },

        ]
    })
}

function getInfoContagion(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `A transmissão do vírus acontece por via respiratória, através de gotículas que se espalham pelo ar quando uma pessoa que está infectada tosse ou espirra\n\nTambém é possível se contaminar por contato pessoal com as secreções infectadas, como: gotículas de saliva; espirro; tosse; catarro; contato pessoal próximo, como toque ou aperto de mão; e o contato com roupas e objetos contaminados.`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `Posso ajudar em algo mais?`
                    ]
                },
            },

        ]
    })
}

function getInfoIncubation(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `O "período de incubação" significa o tempo entre a contração do vírus e o início dos sintomas da doença.\n\nEsse tempo varia de 1 a 14 dias, mas geralmente pode ocorrer em torno de 5 dias\n\nNo entanto, dados preliminares do Coronavírus sugerem que a transmissão possa ocorrer também mesmo sem o aparecimento de sinais e sintomas`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `Posso ajudar em algo mais?`
                    ]
                },
            },

        ]
    })
}

function askPreDiagnosis(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Vou te fazer algumas perguntas relacionadas aos sintomas do Coronavírus.\n\nVale lembrar que esta consulta NÃO é um diagnóstico e sim uma orientação para caso você precise de um exame médico`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `Podemos começar?`
                    ]
                },
            },

        ]
    })
}

function askPreDiagnosisSecond(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Tudo bem, caso queira fazer um pré diagnóstico mande uma mensagem.`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `Posso ajudar em algo mais?`
                    ]
                },
            },

        ]
    })
}

function defaultFallBack(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Desculpe, não consegui entender.`,
                ]
            }
        }]
    })
}

function askRiskGroup(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Você pertence a algum desses grupos citados a seguir?`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `Pessoas com mais de 60 anos;\nGestantes;\nPessoas com doenças crônicas (como: Diabetes, doenças cardiovasculares ou pulmonares);\nPessoas em tratamento contra o câncer`
                    ]
                },
            },
        ]
    })
}

function userBelongRiskGroup(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Ok. Pelo o que você me contou, vejo que você se enquadra no grupo de risco.\n\nVamos continuar.`,
                    ]
                },

            },
            {
                "text": {
                    "text": [
                        `Você teve febre maior que 37,8ºC nos últimos 7 dias?`
                    ]
                },
            },
        ]
    })
}

function redirectToMildSymptoms(req, res) {

    return res.send({
        "followupEventInput": {
            "name": "redirecionaSintomaLeve",
            "languageCode": "pt-BR",
        }
    })
}

function askMildSymptoms(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `A seguir vou citar alguns sintomas e gostaria que você me informasse se teve algum deles. E se sim, quantos você sentiu`,
                    ]
                },
            },
            {
                "text": {
                    "text": [
                        `- Coriza ou nariz entupido;\n- Cansaço;\n- dor de cabeça;\n- Dores no corpo ou abdominais;\n- Dor de garganta;\n- Diarréia ou mal estar;\n- Tosse;\n- E Perda do olfato ou paladar;\n\nVocê sentiu\nNenhum, 1, 2, 3 ou Mais de três Sintomas?`
                    ]
                },
            },
        ]
    })
}

function identifySymptoms(req, res) {

    const symptomsQuantity = req.body.queryResult.parameters.qtdSintomas;

    if (parseInt(symptomsQuantity) > 3 || symptomsQuantity === 'mais de três' || symptomsQuantity === 'mais de três sintomas') {
        return res.send({
            "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            `Entendi, você está com vários sintomas de gripe.`,
                        ]
                    },
                },
                {
                    "text": {
                        "text": [
                            `E você usou algum medicamento para tratar os sintomas? `
                        ]
                    },
                },
            ]
        })
    } else if (symptomsQuantity === '3') {
        return res.send({
            "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            `Entendi, você está com poucos sintomas de gripe.`,
                        ]
                    },
                },
                {
                    "text": {
                        "text": [
                            `E você usou algum medicamento para tratar os sintomas?`
                        ]
                    },
                },
            ]
        })
    }

    return res.send({
        "followupEventInput": {
            "name": "redirecionaSintomaGrave",
            "languageCode": "pt-BR",
        }
    })
}

function askIfBetter(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Sente que melhorou?`,
                ]
            },
        }]
    })
}

function redirectToStrongSymptoms(req, res) {
    return res.send({
        "followupEventInput": {
            "name": "redirecionaSintomaGrave",
            "languageCode": "pt-BR",
        }
    })
}

function askStrongSymptoms(req, res) {
    return res.send({
        "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `E você sentiu algum desses sintomas citados? `,
                    ]
                },
            },
            {
                "text": {
                    "text": [
                        `- Convulsão ou Vômito;\n- Dificuldade para respirar;\n- Sensação de desmaio;\n- Dedos azulados e pálidos`
                    ]
                },
            },
        ]
    })
}

function redirectToResult(req, res) {

    return res.send({
        "followupEventInput": {
            "name": "redirecionaParaResultado",
            "languageCode": "pt-BR",
        }
    })
}

function showResult(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Aqui esta o resultado do seu pré-diagnostico`,
                ]
            },
        }, ]
    })
}

module.exports = {
    welcomeUser,
    helpUser,
    showMainMenu,
    farewellUser,
    askWichPrevention,
    getBasicPrevention,
    redirectToMainMenu,
    redirectToEndConversation,
    getHealthProfessionalPrevention,
    askWichContagion,
    getInfoContagion,
    getInfoIncubation,
    askPreDiagnosis,
    askPreDiagnosisSecond,
    askRiskGroup,
    userBelongRiskGroup,
    redirectToMildSymptoms,
    askMildSymptoms,
    identifySymptoms,
    askIfBetter,
    redirectToStrongSymptoms,
    askStrongSymptoms,
    redirectToResult,
    showResult,
    defaultFallBack
}