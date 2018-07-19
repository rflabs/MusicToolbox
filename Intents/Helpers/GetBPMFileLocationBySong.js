var rp = require('request-promise');
var GetBPMFileLocationByBPM = require('./GetBPMFileLocationByBPM');

var GetBPMFileLocationBySong = function(Context){

    return new Promise((resolve, reject) => {
        getSpotifyCreds().then( res => {
            var access_token = res.access_token

            if(Context.args.songTitle && Context.args.artist)
            {
                console.log(`Trying with  ${Context.args.songTitle} by artist ${Context.args.artist}`)
                getTrackId(Context.args.songTitle, Context.args.artist, access_token)
                    .then(res => {
                        var track = JSON.parse(res).tracks.items[0]
                        if(!track) return reject()
                        getBPMInfo(track, access_token)
                            .then(trackAttributes =>{
                                GetBPMFileLocationByBPM(JSON.parse(trackAttributes).tempo)
                                    .then(bpmLink => {
                                        resolve({bpmLink,track})
                                    })
                            })
                    })
            } else {
                console.log("Trying with raw input: " + Context.rawInput)
                getTrackId(Context.rawInput, "", access_token)
                    .then(res => {
                        var track = JSON.parse(res).tracks.items[0]
                        if (!track)
                        {
                            var retryString = removeWordOrPhrase(Context.rawInput, "by")
                            console.log("Retrying with: " + retryString)
                            getTrackId(retryString, '', access_token)
                                .then(res => {
                                    var track = JSON.parse(res).tracks.items[0]
                                    if(!track) return reject()
                                    getBPMInfo(track, access_token)
                                    .then(trackAttributes =>{
                                        GetBPMFileLocationByBPM(JSON.parse(trackAttributes).tempo)
                                    .then(bpmLink => {
                                        resolve({bpmLink,track})
                                    })
                                    })
                                })
                        } else {
                            if(!track) return reject()
                            getBPMInfo(track, access_token)
                            .then(trackAttributes =>{
                                GetBPMFileLocationByBPM(JSON.parse(trackAttributes).tempo)
                                .then(bpmLink => {
                                    resolve({bpmLink,track})
                                })
                            })
                        }
                        
                    })
            }
        })
    })
    
}

var removeWordOrPhrase = (input, wordToRemove) => {
    input = input.toLowerCase().trim()
    var found = input.match(wordToRemove.toLowerCase())
    if(input.length > 0 && found)
    {
        return removeWordOrPhrase(input.slice(0, found.index) + input.slice(found.index + wordToRemove.length), wordToRemove)
    } else {
        return input.trim();
    }
}

var getSpotifyCreds = function(){
    var options = {
        uri: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        form: {
            "grant_type": "client_credentials"
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer(process.env.SPOTIFY_ID + ':' + process.env.SPOTIFY_SECRET).toString('base64'))
        },
        json:true
    }
    return rp(options)
}

var getTrackId = function(song, artist, token){
    var options = {
        url: 'https://api.spotify.com/v1/search',
        method: 'GET',
        qs: {
            q: song + " " + artist,
            type: "track"
        },
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    return rp(options)
}

var getBPMInfo = function(track, token){
    var options = {
        uri: `https://api.spotify.com/v1/audio-features/${track.id}`,
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token}
    }

    return rp(options)
}



module.exports = GetBPMFileLocationBySong;