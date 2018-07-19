var GetBPMFileLocationBySong = require('./Helpers/GetBPMFileLocationBySong')

var MetronomeForSong = function(Context){
    GetBPMFileLocationBySong(Context)
        .then( (res) => {
            Context.assistant.say(`Ok, starting a metronome for ${res.track.name} by ${res.track.artists[0].name}`)
            .play(res.bpmLink)
            .finish({"exit": true})
        })
        .catch( e => {
            console.log(e)
            Context.assistant.say("Sorry, I didn't catch that, what song should I start a metronome for?").finish()
        })

}

module.exports = MetronomeForSong;