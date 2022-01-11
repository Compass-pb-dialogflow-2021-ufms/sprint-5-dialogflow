const mongoose = require('mongoose')


const DiagnosisTelegram = mongoose.model('DiagnosisTelegram', {
    id: String,
    riskGroup: String,
    fever: String,
    minorSymptoms: String,
    severeSymptoms: String
})


module.exports = DiagnosisTelegram