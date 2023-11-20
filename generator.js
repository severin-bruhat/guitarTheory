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
    MINOR: [2, 1, 2, 2, 1, 2, 2],
    MAJORPENTATONIC: [2, 2, 3, 2, 3], // root, major second, major third, perfect fifth, major sixth [0, 2, 4, 7, 9]
    MINORPENTATONIC: [3, 2, 2, 3, 2] // root, minor third, perfect fourth, perfect fifth, minor seventh [0, 3, 5, 7, 10]

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


//TODO
// scales + chords
//circle of 5th and 4th