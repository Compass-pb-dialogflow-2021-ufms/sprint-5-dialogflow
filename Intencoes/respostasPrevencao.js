module.exports = {
    prevencao: {
        mensagens: [`- Cuidados Básicos\n- Cuidados Básicos para profissionais da Saúde`],
        quickReplies: {
            title: `Quais medidas de prevenção você deseja ver ?`,
            buttons: ["Cuidados Básicos", "Cuidados Básicos para profissionais da Saúde"]
        }

    },
    cuidadosBasicosCivis: {

        mensagens: [`Vou citar alguns cuidados básicos que reduzem o risco geral de contrair ou transmitir infecções respiratórias agudas, incluindo o coronavírus: 
        \nLave com frequência as mãos até a altura dos punhos, com água e sabão, ou use álcool em gel 70%;
        \nAo tossir ou espirrar, cubra o nariz e boca com lenço ou com o braço. Não use as mãos;
        \nEvite tocar nos olhos, nariz e boca com as mãos não lavadas;
        \nNão compartilhe objetos pessoais;
        \nMantenha os ambientes bem ventilados; 
        \nTenha um comportamento amigável mas sem o contato físico, ou seja, sem apertos do mão, beijos e abraços;
        \nEvite aglomerações se estiver doente;
        \nQuando precisar sair de sua residência, sempre utilize máscaras caseiras feitas de tecido.`,
            `Você também pode assistir o video informativo do Ministério da Saúde :https://www.youtube.com/watch?v=cvdskDhw-Ps .`
        ],
        quickReplies: {
            title: `Posso ajudar em algo mais ?`,
            buttons: ["Sim, mostrar Menu", "Não, era só isso"]
        }
    },
    cuidadosBasicosProfissionais: {
        mensagens: [`Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelecidas. 
        \nAo prestar serviços que atendam casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:
        \nPara serviços em ambulatório: uso de máscara cirúrgica e luvas descartáveis.
        \nPara o atendimento em UPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de proteção ou protetor facial.
        \nAlém disso, para a realização de procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95.`],
        quickReplies: {
            title: `Posso ajudar em algo mais ?`,
            buttons: ["Sim, mostrar Menu", "Não, era só isso"]
        }
    }
}