// Welcome Intent
var MetronomeForBPM = {
    name: 'MetronomeForBPM',
    utterances: [
        "Start a metronome at {'bpm': '140'}",
        "Start a metronome at {'bpm': '160'} B.P.M.",
        "Start a metronome at {'bpm': '160'} beats per minute",
        "Start a metronome at {'bpm': '160'} beat per minute",

        "{'bpm': '140'}",
        "{'bpm': '160'} B.P.M.",
        "{'bpm': '160'} beats per minute",
        "{'bpm': '160'} beat per minute"
    ],
    slots: {
        'bpm': {
            dataType: ["@sys.number", "AMAZON.NUMBER"]
        }
    }
}

module.exports = MetronomeForBPM