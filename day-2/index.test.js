const fs = require('fs');
const { partOne } = require('./index.js');

describe('day 2', () => {
    describe('part one', () => {
        test('example 1', async () => {
            const data = `abcdef
            bababc
            abbcde
            abcccd
            aabcdd
            abcdee
            ababab`;
            fs.promises.readFile = jest.fn(() => data);

            await expect(partOne()).resolves.toBe(12);
        });
    });
});