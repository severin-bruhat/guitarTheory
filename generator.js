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


const Patterns = {
    WHOLETONE: [2, 2, 2, 2, 2, 2], //whole step
    MAJORTRIAD: [0, 4, 3], //root, major third and perfect fifth. [0, 4, 7]
    MINORTRIAD: [0, 3, 4], //root, a minor third and a perfect fifth [0, 3, 7]
    MAJOR: [2, 2, 1, 2, 2, 2, 1],
    MINOR: [2, 1, 2, 2, 1, 2, 2]
}

function generateScale(rootNote, pattern) {
    const rootIndex = pitches.indexOf(rootNote);
    if (rootIndex === -1) {
      return "Invalid root note";
    }
  
    const scale = [rootNote];
    let currentIndex = rootIndex;
  
    for (let i = 0; i < pattern.length; i++) {
      currentIndex = (currentIndex + pattern[i]) % 12;
      scale.push(pitches[currentIndex]);
    }

    //hack for triads as we only want 3 notes
    if(pattern.toString() == Patterns.MAJORTRIAD.toString() || pattern.toString() == Patterns.MINORTRIAD.toString())
        return scale.slice(1);
        
    return scale;
  }

  module.exports = { Patterns, generateScale };

// Example usage:
// const cWholeToneScale = generateScale("C", Patterns.WHOLETONE);
// console.log("C Whole-Tone Scale:", cWholeToneScale);

// const fMajorTriad = generateScale("F", Patterns.MAJORTRIAD);
// console.log("F Major Triad:", fMajorTriad);

// const eMinorTriad = generateScale("E", Patterns.MINORTRIAD);
// console.log("E Minor Triad:", eMinorTriad);

// const cMajorScale = generateScale("C", Patterns.MAJOR);
// console.log("C Major Scale:", cMajorScale);

// const aNaturalMinorScale = generateScale("A", Patterns.MINOR);
// console.log("A Natural Minor Scale:", aNaturalMinorScale);

const cMajorTriad = generateScale("F", Patterns.MAJORTRIAD);
console.log("C Major Triad:", cMajorTriad);

const fWholeTone = generateScale("F", Patterns.WHOLETONE);
console.log("F Whole Tone:", fWholeTone);

//TODO
// scales + chords
//circle of 5th and 4th