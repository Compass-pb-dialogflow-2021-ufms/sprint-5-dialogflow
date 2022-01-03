const internalApi = require("../api/internalApi");
module.exports = (req, res) => {
  const tagName = req.body.queryResult.intent.displayName;
  switch (tagName) {
    case "Default Welcome Intent":
      internalApi.welcome(req, res);
      break;
    case "help":
      internalApi.help(req, res);
      break;
    case "hardware":
      internalApi.hardware(req, res);
      break;
    case "hardwareConnected":
      internalApi.hardwareConnected(req, res);
      break;
    case "infoCollect":
      internalApi.info(req, res);
      break;
    case "hardwareNotConnected":
      internalApi.hardwareNotConnected(req, res);
      break;
    case "checkProblem":
      internalApi.checkProblem(req, res);
      break;
    case "software":
      internalApi.software(req, res);
      break;
    case "noProblem":
      internalApi.noProblem(req, res);
      break;
    case "problemContinues":
      internalApi.problemContinues(req, res);
      break;
      case "goodbye":
        internalApi.goodbye(req, res);
        break;
    case "Default Fallback Intent":
      return res.send({
        fulfillmentMessages: [
          {
            text: {
              text: [
                `Desculpe, não se consegui entender. Poderia repetir?\nDigite "ajuda", por favor`,
              ],
            },
          },
        ],
      });
    default:
  }
};
