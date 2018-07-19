var MetronomeForSong = {
    name: 'MetronomeForSong',
    utterances: [
        "Start a metronome for song {'songTitle':'The Love You Save'}",
        "Start a metronome for song {'songTitle':'Let It Be'}",
        "Start a metronome for {'songTitle': 'Morning'} by {'artist': 'Beck'}",
        "Start a metronome for song {'songTitle': 'The Love You Save'} by {'artist': 'The Jackson 5'}",

        "Start metronome for song {'songTitle':'Let It Be'}",
        "Start metronome for {'songTitle': 'Morning'} by {'artist': 'Beck'}",
        "Start metronome for song {'songTitle': 'The Love You Save'} by {'artist': 'The Jackson 5'}",
        
        "Metronome for song {'songTitle':'Let It Be'}",
        "Metronome for {'songTitle': 'Morning'} by {'artist': 'Beck'}",
        "Metronome for song {'songTitle': 'The Love You Save'} by {'artist': 'The Jackson 5'}",

        "{'songTitle':'Let It Be'}",
        "{'songTitle': 'Morning'} by {'artist': 'Beck'}",
        "{'artist': 'John Lennon'} {'songTitle': 'Stand By Me'}",
        "{'songTitle':'Stand By Me'} by {'artist': 'John Lennon'}",
        "{'songTitle':'Stand By Me'} {'artist': 'John Lennon'}"
        
    ],
    slots: {
        "songTitle": {
            "dataType": ["AMAZON.MusicRecording", "@sys.any"]
        },
        "artist": {
            "dataType": ["AMAZON.Musician", "@sys.music-artist"]
        }
    }
}

module.exports = MetronomeForSong