var Welcome = function(Context){
    Context.assistant
    .say("Hello! ")
    .pause("500ms")
    .say("Welcome to music toolbox")
    .finish()
}

module.exports = Welcome;