var States = {
    'default': {
        activeIntents: ['Welcome', 'MetronomeForSong', 'MetronomeForBPM'],
        middleware: ['logInput']
    }
}

module.exports = States
