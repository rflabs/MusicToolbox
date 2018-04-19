var GetBPMFileLocationByBPM= require('./Helpers/GetBPMFileLocationByBPM')

var MetronomeForBPM = function(Context){
    GetBPMFileLocationByBPM(Context.args.bpm)
        .then( (bpmLink) => {
            Context.assistant.say(`Ok, starting a metronome at ${Context.args.bpm} beats per minute`)
            .play(bpmLink)
            .finish({"exit": true})
        })
        .catch( e => {
            console.log(e)
            Context.assistant.say("Sorry, there was a problem, try again").finish()
        })

}

module.exports = MetronomeForBPM;