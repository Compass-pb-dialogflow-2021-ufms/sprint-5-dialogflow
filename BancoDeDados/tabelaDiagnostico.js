const moongose = require('mongoose');

const Schema = moongose.Schema;

const diagnosticoSchema = new Schema({
    session: {type: String, required: true},
    grupoDeRisco: {type: Boolean},
    febre: {type: Boolean},
    poucoSintomasLeves: {type: Boolean},
    muitoSintomasLeves: {type: Boolean},
    sintomasGraves: {type: Boolean}
},);

const diagnostico = moongose.model('diagnostico', diagnosticoSchema);

module.exports = diagnostico;