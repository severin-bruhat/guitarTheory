const { generateScale, Patterns } = require('../generator.js');

test('Generate C Major Scale', () => {
    const cMajorScale = generateScale("C", Patterns.MAJOR);
    expect(cMajorScale).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
});

