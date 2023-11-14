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
    if(pattern.toString() == Scales.MAJORTRIAD.toString() || pattern.toString() == Scales.MINORTRIAD.toString())
        return scale.slice(1);
        
    return scale;
  }


// Example usage:
// const cWholeToneScale = generateScale("C", Scales.WHOLETONE);
// console.log("C Whole-Tone Scale:", cWholeToneScale);

// const fMajorTriad = generateScale("F", Scales.MAJORTRIAD);
// console.log("F Major Triad:", fMajorTriad);

// const eMinorTriad = generateScale("E", Scales.MINORTRIAD);
// console.log("E Minor Triad:", eMinorTriad);

// const cMajorScale = generateScale("C", Scales.MAJOR);
// console.log("C Major Scale:", cMajorScale);

// const aNaturalMinorScale = generateScale("A", Scales.MINOR);
// console.log("A Natural Minor Scale:", aNaturalMinorScale);

const cMajorTriad = generateScale("F", Scales.MAJORTRIAD);
console.log("C Major Triad:", cMajorTriad);

const fWholeTone = generateScale("F", Scales.WHOLETONE);
console.log("F Whole Tone:", fWholeTone);

//TODO
// scales + chords
//circle of 5th and 4th