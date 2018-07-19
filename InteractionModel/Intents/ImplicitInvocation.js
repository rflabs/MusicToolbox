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

        "Start a metronome by song",
        "Give me a metronome for a song",
        "Get a metronome by song name",
        "Get a metronome by song",
        "Give me a metronome for {'songTitle':'Let It Be'}",
        "Give me a metronome for {'songTitle':'Let It Be'} by {'artist': 'The Beatles'}"
        
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