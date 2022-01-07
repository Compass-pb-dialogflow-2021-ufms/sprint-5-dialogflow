const { messageRandomizer } = require('../util/index')

const Messenger = require('../models/Messenger')

const selectMessage = (messageName) => ({
      'Welcome Text': Messenger.getWelcomeText()
    , 'Welcome Again Text': Messenger.getWelcomeAgainText()
    , 'Farewell Text': Messenger.getFarewellText()
    , 'Main Menu Quick Replies': Messenger.getMainMenuQuickReplies()
    , 'Main Menu Quick Replies Titles': messageRandomized(Messenger.getMainMenuQuickRepliesTitles())
    , 'First Main Menu Quick Replies Titles': messageRandomized(Messenger.getFirstMainMenuQuickRepliesTitles())
    , 'Prevention Text': Messenger.getPreventionText()
    , 'Prevention Quick Replies': Messenger.getPreventionQuickReplies()
    , 'Basic Prevention Text': Messenger.getBasicPreventionText()
    , 'Basic Prevention Quick Replies': Messenger.getBasicPreventionQuickReplies()
    , 'Health Professional Prevent Text': Messenger.getHealthProfessionalPreventionText()
    , 'Contagion Text': Messenger.getContagionText()
    , 'Contagion Quick Replies':  Messenger.getContagionQuickReplies()
    , 'Contagion Forms Text': Messenger.getContagionFormsText()
    , 'Incubation Period Text': Messenger.getIncubationPeriodText()
    , 'Pre Diagnostic Text': Messenger.getPreDiagnosticText()
    , 'Pre Diagnostic Quick Replies': Messenger.getPreDiagnosticQuickReplies()
    , 'Abort Pre Diagnostic Text': Messenger.getAbortPreDiagnosticText()
    , 'Risk Groups Text': Messenger.getRiskGroupsText()
    , 'Risk Groups Quick Replies': Messenger.getRiskGroupsQuickReplies()
    , 'Risk Groups Response Text': Messenger.getRiskGroupsResponseText()
    , 'Fever Quick Replies': Messenger.getFeverQuickReplies()
    , 'Mild Symptoms Text': Messenger.getMildSymptomsText()
    , 'Mild Symptoms Quick Replies': Messenger.getMildSymptomsQuickReplies()
    , 'Mild Symptoms Number Text': Messenger.getMildSymptomsNumberText()
    , 'Drugs Taken Quick Replies': Messenger.getDrugsTakenQuickReplies()
    , 'Got Well Quick Replies': Messenger.getGotWellQuickReplies()
    , 'No Mild Symptoms Text': Messenger.getNoMildSymptomsText()
    , 'Severe Symptoms Text': Messenger.getSevereSymptomsText()
    , 'Severe Symptoms Quick Replies': Messenger.getSevereSymptomsQuickReplies()
    , 'Need More Help Quick Replies': Messenger.getNeedMoreHelpQuickReplies()
}[messageName] || 'Menssagem não encontrada.')

const messageRandomized = (messages) => {
    return messageRandomizer(messages, messages.length)
}

module.exports = {
    selectMessage
}