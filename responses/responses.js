const responses = 
{
    aboutMe: ['Esse bot surgiu como uma demanda gerada por um exercício a ser realizado durante a quinta sprint do meu programa de bolsas na Compass UOL. A ideia do exercício é um bot que consiga informar o usuário sobre o vírus SARS-CoV-2.\n\n' + 
    'Quem fez ele -> O desenvolvedor responsável por esse bot foi o Horiel Corrêa Costa. No momento que ele fez, ele era um aluno de segundo semestre de faculdade e sua experiência profissional se resumia a 2 meses de estágio. Esse foi o sexto bot que ele fez, portanto, tenha paciência com com ele :)\n\nPosso te ajudar com mais alguma coisa?'],


    agree: {
        basicprevention: 'mainMenu',
        
        healthprofessionalprevention: 'mainMenu',

        formsofcontagion: 'mainMenu',

        incubationperiod: 'mainMenu',

        prediagnosis: 'riskGroup',

        prediagnosisno: 'mainMenu'
    },

    
    basicPrevention: ['Vou citar alguns cuidados básicos que reduzem o risco geral de contrair ou transmitir infecções respiratórias agudas, incluindo o coronavírus:' +
    '\n\n🤚 Lave com frequência as mãos até a altura dos punhos , com água e sabão, ou álcool em gel 70%;' +
    '\n\n🤧 Ao tossir ou espirrar, cubra o nariz e boca com lenço ou com o braço. Não use as mãos;' +
    '\n\n👀 Evite tocar os olhos, nariz e boca com as mãos não lavadas;' +
    '\n\n📱 Não compartilhe objetos pessoais;' +
    '\n\n🏠 Mantenha os ambientes bem ventilados;' +
    '\n\n👋 Tenha um comportamento amigável mas sem o contato físico, ou seja, sem apertos de mãos, beijos e abraços;' +
    '\n\n👥 Evite aglomerações se estiver doente;' +
    '\n\n😷 Quando precisar sair de sua residência, sempre utilize máscaras caseiras feitas de tecido.',

    'Você também pode assistir o vídeo informativo do Mistério da Saúde: https://www.youtube.com/watch?v=cvdskDhw-Ps',

    'Posso ajudar em algo mais?'],


    casesInBrazil: ['Essa funcionalidade ainda está em processo de desenvolvimento e portanto não está disponível.',
    'Posso ajudar com algo mais?'],


    contagion: ['Eu posso te informar sobre as principais formas de contágio e sobre o período de incubação por Coronavírus. 🙂',
    
    'Qual a sua dúvida?'],


    desagree: {
        basicprevention: 'goodbye',
        
        healthprofessionalprevention: 'goodbye',

        formsofcontagion: 'goodbye',

        incubationperiod: 'goodbye',

        prediagnosisno: 'goodbye'
    },


    fallback: {
        default: ['Desculpe, não consegui entender.',

        'Eu ainda não entendi o que você disse.',

        'Vamos tentar novamente...'],

        prevention: ['Desculpe, algumas perguntas ainda não consigo te responder. 😓',

        'Me diga, qual a sua dúvida relacionada ao Coronavírus?'],

        contagion: ['Desculpe, algumas perguntas ainda não consigo te responder. 😓',

        'Me diga, qual a sua dúvida relacionada ao Coronavírus?',],

        riskgroup: ['Não entendi. Para continuarmos, você precisa me indicar se pertence a algum desses grupos citados:',
        
        '👨‍🦳 Pessoas com mais de 60 anos;' +
        '\n🤰 Gestantes;' +
        '\n🤒 Pessoas com doenças crônicas (como: Diabetes, doenças cardiovasculares ou pulmonares);'+ 
        '\n💊 Pessoas em tratamento contra o câncer.',
        
        ['Pertenço', 'Não pertenço']],

        fever: ['Não entendi.',
        
        'Para continuarmos, você precisa me indicar se teve ou não febre maior que 37,8°C nos últimos 7 dias. 🌡',
        
        ['Tive febre', 'Não tive febre']],

        minorsymptoms: ['Não entendi. Para continuarmos, você precisa me indicar se apresentou ou não algum desses sintomas citados',
        
        '-Coriza ou nariz entupido;' +
        '\n-Cansaço;' +
        '\n-Dor de cabeça;' +
        '\n-Dores no corpo ou abdominais;' +
        '\n-Dor de garganta;' +
        '\n-Diarréia ou mal estar;' +
        '\n-Tosse;' +
        '\n-E perda do olfato ou paladar.',
        
        ['Nenhum', '1', '2', '3', '4 ou mais sintomas']],

        takingmedicine: ['Não entendi. 😓',
        
        'Para continuarmos, você precisa me indicar se usou ou não algum medicamento. 💊',
        
        ['Usei medicamentos', 'Não usei medicamentos']],

        gotbetter: ['Não entendi. 😓',
        
        'Para continuarmos, você precisa me indicar se melhorou ou não com o medicamento.',
        
        ['Melhorei', 'Não melhorei']],

        severesymptoms: ['Não entendi. 😓',

        'Para concluir o pré-diagnóstico, você precisa me indicar se teve ou não algum desses sintomas citador:' + 
        '\n\n-Convulsão ou Vômito;' + 
        '\n-Dificuldade para respirar;' +
        '\n-Sensação de desmaio;' + 
        '\n-Dedos azulados e pálidos.',
    
        ['Sim', 'Não']]
    },


    fever: [(adverb) => {return `Ok. Pelo o que você me contou, vejo que você${adverb} se enquadra no grupo de risco. \n\nVamos continuar.`},
    
    'Você teve febre maior que 37,8°C nos últimos 7 dias? 🌡'],


    formsOfContagion: ['A transmissão do vírus acontece por via respiratória, através de gotículas que se espalham pelo ar quando uma pessoa que está infectada tosse ou espirra. 💦' +
    '\n\nTambém é possível se contaminar por contato pessoal com as secreções infectadas, como: gotículas de saliva; espirro; tosse; catarro; contato pessoal próximo, como toque ou aperto de mão; e o contato com roupas e objetos contaminados.',

    'Posso ajudar em algo mais?'],


    goodbye: ['Se você precisar de mais informações sobre o Coronavírus, pode me chamar.' +
    '\n\nE caso sentir que se enquadra em alguns sintomas, ligue para o Disque Saúde 136!☎',
    (greeting) => {return `Tenha ${greeting}. 👋`}],


    gotBetter: ['Sente que melhorou?'],


    healthProfessionalPrevention: ['Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelicidas. 👍' +
    '\n\nAo prestar serviços que atendem casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:' +
    '\n\n⚠ Para serviços em ambulatório: O uso de máscara cirúrgica e luvas descartáveis.' +
    '\n\n⚠ Para o atendimento em UPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de protenção ou protetor facial.' +
    '\n\n⚠ Além disso, para a realização de procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95. 😷',

    '\n\nPosso ajudar em algo mais?'],


    help: ['Olá, sou a doutora Silvia. Tenho três funções principais, informar você como se prevenir, te contar como o Coronavírus se espalha e seu período de incubaçãote, além de poder realizar um pré-diagnóstico baseado em seus sintomas e outras informações.' +
    '\nPara conseguir utilizar essas funções, basta dizer qual você deseja utilizar, seja usando as respostas rápidas disponíveis, ou mesmo digitando o que você deseja, como por exemplo "Como posso me prevenir do Coronavírus", ou mesmo me perguntar "Qual é o perído de incubação do Coronavírus?", que irei te responder 😉',
    
    '\n\nComo posso te ajudar?'],


    howManyMinorSymptoms: {
        
    },


    incubationPeriod: ['O "período de incubação" significa o tempo da contração do vírus e o início dos sintomas da doença.' +
    '\n\nEsse tempo varia de 1 a 14 dias, mas geralmente pode ocorrer em torno de 5 dias.' +
    '\n\n⚠ No entanto, dados prelimires do Coronavírus sugerem que a transmissão possa ocorrer também mesmo sem o aparecimento de sinais e sintomas.',

    'Posso ajudar em algo mais?'],


    mainMenu: ['Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico.', 
    
    '\n\nSobre qual assunto quer saber?',
    
    '\n\nComo posso te ajudar?'],


    minorSymptoms: ['A seguir vou citar alguns sintomas e gostaria que você me informasse se teve algum deles. E se sim, quantos sentiu.',

    '-Coriza ou nariz entupido;' +
    '\n-Cansaço;' +
    '\n-Dor de cabeça;' +
    '\n-Dores no corpo ou abdominais;' +
    '\n-Dor de garganta;' +
    '\n-Diarréia ou mal estar;' +
    '\n-Tosse;' +
    '\n-E perda do olfato ou paladar.' ],


    preDiagnosis: ['Vou te fazer algumas perguntas relacionadas aos sintomas do Coronavírus.' +
    '\n\nVale lembrar que esta consulta NÃO é um diagnóstico e sim uma orientação para caso você precise de exame médico.',

    'Vamos lá? 🙂'],


    preDiagnosisNo: ['Tudo bem, caso queira fazer um pré-diagnóstico mande uma mensagem. 👍',

    'Posso ajudar em algo mais?'],


    prevention: ['Eu sei ótimas dicas de prevenções básica e do profissional da saúde. 🙂',

    'Qual a sua dúvida?'],


    riskGroup : ['Você pertence a algum desses grupos citador a seguir?',

    '👨‍🦳 Pessoas com mais de 60 anos;' +
    '\n🤰 Gestantes;' +
    '\n🤒 Pessoas com doenças crônicas (como: Diabetes, doenças cardiovasculares ou pulmonares);'+ 
    '\n💊 Pessoas em tratamento contra o câncer.'],


    secondTimeInFallback: {
        default: ['Eu ainda não entendi o que você disse. Vamos tentar novamente...'],

        prevention: ['Ainda não consegui identificar a sua dúvida.' + 
        '\n\nVocê pode me perguntar sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo. 😊',

        'Me conta, qual a sua dúvida?'],

        contagion: ['Ainda não consegui identificar a sua dúvida.' + 
        '\n\nVocê pode me perguntar sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo. 😊',

        'Me conta, qual a sua dúvida?'],

        riskgroup: ['Desculpe, ainda não consegui entender. 😓',
        
        'Você pertence a algum dos grupos citados?',
        
        ['Sim', 'Não']],

        fever: ['Desculpa, ainda não consegui entender.',
        
        'Você teve febre maior que 37,8°C nos últimos 7 dias? 🌡',
        
        ['Sim', 'Não']],

        minorsymptoms: ['Desculpa, ainda não consegui entender.',
        
        'Quantos dos sintomas citador você apresenta?',
        
        ['Nenhum', '1', '2', '3', '4 ou mais sintomas']],

        takingmedicine: ['Desculpe, ainda não consegui entender.',
        
        'Você usou algum medicamento? 💊',
        
        ['Sim', 'Não']],

        gotbetter: ['Desculpe, ainda não consegui entender.',
        
        'Você melhorou com o medicamento?',
        
        ['Sim', 'Não']],

        severesymptoms: ['Desculpe, ainda não consegui entender.' +
        '\nVocê teve algum dos sintomas citados?',
        
        ['Sim', 'Não']]
    },


    severeSymptoms: ['Que bom! Sem sintomas de gripe. 😊',

    'Ótimo! Sem sintomas gripais. 😊',

    'E você sentiu algum desses sintomas citados a seguir?',

    '-Convulsão ou Vômito;' + 
    '\n-Dificuldade para respirar;' +
    '\n-Sensação de desmaio;' + 
    '\n-Dedos azulados e pálidos.'],


    showDiagnosis: {
        riskGroupNo: {
            feverNo: {
                severeSymptomsNo: {
                    minorSymptomsNone: ['Que bom! Pelas informações que você me disse, neste momento você não tem suspeita de infecção pelo Coronavírus. 👍' +
                    '\n\nMas atenção, caso você sinta que se enquadra em algum dos sintomas, ligue para o Disque Saúde 136. ☎',
                
                    'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsFew: ['Pelo o que você me disse, neste momento você apresenta um quadro gripal com poucos sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus. 👍' +
                    '\n\nÉ importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsMany: ['Bom, pelo o que você me contou, neste momento você apresenta um quadro gripal com sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus. 👍' +
                    '\n\nMesmo assim, é importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂']
                },

                severeSymptomsYes: {
                    minorSymptomsNone: ['Bom, pelo o que você me contou há baixa suspeita de você estar com Coronavírus. Apesar disso, você está sentindo alguns sintomas que precisam de atenção. ⚠' +
                    '\n\nÉ importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsFew: ['Apesar de poucos sinais de infecção pelo Coronavírus, você me contou  que está com alguns sintomas que precisam de atenção.' +
                    '\n\nSe você sentir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],
                    
                    minorSymptomsMany: ['Bom, pelo o que você me disse, neste momento você apresenta um quadro gripal com sintomas leves e é baixa a probabilidade de infecção pelo Coronavírus. Apesar disso, você me contou que está com alguns sintomas que precisam de atenção. ⚠' +
                    '\n\nSe você sentir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'Fique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂']
                }
            },

            feverYes: {
                severeSymptomsNo: {
                    minorSymptomsNone: ['Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril e que pode ter uma baixa suspeita de infecção pelo Coronavírus. 👍' +
                    '\n\nPorém é preciso atenção! Se esse quadro vier a incluir mais sintomas e a febre não passar, ligue para o Disque Saúde 136. ☎',
                
                    'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsFew: ['Pelas informações que você me contou, neste momento você apresenta um quadro febril com poucos sintomas de gripe, podendo indicar uma baixa suspeita de infecção pelo Coronavírus. ⚠' +
                    '\n\nMas atenção, se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsMany: ['Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril com alguns sintomas de gripe, podendo indicar uma suspeita de infecção pelo Coronavírus. ⚠' +
                    '\n\nFique atento! Se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂']
                },

                severeSymptomsYes: {
                    minorSymptomsNone: ['Pelas informações que você me contou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais que pode estar com Coronavírus. ⚠' +
                    '\n\nMinha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsFew: ['Então, pelas informações que você me indicou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais que pode estar com Coronavírus. ⚠' +
                    '\n\nMinha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],
                    
                    minorSymptomsMany: ['Pelas informações que você me contou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta grandes chances de estar com Coronavírus. ⚠' +
                    '\n\nMinha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'Cuide-se! E se puder, fique em casa! Sinta-se a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂']
                }
            }
        },


        riskGroupYes: {
            feverNo: {
                severeSymptomsNo: {
                    minorSymptomsNone: ['Que bom! Pelas informações que você me disse, neste momento você não tem suspeita de infecção pelo Coronavírus. 🙂' +
                    '\n\nMas atenção, caso você sinta que se enquadra em algum dos sintomas, ligue para o Disque Saúde 136. ☎',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsFew: ['Pelo o que você me disse, neste momento você apresenta um quadro gripal com poucos sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus.' +
                    '\n\nÉ importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsMany: ['Bom, Pelo o que você me contou, neste momento você apresenta um quadro gripal com sintomas leves, por isso há baixa suspeita de infecção pelo Coronavírus. 🙂' +
                    '\n\nMesmo assim, é importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂']
                },

                severeSymptomsYes: {
                    minorSymptomsNone: ['Bom, Pelo o que você me contou há baixa suspeita de você estar com Coronavírus. Apesar disso, você está sentindo alguns sintomas que precisam de atenção. ⚠' +
                    '\n\nÉ importante se cuidar! E caso você sinta que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsFew: ['Apesar de poucos sinais de infecção pelo Coronavírus, você me contou que está com alguns sintomas que precisam de atenção. ⚠' +
                    '\n\nSe você sentir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],
                    
                    minorSymptomsMany: ['Bom, Pelo o que você me disse, neste momento você apresenta um quadro gripal com sintomas leves e é baixa a probabilidade de infecção pelo Coronavírus. Apesar disso, você me contou que está com alguns sintomas que precisam de atenção. ⚠' +
                    '\n\nSe você sentir que esses sintomas estão persistindo ou se agravando, ligue para o Disque Saúde 136. ☎',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂']
                }
            },

            feverYes: {
                severeSymptomsNo: {
                    minorSymptomsNone: ['Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril e que pode ter uma baixa suspeita de infecção pelo Coronavírus. 🙂' +
                    '\n\nPorém é preciso atenção! Se esse quadro vier a incluir mais sintomas e a febre não passar, ligue para o Disque Saúde 136. ☎',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsFew: ['Pelas informações que você me contou, neste momento você apresenta um quadro febril com poucos sintomas de gripe, podendo indicar uma baixa suspeita de infecção pelo Coronavírus.' +
                    '\n\n⚠ Mas atenção, se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsMany: ['Bom, pelas informações que você me contou, neste momento você apresenta um quadro febril com alguns sintomas de gripe, podendo indicar uma suspeita de infecção pelo Coronavírus. 😕' +
                    '\n\n Fique atento! Se você sentir que esses sintomas estão persistindo ou se agravando, minha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂']
                },

                severeSymptomsYes: {
                    minorSymptomsNone: ['Pelas informações que você me contou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais de que pode estar com Coronavírus. ⚠' +
                    '\n\nMinha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],

                    minorSymptomsFew: ['Então, pelas informações que você me indicou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta sinais de que pode estar com Coronavírus. ⚠' +
                    '\n\nMinha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂'],
                    
                    minorSymptomsMany: ['Pelas informações que você me contou, você apresenta um quadro febril com outros sintomas que precisam de atenção, pois você apresenta grandes chances de estar com Coronavírus. ⚠' +
                    '\n\nMinha orientação é que você busque atendimento em uma Unidade de Saúde ou ligue para o Disque Saúde 136 ☎ para mais orientações.',
                
                    'E não se esqueça, por você se enquadrar no grupo de risco está mais suscetível ao contágio do Coronavírus. Então busque se cuidar, mantendo a sua saúde em dia e realizando as medidas de prevenção necessárias. 🤚😷' +
                    '\n\nFique a vontade para tirar dúvidas comigo sobre contágio e também saber como se previnir. 🙂']
                }
            }
        }
    },


    takingMedicine: [(adverb) => {return `Entendi, você está com ${adverb} sintomas de gripe.`},
    
    'E você usou algum medicamento para tratar os sintomas? 💊'],


    thirdTimeInFallback: {
        default: ['Desculpe, realmente não consegui entender o que você disse. Vamos parar por aqui.' +
        '\n\nCuide-se, e não se esqueça: caso você se enquadre em alguns dos sintomas, ligue para o Disque sáude 136. ☎',
    
        'Caso você precise de mais informações sobre o Coronavírus, pode me procurar! 👋'],

        prevention: 'Desculpe, não consegui identificar a sua dúvida. Vamos parar por aqui. 😓',

        contagion: 'Desculpe, não consegui identificar a sua dúvida. Vamos parar por aqui. 😓'
    },


    welcome: ['Olá! Sou a doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionas ao CoronaVírus. 👩‍🦰' + 
    '\n\nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.' +
    '\n\nE não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.',

    'Olá novamente! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas oa Coronavírus. 👩‍🦰',

    'Sobre qual assunto quer saber?',
    
    'Como posso te ajudar?']
}


module.exports = responses