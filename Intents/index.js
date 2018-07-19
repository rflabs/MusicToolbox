var Intents = {}

Intents.Welcome = require('./Welcome');
Intents.MetronomeForBPM = require('./MetronomeForBPM');
Intents.MetronomeForSong = require('./MetronomeForSong')
Intents.ImplicitInvocation = Intents.Welcome

module.exports = Intents;