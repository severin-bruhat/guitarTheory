const { SCOPABLE_TYPES } = require('@babel/types');
const { generateScale, Patterns } = require('../generator.js');


//12major scales
//C Major, G Major, D Major, A Major, E Major, B Major, F# Major, C# Major, F Major, Eb Major, Ab Major, Db Major
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