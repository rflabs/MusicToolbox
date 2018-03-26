var Welcome = function(Context){
    Context.assistant
        .say("Hello! ")
        .pause("400ms")
        .say("Welcome to musicians toolbox.")
        .finish()
}

module.exports = Welcome;