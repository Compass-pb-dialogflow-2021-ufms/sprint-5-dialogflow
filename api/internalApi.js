//Tenntei implementar a parte bônus, os dados era aramazaenados no banco, mas a resposta não aparecia para o usuário. E não consegui resolver essa parte a tempo. Achei melhor deixar só no mockup.

// const { MongoClient } = require("mongodb");

// // Conexão com o banco de dados
// const url =
//   "mongodb+srv://admin:p12345@cluster0.owvhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(url);

// // The database to use
// const dbName = "chamadosDB";

// async function info(req, res) {
//   try {
//     await client.connect();
//     console.log("Conectado o server");
//     const db = client.db(dbName);

//     const col = db.collection("chamadosN1");

//     let newCall = {
//       name: req.body.queryResult.parameters.person.name,
//       cpf: req.body.queryResult.parameters.cpf,
//       email: req.body.queryResult.parameters.email,
//       phone: req.body.queryResult.parameters["phone-number"],
//       description: req.body.queryResult.parameters.any,
//     };
//     const p = await col.insertOne(newCall);
//     const myDoc = await col.findOne();
//     console.log(myDoc);
//     return res.send({
//       fulfillmentMessages: [
//         {
//           text: {
//             text: [`Dados coletados.Obrigado.\n `],
//           },
//         },
//       ],
//     });
//   } catch {
//     console.log(err.stack);
//   }
// }
function info(req, res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Dados coletados e chamado aberto. Obrigado.`,
          ],
        },
      },
    ],
  });
}
function welcome(req, res) {
  //console.log(req.body.queryResult);
  return res.send(
    (response1 = {
      fulfillmentMessages: [
        {
          text: {
            text: [
              `Olá, eu sou o robô de suporte nível 1, minha função é apresentar soluções parar problemas de hardware que não necessitam a abertura de um chamado e reralizar a abertura de chamados\n `,
            ],
          },
        },
        {
          text: {
            text: [
              `Digite qual o seu problema. Por exemplo: "monitor não funciona".`,
            ],
          },
        },
      ],
    })
  );
}

function help(req, res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Você pode informar o que ocorreu com o hardware(computador, periféricos) ou uma ocorrência com software(SVN, Outlook, VPN). Caso eu não consiga te ajudar a resolver, irei te orientar para a abertura de um novo chamado.`,
          ],
        },
      },
    ],
  });
}

function goodbye(req, res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [`Já vai? Tudo bem! Até logo, espero ter te ajudado.`],
        },
      },
    ],
  });
}

function hardware(req, res) {
  console.log(req.body.queryResult.parameters.hardware);
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Ok. Problema com o ${req.body.queryResult.parameters.hardware}. Você pode conferir e me dizer se o(a) ${req.body.queryResult.parameters.hardware} está conectado corretamente no dispositivo ou na tomada?`,
          ],
        },
      },
    ],
  });
}

function hardwareConnected(req, res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Aparentemente o aparelho pode estar com defeito. Peço por gentileza que insira os seguintes dados para abertura do chamado: 
            Nome,\n
            Telefone de contato,\n
            E-mail,\n
            CPF (apenas números),\n
            Descrição do problema.\n
            `,
          ],
        },
      },
    ],
  });
}

function hardwareNotConnected(req, res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Por favor, certifique-se que o aparelho esteja conectado de forma correta ao dispositivo e/ou fonte de energia. Digite "conectei o aparelho" após ter verificado a conexão.`,
          ],
        },
      },
    ],
  });
}

function checkProblem(req, res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [`O problema ainda continua?`],
        },
      },
    ],
  });
}

function noProblem(req, res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Que ótimo, fico feliz em te ajudar. Caso precise de mais alguma coisa estou a disposição!`,
          ],
        },
      },
    ],
  });
}

function problemContinues(req, res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Que pena! Vou precisar dos seus dados para iniciar a abertura do chamado. Por gentileza, me informe os seguintes dados:\n
          Nome completo, telefone, e-mail, CPF e descrição do problema. `,
          ],
        },
      },
    ],
  });
}

function software(req, res) {
  return res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Ok, você está com um problema de software. Em casos assim é necessário a abertura do chamado. Por gentileza, me informe os seguintes dados:\n
          Nome completo, telefone, e-mail, CPF e descrição do problema. `,
          ],
        },
      },
      {
        text: {
          text: [
            `Por exemplo:\n Nome: João Silva, telefone: 11 923143563, email: joao@email.com, CPF: 00011122233, descrição do problema: Não connsigo acessar meu email nesse`,
          ],
        },
      },
    ],
  });
}

module.exports = {
  welcome,
  help,
  goodbye,
  hardware,
  hardwareConnected,
  hardwareNotConnected,
  checkProblem,
  noProblem,
  problemContinues,
  info,
  software,
};
