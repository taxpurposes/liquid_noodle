import MusicalKeys from './musical_keys.js';

// mood 1 - 4 6 5 "true emo", mood 2 - 4 5 6 "Rising Energy", mood 3 - 1 5 6 4 "true pop punk", mood 4 - 5 6 4 "straight punk"

const generateProgressionOne = (key, mood) => {
    if (mood === 'true emo') {
        return [`${MusicalKeys[key].notes[3]}Maj7`, MusicalKeys[key].notes[5], MusicalKeys[key].notes[4]];
    };
    if (mood === 'rising energy') {
        return [`${MusicalKeys[key].notes[3]}Maj7`, MusicalKeys[key].notes[4], MusicalKeys[key].notes[5]];
    };
    if (mood === 'true pop punk') {
        return [MusicalKeys[key].notes[0], MusicalKeys[key].notes[4], MusicalKeys[key].notes[5], MusicalKeys[key].notes[3]];
    };
    if (mood === 'straight punk') {
        return [MusicalKeys[key].notes[4], MusicalKeys[key].notes[5], MusicalKeys[key].notes[3]];
    };
};

//console.log(generateProgressionOne('D', 'true emo'));

export default generateProgressionOne;