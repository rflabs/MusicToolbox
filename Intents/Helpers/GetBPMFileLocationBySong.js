var rp = require('request-promise');
var GetBPMFileLocationByBPM = require('./GetBPMFileLocationByBPM');

var GetBPMFileLocationBySong = function(Context){
    return new Promise((resolve, reject) => {
        getSpotifyCreds().then( res => {
            var access_token = res.access_token
            getTrackId(Context.args.songTitle, Context.args.artist, access_token)
                .then(res => {
                    var track = JSON.parse(res).tracks.items[0]
                    getBPMInfo(track, access_token)
                        .then(trackAttributes =>{
                            GetBPMFileLocationByBPM(JSON.parse(trackAttributes).tempo)
                                .then(bpmLink => {
                                    resolve({bpmLink,track})
                                })
                        })
                })
        })
    })
    
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