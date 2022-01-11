const emoji = require("node-emoji");

const greetingMessage = () => {
  let h = new Date().getHours();
  if (h <= 5) return "uma ótima madrugada";
  if (h < 12) return "um excelente dia";
  if (h < 18) return "uma boa tarde";
  return "uma boa noite";
};

function welcome(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Olá!  Sou  a  Doutora  Silvia,  uma  assistente virtual  treinada  para  tirar  suas  dúvidas relacionadas  ao  Coronavírus.\n\nNeste  canal,  você  poderá  tirar  dúvidas comigo  sobre  prevenção,  contágio,  casos no  Brasil  ou  realizar  um  pré-diagnóstico, por  exemplo. ${emoji.get(
              "woman"
            )}\n\nE  não se preocupe,  pois  todos  os  dados que  eu  te  contar  são  retirados  de  fontes seguras  que  você  pode  confiar.\n `,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Sobre  qual  assunto  você  quer  saber?",
          quickReplies: ["Prevenção", "Contágio", "Pré-diagnóstico"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function closing(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Se  você  precisar  de  mais  informações sobre  o  Coronavírus,  pode  me  chamar. E  caso  sentir  que  se  enquadra  em alguns  dos  sintomas,  ligue  para  o Disque  Saúde  136! ${emoji.get(
              "telephone"
            )} `,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        text: {
          text: [`Tenha  ${greetingMessage()}. ${emoji.get("wave")}`],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function prevention(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Eu sei ótimas dicas de prevenções básica e do profissional da saúde.`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Qual a sua dúvida?",
          quickReplies: ["Prevenção básica", "Prevenção do profissional"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function preventionFallback(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [`Desculpe, algumas perguntas ainda não consigo te responder`],
        },
        platform: "TELEGRAM",
      },
      {
        text: {
          text: [`Me diga, qual a sua dúvida relacionada ao Coronavírus?`],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function basicPrevention(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Vou citar alguns cuidados básicos que reduzem o risco geral de contrair ou transmitir infecções respiratórias agudas, incluindo o coronavírus:\n\nLave com frequência as mãos até a altura dos punhos, com água e sabão, ou use álcool em gel 70%;\n\nAo tossir ou espirrar, cubra o nariz e boca com lenço ou com o braço. Não use as mãos;\n\nEvite tocar nos olhos, nariz e boca com as mãos não lavadas;\n\nNão compartilhe objetos pessoais;\n\nMantenha os ambientes bem ventilados;\n\nTenha um comportamento amigável mas sem o contato físico, ou seja, sem apertos do mão, beijos e abraços;\n\nEvite aglomerações se estiver doente;\n\nQuando precisar sair de sua residência, sempre utilize máscaras caseiras feitas de tecido.`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title:
            "Você também pode assistir o vídeo informativo do Ministério da Saúde: https://www.youtube.com/watch?v=cvdskDhw-Ps\n\nPosso ajudar em algo mais?",
          quickReplies: ["Sim", "Não, era só isso"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function professionalPrevention(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelecidas.\n\nAo prestar serviços que atendam casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:\n\nPara serviços em ambulatório: O uso de máscara cirúrgica e luvas descartáveis.\n\nPara o atendimento em UPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de proteção ou protetor facial.\n\nAlém disso, para a realização de procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95.`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Posso ajudar em algo mais?",
          quickReplies: ["Sim", "Não, era só isso"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function menu(res) {
  return res.send({
    fulfillmentMessages: [
      {
        quickReplies: {
          title:
            "Você  pode  tirar  dúvidas  comigo  sobre prevenção,  contágio,  casos  no  Brasil  ou realizar  um  pré-diagnóstico.\n\nSobre  qual  assunto  você  quer  saber?",
          quickReplies: ["Prevenção", "Contágio", "Pré-diagnóstico"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function contagion(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Eu  posso  te  informar  sobre  as  principais formas  de  contágio  e  sobre  o  período  de incubação  por  coronavírus. `,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Qual a sua dúvida?",
          quickReplies: ["Formas de contágio", "Período de incubação"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function formsOfContagion(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `A transmissão  do  vírus  acontece  por  via respiratória,  através  de  gotículas  que  se espalham  pelo  ar  quando  uma  pessoa  que está  infectada  tosse  ou  espirra.\n\nTambém é possível  se  contaminar  por contato  pessoal  com  as  secreções infectadas,  como:  gotículas  de  saliva; espirro;  tosse;  catarro;  contato  pessoal próximo,  como  toque  ou  aperto  de  mão; e  contato  com  roupas  e  objetos contaminados.`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Posso ajudar em algo mais?",
          quickReplies: ["Sim", "Não, era só isso"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function incubationPeriod(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `O "período  de  incubação"  significa  o  tempo entre  a  contração  do  vírus  e  o  início  dos sintomas  da  doença. Esse  tempo  varia  de  1  a  14  dias,  mas geralmente  pode  ocorrer  em  torno  de  5  dias. No entanto,  dados  preliminares  do Coronavírus  sugerem  que  a  transmissão possa  ocorrer  também  mesmo  sem  o aparecimento  de  sinais  e  sintomas.`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Posso ajudar em algo mais?",
          quickReplies: ["Sim", "Não, era só isso"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function preDiagnosis(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Vou  te  fazer  algumas  perguntas relacionadas  aos  sintomas  do  Coronavírus. Vale  lembrar  que  esta  consulta  NÃO  é  um diagnóstico  e  sim  uma  orientação  para caso  você  precise  de  um  exame  médico.`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Vamos lá?",
          quickReplies: ["Sim", "Não"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function preDiagnosisYes(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Você  pertence  a  algum  desses  grupos citados  a  seguir?`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title:
            "Pessoas  com  mais  de  60 anos; Gestantes; Pessoas  com  doenças  crônicas  (como: Diabetes,  doenças  cardiovasculares  ou pulmonares); Pessoas  em  tratamento  contra  o  câncer.",
          quickReplies: ["Pertenço", "Não pertenço"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function preDiagnosisNo(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Tudo bem, caso queira fazer um pré-diagnóstico mande uma mensagem.`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Posso ajudar em algo mais?",
          quickReplies: ["Sim", "Não, era só isso"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function preDiagnosisYesYes(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Ok.  Pelo  o  que  você  me  contou,  vejo  que você  se  enquadra  no  grupo  de  risco.\n\n Vamos continuar.`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Você  teve  febre  maior  que  37,8ºC  nos últimos  7  dias?",
          quickReplies: ["Sim", "Não"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function preDiagnosisYesNo(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Ok.  Pelo  o  que  você  me  contou,  vejo  que você  não  se  enquadra  no  grupo  de  risco.\n\nVamos continuar.`,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title: "Você teve febre maior que 37,8ºC nos últimos 7 dias?",
          quickReplies: ["Sim", "Não"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

function mildSymptoms(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `A seguir  vou  citar  alguns  sintomas  e gostaria  que  você  me  informasse  se teve  algum  deles.  E  se  sim,  quantos você  sentiu. `,
          ],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title:
            "  Coriza  ou  nariz  entupido;-  Cansaço;-  Dor  de  cabeça;-  Dores  no  corpo  ou  abdominais;-  Dor  de  garganta  ;-  Diarréia  ou  mal  estar;-  Tosse;-  E  Perda  do  olfato  ou  paladar;",
          quickReplies: ["Nenhum", "1", "2", "3", "Mais de três sintomas"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}
function preDiagnosisYesYesNo(res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [`Não entendi.`],
        },
        platform: "TELEGRAM",
      },
      {
        quickReplies: {
          title:
            "Pessoas  com  mais  de  60 anos; Gestantes; Pessoas  com  doenças  crônicas  (como: Diabetes,  doenças  cardiovasculares  ou pulmonares); Pessoas  em  tratamento  contra  o  câncer.",
          quickReplies: ["Tive febre", "Não tive febre"],
        },
        platform: "TELEGRAM",
      },
    ],
  });
}

module.exports = {
  welcome,
  closing,
  prevention,
  basicPrevention,
  professionalPrevention,
  preventionFallback,
  menu,
  contagion,
  formsOfContagion,
  incubationPeriod,
  preDiagnosis,
  preDiagnosisYes,
  preDiagnosisNo,
  preDiagnosisYesYes,
  preDiagnosisYesNo,
  preDiagnosisYesYesNo,
  mildSymptoms,
};
