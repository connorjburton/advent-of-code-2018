const fsConstants = require('fs').constants;
const fsPromises = require('fs').promises;
const path = require('path');
const memoize = require('lodash/memoize');

const getContents = async function getContents() {
    const contents = await fsPromises.readFile(path.resolve(__dirname, 'data'), { encoding: 'UTF-8', flag: fsConstants.O_RDONLY });
    return contents.split('\n').filter(value => value.trim()).map(value => value.trim());
}

const partOne = async function partOne() {
    const formatted = await getContents();
    const getNumberOfRepeats = memoize(value => {
        const total = { two: false, three: false };
        const counter = {};

        value.split('').forEach(char => {
            if (!counter[char]) {
                counter[char] = 1;
            } else {
                counter[char] += 1;
            }
        });

        const counterValues = Object.values(counter);
        total.two = counterValues.includes(2);
        total.three = counterValues.includes(3);

        return total;
    });

    const absoluteTotal = [0, 0];
    formatted.forEach(value => {
        const repeats = getNumberOfRepeats(value);
        if (repeats.two) {
            absoluteTotal[0] += 1;
        }

        if (repeats.three) {
            absoluteTotal[1] += 1;
        }
    });

    return absoluteTotal[0] * absoluteTotal[1];
}

module.exports = {
    partOne
};