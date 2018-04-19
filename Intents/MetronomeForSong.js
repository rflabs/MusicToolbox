var GetBPMFileLocationBySong = require('./Helpers/GetBPMFileLocationBySong')

var MetronomeForSong = function(Context){
    GetBPMFileLocationBySong(Context)
        .then( (res) => {
            console.log(res.bpmLink)
            Context.assistant.say(`Ok, starting a metronome for ${res.track.name} by ${res.track.artists[0].name}`)
            .play(res.bpmLink)
            .finish({"exit": true})
        })
        .catch( e => {
            console.log(e)
            Context.assistant.say("Sorry, there was a problem, try again").finish()
        })

}

module.exports = MetronomeForSong;