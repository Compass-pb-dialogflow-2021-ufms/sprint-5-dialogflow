const response = require("../response/botResponses");
module.exports = (req, res) => {
  const displayName = req.body.queryResult.intent.displayName;
  switch (displayName) {
    case "welcome":
      response.welcome(res);
      break;
    case "goodbye":
      response.closing(res);
      break;
    case "Prevention":
      response.prevention(res);
      break;
    case "basicPrevention":
      response.basicPrevention(res);
      break;
    case "professionalPrevention":
      response.professionalPrevention(res);
      break;
    case "preventionFallback":
      response.preventionFallback(res);
      break;
    case "sintomasLeves":
      response.mildSymptoms(res);
      break;
    case "mainMenu":
      response.menu(res);
      break;
    case "contagion":
      response.contagion(res);
      break;
    case "incubationPeriod":
      response.incubationPeriod(res);
      break;
    case "formsOfContagion":
      response.formsOfContagion(res);
      break;
    case "preDiagnosis":
      response.preDiagnosis(res);
      break;
    case "preDiagnosis-yes":
      response.preDiagnosisYes(res);
      break;
    case "preDiagnosis-no":
      response.preDiagnosisNo(res);
      break;
    case "preDiagnosis-yes-yes":
      response.preDiagnosisYesYes(res);
      break;
    case "preDiagnosis-yes-no":
      response.preDiagnosisYesNo(res);
      break;
    case "preDiagnosis-yes-yes-no":
      response.preDiagnosisYesYes(res);
      break;
    case "Default Fallback Intent - fallback":
      return res.send({
        fulfillmentMessages: [
          {
            text: {
              text: [
                `Desculpe, não se consegui entender. Poderia repetir?\nDigite "ajuda", por favor`,
              ],
            },
            platform: "TELEGRAM",
          },
        ],
      });
    default:
  }
};
/* Possível abstração futura.
let mapping = {
  'Default Fallback Intent': () => dialog.answer(response.welcome()),
  //'Default Goodbye Intent'

}
mapping[displayName]() */
