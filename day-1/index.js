const fsConstants = require('fs').constants;
const fsPromises = require('fs').promises;
const path = require('path');

const getContents = async function getContents() {
    const contents = await fsPromises.readFile(path.resolve(__dirname, 'data'), { encoding: 'UTF-8', flag: fsConstants.O_RDONLY });
    return contents.split('\n').filter(value => value.trim()).map(value => parseInt(value.trim()));
}

const partOne = async function partOne() {
    const formatted = await getContents();
    return formatted.reduce((prev, current) => prev + current);
}

const partTwo = async function partTwo() {
    const formatted = await getContents();
    let i = 0;
    let total = 0;
    const seen = [0];
    
    const length = formatted.length;
    while (true) {
        for (i; i < length; i++) {
            total = total + formatted[i];
            
            if (seen.includes(total)) {
                return total;
            }

            seen.push(total);

            if (i === length - 1) {
                i = -1;
                continue;
            }
        }
    }
}

module.exports = {
    partOne,
    partTwo
};