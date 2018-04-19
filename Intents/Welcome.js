var Welcome = function(Context){
    Context.assistant
        .say("It's time for practice! I'll start a metronome, what song are you practicing?")
        .pause("400ms")
        .finish()
}

module.exports = Welcome;