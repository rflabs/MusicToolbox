// Ayva State manager
var Ayva = require('ayva')
var StateManager = Ayva.StateManager

var InactiveIntentErrorHandler = function(Context){
    StateManager.getState(Context).then(function(state) {
        console.log("Intent matched: " + Context.intentName)
        Context.assistant.say("This command is currently not available.").finish()
    })
    
}

module.exports = {
    "InactiveIntentError": InactiveIntentErrorHandler,
}

