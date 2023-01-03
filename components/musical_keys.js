const MusicalKeys = {
    Ab: {
        'NotesInKey': [
        'Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'
        ],
        'OpenStrings': 0,
        get notes() {
            return this.NotesInKey;
        }
    },
    A: {
        'NotesInKey': [
            'A', 'B', 'C#', 'D', 'E', 'F#', 'G#'
            ],
            'OpenStrings': 5,
            get notes() {
                return this.NotesInKey;
            }
        },
    Bb: {
        'NotesInKey': [
            'Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'
            ],
            'OpenStrings': 1,
            get notes() {
                return this.NotesInKey;
            }
        },
    B: {
        'NotesInKey': [
            'B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'
            ],
            'OpenStrings': 3,
            get notes() {
                return this.NotesInKey;
            }
        },
    C: {
        'NotesInKey': [
            'C', 'D', 'E', 'F', 'G', 'A', 'B'
            ],
            'OpenStrings': 6,
            get notes() {
                return this.NotesInKey;
            }
        },
    Db: {
        'NotesInKey': [
            'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'
            ],
            'OpenStrings': 0,
            get notes() {
                return this.NotesInKey;
            }
        },
    D: {
        'NotesInKey': [
            'D', 'E', 'F#', 'G', 'A', 'B', 'C#'
            ],
            'OpenStrings': 6,
            get notes() {
                return this.NotesInKey;
            }
        },
    Eb: {
        'NotesInKey': [
            'Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'
            ],
            'OpenStrings': 2,
            get notes() {
                return this.NotesInKey;
            }
        },
    E: {
        'NotesInKey': [
            'E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'
            ],
            'OpenStrings': 4,
            get notes() {
                return this.NotesInKey;
            }
        },
    F: {
        'NotesInKey': [
            'F', 'G', 'A', 'Bb', 'C', 'D', 'E'
            ],
            'OpenStrings': 5,
            get notes() {
                return this.NotesInKey;
            }
        },
    Gb: {
        'NotesInKey': [
            'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F#'
            ],
            'OpenStrings': 2,
            get notes() {
                return this.NotesInKey;
            }
        },
    G: {
        'NotesInKey': [
            'G', 'A', 'B', 'C', 'D', 'E', 'F#'
            ],
            'OpenStrings': 6,
            get notes() {
                return this.NotesInKey;
            }
        },
};

export default MusicalKeys;