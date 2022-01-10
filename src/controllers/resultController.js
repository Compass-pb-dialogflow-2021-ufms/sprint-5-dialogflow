const { responseBuilder } = require('../util/index')

const messengerController = require('./messengerController')

const resultIntent = async (User) => {
    const texts = []

    if (User.riskGroups === false
        && User.fever === false
        && User.mildSymptoms === 'Sem sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A1 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A1 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === false
        && User.mildSymptoms === 'Sem sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A2 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A2 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === false
        && User.mildSymptoms === 'Poucos sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A3 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A3 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === false
        && User.mildSymptoms === 'Poucos sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A4 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A4 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === false
        && User.mildSymptoms === 'Muitos sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A5 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A5 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === false
        && User.mildSymptoms === 'Muitos sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A6 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A6 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === true
        && User.mildSymptoms === 'Sem sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A7 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A7 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === true
        && User.mildSymptoms === 'Sem sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A8 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A8 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === true
        && User.mildSymptoms === 'Poucos sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A9 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A9 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === true
        && User.mildSymptoms === 'Poucos sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A10 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A10 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === true
        && User.mildSymptoms === 'Muitos sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A11 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A11 Text')[1] )
    } else if (User.riskGroups === false
        && User.fever === true
        && User.mildSymptoms === 'Muitos sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A12 Text')[0] )
        texts.push( messengerController.selectMessage('Scenario A12 Text')[1] )
    } else if (User.riskGroups === true
        && User.fever === false
        && User.mildSymptoms === 'Sem sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A1 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A1 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === false
        && User.mildSymptoms === 'Sem sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A2 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A2 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === false
        && User.mildSymptoms === 'Poucos sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A3 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A3 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === false
        && User.mildSymptoms === 'Poucos sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A4 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A4 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === false
        && User.mildSymptoms === 'Muitos sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A5 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A5 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === false
        && User.mildSymptoms === 'Muitos sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A6 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A6 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === true
        && User.mildSymptoms === 'Sem sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A7 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A7 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === true
        && User.mildSymptoms === 'Sem sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A8 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A8 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === true
        && User.mildSymptoms === 'Poucos sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A9 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A9 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === true
        && User.mildSymptoms === 'Poucos sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A10 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A10 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === true
        && User.mildSymptoms === 'Muitos sintomas'
        && User.severeSymptoms === false)
    {
        texts.push( messengerController.selectMessage('Scenario A11 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A11 Text')[1]
        )
    } else if (User.riskGroups === true
        && User.fever === true
        && User.mildSymptoms === 'Muitos sintomas'
        && User.severeSymptoms === true)
    {
        texts.push( messengerController.selectMessage('Scenario A12 Text')[0] )
        texts.push(
              messengerController.selectMessage('Risk Groups Advice Text')
            + messengerController.selectMessage('Scenario A12 Text')[1]
        )
    }

    return responseBuilder(texts)
}

module.exports = {
    resultIntent
}