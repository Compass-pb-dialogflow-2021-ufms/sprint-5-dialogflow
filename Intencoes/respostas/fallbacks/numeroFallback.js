module.exports = function numeroFallback(req) {
    const arrayContexto = req.body.queryResult.outputContexts;
    for (const objeto of arrayContexto) {
        if (objeto.parameters !== undefined && objeto.parameters['no-match'] !== undefined) {
            return objeto.parameters['no-match'];
        }
    }
}