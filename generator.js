var pitches = [
    "A",
    "A#/Bb",
    "B",
    "C",
    "C#/Db",
    "D",
    "D#/Eb",
    "E",
    "F",
    "F#/Gb",
    "G",
    "G#/Ab",
]

const Scales = {
    WHOLETONE: [0, 2, 4, 6, 8, 10, 12], //whole step
    MAJORTRIAD: [0, 4, 7], //root, major third and perfect fifth.
    MINORTRIAD: [0, 3, 7], //root, a minor third and a perfect fifth
}

function generateScale(rootNote, pattern){
    const rootIndex = pitches.indexOf(rootNote);
    if (rootIndex === -1) {
      return "Invalid root note";
    }
  
    const scale = [];

    for (let i = 0; i < pattern.length; i++) {
        scale.push(pitches[(rootIndex + pattern[i]) % 12]);
    }
  
    return scale;
}


// Example usage:
const cWholeToneScale = generateScale("C", Scales.WHOLETONE);
console.log("C Whole-Tone Scale:", cWholeToneScale);
  

const fMajorTriad = generateScale("F", Scales.MAJORTRIAD);
console.log("F Major Triad:", fMajorTriad);


//TODO
// scales + chords
//circle of 5th and 4th