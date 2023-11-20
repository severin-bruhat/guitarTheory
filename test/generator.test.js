const { SCOPABLE_TYPES } = require('@babel/types');
const { generateScale, Patterns } = require('../generator.js');


describe('Whole Tone Scales', () => {
    test('Generate C Whole Tone Scale', () => {
        const cWholeToneScale = generateScale("C", Patterns.WHOLETONE);
        expect(cWholeToneScale).toEqual(['C', 'D', 'E', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'C']);
    });

    test('Generate C#/Db Whole Tone Scale', () => {
        const cdWholeToneScale = generateScale("C#/Db", Patterns.WHOLETONE);
        expect(cdWholeToneScale).toEqual(['C#/Db', 'D#/Eb', 'F', 'G', 'A', 'B', 'C#/Db']);
    });

    test('Generate D Whole Tone Scale', () => {
        const dWholeToneScale = generateScale("D", Patterns.WHOLETONE);
        expect(dWholeToneScale).toEqual(['D', 'E', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'C', 'D']);
    });

    test('Generate D#/Eb Whole Tone Scale', () => {
        const deWholeToneScale = generateScale("D#/Eb", Patterns.WHOLETONE);
        expect(deWholeToneScale).toEqual(['D#/Eb', 'F', 'G', 'A', 'B', 'C#/Db', 'D#/Eb']);
    });

    test('Generate E Whole Tone Scale', () => {
        const eWholeToneScale = generateScale("E", Patterns.WHOLETONE);
        expect(eWholeToneScale).toEqual(['E', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'C', 'D', 'E']);
    });

    test('Generate F Whole Tone Scale', () => {
        const fWholeToneScale = generateScale("F", Patterns.WHOLETONE);
        expect(fWholeToneScale).toEqual(['F', 'G', 'A', 'B', 'C#/Db', 'D#/Eb', 'F']);
    });

    test('Generate F#/Gb Whole Tone Scale', () => {
        const fgWholeToneScale = generateScale("F#/Gb", Patterns.WHOLETONE);
        expect(fgWholeToneScale).toEqual(['F#/Gb', 'G#/Ab', 'A#/Bb', 'C', 'D', 'E', 'F#/Gb']);
    });

    test('Generate G Whole Tone Scale', () => {
        const gWholeToneScale = generateScale("G", Patterns.WHOLETONE);
        expect(gWholeToneScale).toEqual(['G', 'A', 'B', 'C#/Db', 'D#/Eb', 'F', 'G']);
    });

    test('Generate G#/Ab Whole Tone Scale', () => {
        const gaWholeToneScale = generateScale("G#/Ab", Patterns.WHOLETONE);
        expect(gaWholeToneScale).toEqual(['G#/Ab', 'A#/Bb', 'C', 'D', 'E', 'F#/Gb', 'G#/Ab']);
    });

    test('Generate A Whole Tone Scale', () => {
        const aWholeToneScale = generateScale("A", Patterns.WHOLETONE);
        expect(aWholeToneScale).toEqual(['A', 'B', 'C#/Db', 'D#/Eb', 'F', 'G', 'A']);
    });

    test('Generate A#/Bb Whole Tone Scale', () => {
        const abWholeToneScale = generateScale("A#/Bb", Patterns.WHOLETONE);
        expect(abWholeToneScale).toEqual(['A#/Bb', 'C', 'D', 'E', 'F#/Gb', 'G#/Ab', 'A#/Bb']);
    });

    test('Generate B Whole Tone Scale', () => {
        const bWholeToneScale = generateScale("B", Patterns.WHOLETONE);
        expect(bWholeToneScale).toEqual(['B', 'C#/Db', 'D#/Eb', 'F', 'G', 'A', 'B']);
    });
});


describe('Major Scales', () => {

    test('Generate C Major Scale', () => {
        const cMajorScale = generateScale("C", Patterns.MAJOR);
        expect(cMajorScale).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
    });

    test('Generate G Major Scale', () => {
        const gMajorScale = generateScale("G", Patterns.MAJOR);
        expect(gMajorScale).toEqual(['G', 'A', 'B', 'C', 'D', 'E', 'F#/Gb', 'G']);
    });

    test('Generate D Major Scale', () => {
        const dMajorScale = generateScale("D", Patterns.MAJOR);
        expect(dMajorScale).toEqual(['D', 'E', 'F#/Gb', 'G', 'A', 'B', 'C#/Db', 'D']);
    });

    test('Generate A Major Scale', () => {
        const aMajorScale = generateScale("A", Patterns.MAJOR);
        expect(aMajorScale).toEqual(['A', 'B', 'C#/Db', 'D', 'E', 'F#/Gb', 'G#/Ab', 'A']);
    });

    test('Generate E Major Scale', () => {
        const eMajorScale = generateScale("E", Patterns.MAJOR);
        expect(eMajorScale).toEqual(['E', 'F#/Gb', 'G#/Ab', 'A', 'B', 'C#/Db', 'D#/Eb', 'E']);
    });

    test('Generate B Major Scale', () => {
        const bMajorScale = generateScale("B", Patterns.MAJOR);
        expect(bMajorScale).toEqual(['B', 'C#/Db', 'D#/Eb', 'E', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'B']);
    });

    test('Generate F#/Gb Major Scale', () => {
        const fgMajorScale = generateScale("F#/Gb", Patterns.MAJOR);
        expect(fgMajorScale).toEqual(['F#/Gb', 'G#/Ab', 'A#/Bb', 'B', 'C#/Db', 'D#/Eb', 'F', 'F#/Gb']);
    });

    test('Generate C#/Db Major Scale', () => {
        const cdMajorScale = generateScale("C#/Db", Patterns.MAJOR);
        expect(cdMajorScale).toEqual(['C#/Db', 'D#/Eb', 'F', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'C', 'C#/Db']);
    });

    test('Generate F Major Scale', () => {
        const fMajorScale = generateScale("F", Patterns.MAJOR);
        expect(fMajorScale).toEqual(['F', 'G', 'A', 'A#/Bb', 'C', 'D', 'E', 'F']);
    });

    test('Generate D#/Eb Major Scale', () => {
        const deMajorScale = generateScale("D#/Eb", Patterns.MAJOR);
        expect(deMajorScale).toEqual(['D#/Eb', 'F', 'G', 'G#/Ab', 'A#/Bb', 'C', 'D', 'D#/Eb']);
    });

    test('Generate G#/Ab Major Scale', () => {
        const gaMajorScale = generateScale("G#/Ab", Patterns.MAJOR);
        expect(gaMajorScale).toEqual(['G#/Ab', 'A#/Bb', 'C', 'C#/Db', 'D#/Eb', 'F', 'G', 'G#/Ab']);
    });

    test('Generate C#/Db Major Scale', () => {
        const cdaMajorScale = generateScale("C#/Db", Patterns.MAJOR);
        expect(cdaMajorScale).toEqual(['C#/Db', 'D#/Eb', 'F', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'C', 'C#/Db']);
    });
});

describe('Minor Scales', () => {
    test('Generate A Minor Scale', () => {
        const aMinorScale = generateScale("A", Patterns.MINOR);
        expect(aMinorScale).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A']);
    });

    test('Generate E Minor Scale', () => {
        const eMinorScale = generateScale("E", Patterns.MINOR);
        expect(eMinorScale).toEqual(['E', 'F#/Gb', 'G', 'A', 'B', 'C', 'D', 'E']);
    });

    test('Generate B Minor Scale', () => {
        const bMinorScale = generateScale("B", Patterns.MINOR);
        expect(bMinorScale).toEqual(['B', 'C#/Db', 'D', 'E', 'F#/Gb', 'G', 'A', 'B']);
    });

    test('Generate F#/Gb Minor Scale', () => {
        const fgMinorScale = generateScale("F#/Gb", Patterns.MINOR);
        expect(fgMinorScale).toEqual(['F#/Gb', 'G#/Ab', 'A', 'B', 'C#/Db', 'D', 'E', 'F#/Gb']);
    });

    test('Generate C#/Db Minor Scale', () => {
        const cdMinorScale = generateScale("C#/Db", Patterns.MINOR);
        expect(cdMinorScale).toEqual(['C#/Db', 'D#/Eb', 'E', 'F#/Gb', 'G#/Ab', 'A', 'B', 'C#/Db']);
    });

    test('Generate G#/Ab Minor Scale', () => {
        const gaMinorScale = generateScale("G#/Ab", Patterns.MINOR);
        expect(gaMinorScale).toEqual(['G#/Ab', 'A#/Bb', 'B', 'C#/Db', 'D#/Eb', 'E', 'F#/Gb', 'G#/Ab']);
    });

    test('Generate D#/Eb Minor Scale', () => {
        const deMinorScale = generateScale("D#/Eb", Patterns.MINOR);
        expect(deMinorScale).toEqual(['D#/Eb', 'F', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'B', 'C#/Db', 'D#/Eb']);
    });

    test('Generate A#/Bb Minor Scale', () => {
        const abMinorScale = generateScale("A#/Bb", Patterns.MINOR);
        expect(abMinorScale).toEqual(['A#/Bb', 'C', 'C#/Db', 'D#/Eb', 'F', 'F#/Gb', 'G#/Ab', 'A#/Bb']);
    });

    test('Generate F Minor Scale', () => {
        const fMinorScale = generateScale("F", Patterns.MINOR);
        expect(fMinorScale).toEqual(['F', 'G', 'G#/Ab', 'A#/Bb', 'C', 'C#/Db', 'D#/Eb', 'F']);
    });

    test('Generate C Minor Scale', () => {
        const cMinorScale = generateScale("C", Patterns.MINOR);
        expect(cMinorScale).toEqual(['C', 'D', 'D#/Eb', 'F', 'G', 'G#/Ab', 'A#/Bb', 'C']);
    });

    test('Generate G Minor Scale', () => {
        const gMinorScale = generateScale("G", Patterns.MINOR);
        expect(gMinorScale).toEqual(['G', 'A', 'A#/Bb', 'C', 'D', 'D#/Eb', 'F', 'G']);
    });

    test('Generate D Minor Scale', () => {
        const dMinorScale = generateScale("D", Patterns.MINOR);
        expect(dMinorScale).toEqual(['D', 'E', 'F', 'G', 'A', 'A#/Bb', 'C', 'D']);
    });
});

describe('Major Pentatonic Scales', () => {
    test('Generate C Major Pentatonic Scale', () => {
        const cMajorPentatonicScale = generateScale("C", Patterns.MAJORPENTATONIC);
        expect(cMajorPentatonicScale).toEqual(['C', 'D', 'E', 'G', 'A', 'C']);
    });

    test('Generate C#/Db Major Pentatonic Scale', () => {
        const cdMajorPentatonicScale = generateScale("C#/Db", Patterns.MAJORPENTATONIC);
        expect(cdMajorPentatonicScale).toEqual(['C#/Db', 'D#/Eb', 'F', 'G#/Ab', 'A#/Bb', 'C#/Db']);
    });

    test('Generate D Major Pentatonic Scale', () => {
        const dMajorPentatonicScale = generateScale("D", Patterns.MAJORPENTATONIC);
        expect(dMajorPentatonicScale).toEqual(['D', 'E', 'F#/Gb', 'A', 'B', 'D']);
    });

    test('Generate D#/Eb Major Pentatonic Scale', () => {
        const deMajorPentatonicScale = generateScale("D#/Eb", Patterns.MAJORPENTATONIC);
        expect(deMajorPentatonicScale).toEqual(['D#/Eb', 'F', 'G', 'A#/Bb', 'C', 'D#/Eb']);
    });

    test('Generate E Major Pentatonic Scale', () => {
        const eMajorPentatonicScale = generateScale("E", Patterns.MAJORPENTATONIC);
        expect(eMajorPentatonicScale).toEqual(['E', 'F#/Gb', 'G#/Ab', 'B', 'C#/Db', 'E']);
    });

    test('Generate F Major Pentatonic Scale', () => {
        const fMajorPentatonicScale = generateScale("F", Patterns.MAJORPENTATONIC);
        expect(fMajorPentatonicScale).toEqual(['F', 'G', 'A', 'C', 'D', 'F']);
    });

    test('Generate F#/Gb Major Pentatonic Scale', () => {
        const fgMajorPentatonicScale = generateScale("F#/Gb", Patterns.MAJORPENTATONIC);
        expect(fgMajorPentatonicScale).toEqual(['F#/Gb', 'G#/Ab', 'A#/Bb', 'C#/Db', 'D#/Eb', 'F#/Gb']);
    });

    test('Generate G Major Pentatonic Scale', () => {
        const gMajorPentatonicScale = generateScale("G", Patterns.MAJORPENTATONIC);
        expect(gMajorPentatonicScale).toEqual(['G', 'A', 'B', 'D', 'E', 'G']);
    });

    test('Generate G#/Ab Major Pentatonic Scale', () => {
        const gaMajorPentatonicScale = generateScale("G#/Ab", Patterns.MAJORPENTATONIC);
        expect(gaMajorPentatonicScale).toEqual(['G#/Ab', 'A#/Bb', 'C', 'D#/Eb', 'F', 'G#/Ab']);
    });

    test('Generate A Major Pentatonic Scale', () => {
        const aMajorPentatonicScale = generateScale("A", Patterns.MAJORPENTATONIC);
        expect(aMajorPentatonicScale).toEqual(['A', 'B', 'C#/Db', 'E', 'F#/Gb', 'A']);
    });

    test('Generate A#/Bb Major Pentatonic Scale', () => {
        const abMajorPentatonicScale = generateScale("A#/Bb", Patterns.MAJORPENTATONIC);
        expect(abMajorPentatonicScale).toEqual(['A#/Bb', 'C', 'D', 'F', 'G', 'A#/Bb']);
    });

    test('Generate B Major Pentatonic Scale', () => {
        const bMajorPentatonicScale = generateScale("B", Patterns.MAJORPENTATONIC);
        expect(bMajorPentatonicScale).toEqual(['B', 'C#/Db', 'D#/Eb', 'F#/Gb', 'G#/Ab', 'B']);
    });
});

describe('Minor Pentatonic Scales', () => {
    test('Generate C Minor Pentatonic Scale', () => {
        const cMinorPentatonicScale = generateScale("C", Patterns.MINORPENTATONIC);
        expect(cMinorPentatonicScale).toEqual(['C', 'D#/Eb', 'F', 'G', 'A#/Bb', 'C']);
    });

    test('Generate C#/Db Minor Pentatonic Scale', () => {
        const cdMinorPentatonicScale = generateScale("C#/Db", Patterns.MINORPENTATONIC);
        expect(cdMinorPentatonicScale).toEqual(['C#/Db', 'E', 'F#/Gb', 'G#/Ab', 'B', 'C#/Db']);
    });

    test('Generate D Minor Pentatonic Scale', () => {
        const dMinorPentatonicScale = generateScale("D", Patterns.MINORPENTATONIC);
        expect(dMinorPentatonicScale).toEqual(['D', 'F', 'G', 'A', 'C', 'D']);
    });

    test('Generate D#/Eb Minor Pentatonic Scale', () => {
        const deMinorPentatonicScale = generateScale("D#/Eb", Patterns.MINORPENTATONIC);
        expect(deMinorPentatonicScale).toEqual(['D#/Eb', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'C#/Db', 'D#/Eb']);
    });

    test('Generate E Minor Pentatonic Scale', () => {
        const eMinorPentatonicScale = generateScale("E", Patterns.MINORPENTATONIC);
        expect(eMinorPentatonicScale).toEqual(['E', 'G', 'A', 'B', 'D', 'E']);
    });

    test('Generate F Minor Pentatonic Scale', () => {
        const fMinorPentatonicScale = generateScale("F", Patterns.MINORPENTATONIC);
        expect(fMinorPentatonicScale).toEqual(['F', 'G#/Ab', 'A#/Bb', 'C', 'D#/Eb', 'F']);
    });

    test('Generate F#/Gb Minor Pentatonic Scale', () => {
        const fgMinorPentatonicScale = generateScale("F#/Gb", Patterns.MINORPENTATONIC);
        expect(fgMinorPentatonicScale).toEqual(['F#/Gb', 'A', 'B', 'C#/Db', 'E', 'F#/Gb']);
    });

    test('Generate G Minor Pentatonic Scale', () => {
        const gMinorPentatonicScale = generateScale("G", Patterns.MINORPENTATONIC);
        expect(gMinorPentatonicScale).toEqual(['G', 'A#/Bb', 'C', 'D', 'F', 'G']);
    });

    test('Generate G#/Ab Minor Pentatonic Scale', () => {
        const gaMinorPentatonicScale = generateScale("G#/Ab", Patterns.MINORPENTATONIC);
        expect(gaMinorPentatonicScale).toEqual(['G#/Ab', 'B', 'C#/Db', 'D#/Eb', 'F#/Gb', 'G#/Ab']);
    });

    test('Generate A Minor Pentatonic Scale', () => {
        const aMinorPentatonicScale = generateScale("A", Patterns.MINORPENTATONIC);
        expect(aMinorPentatonicScale).toEqual(['A', 'C', 'D', 'E', 'G', 'A']);
    });

    test('Generate A#/Bb Minor Pentatonic Scale', () => {
        const abMinorPentatonicScale = generateScale("A#/Bb", Patterns.MINORPENTATONIC);
        expect(abMinorPentatonicScale).toEqual(['A#/Bb', 'C#/Db', 'D#/Eb', 'F', 'G#/Ab', 'A#/Bb']);
    });

    test('Generate B Minor Pentatonic Scale', () => {
        const bMinorPentatonicScale = generateScale("B", Patterns.MINORPENTATONIC);
        expect(bMinorPentatonicScale).toEqual(['B', 'D', 'E', 'F#/Gb', 'A', 'B']);
    });
});
