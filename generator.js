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

function generateWholeToneScale(rootNote) {
    let index = pitches.indexOf(rootNote);

    //const pattern = [0, 2, 4, 6, 8];

   for (let i = 0; i < 6; i++) {
        console.log(pitches[index]);
        index = index + 2;
        if(index >= 12 ) index =0;
   }

}

//generateWholeToneScale("F");

function generateMajorTriad(rootNote){
    let index = pitches.indexOf(rootNote);

    const pattern = [0, 4, 7];

    for (i = 0; i < pattern.length; i++) {
        let newIndex = index + pattern[i];
        if(newIndex >= 12 ) index =0;
        console.log(pitches[newIndex]);
    }


}
generateMajorTriad("F"); //F A C


// scales + chords
//circle of 5th and 4th