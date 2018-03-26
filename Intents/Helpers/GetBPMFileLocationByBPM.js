var baseURL = "https://storage.googleapis.com/musician-tools.appspot.com/Assets/Metronome/"

var GetBPMFileLocationByBPM = function(bpm){
    return new Promise( (resolve, reject) => {
        resolve(baseURL+Math.floor(bpm)+".mp3")
    })
}

module.exports = GetBPMFileLocationByBPM;