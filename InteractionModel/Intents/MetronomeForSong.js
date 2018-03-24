var MetronomeForSong = {
    name: 'MetronomeForSong',
    utterances: [
        "Start a metronome for song {'songTitle':'Let It Be'}",
        "Start a metronome for {'songTitle': 'Morning'} by {'artist': 'Beck'}",

        "Start metronome for song {'songTitle':'Let It Be'}",
        "Start metronome for {'songTitle': 'Morning'} by {'artist': 'Beck'}",

        "Metronome for song {'songTitle':'Let It Be'}",
        "Metronome for {'songTitle': 'Morning'} by {'artist': 'Beck'}",
    ],
    slots: {
        "songTitle": {
            "dataType": ["AMAZON.MusicRecording"]
        },
        "artist": {
            "dataType": ["AMAZON.Musician"]
        }
    }
}

module.exports = MetronomeForSong