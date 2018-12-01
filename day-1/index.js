const fsConstants = require('fs').constants;
const fsPromises = require('fs').promises;
const path = require('path');

const index = async function index() {
    const contents = await fsPromises.readFile(path.resolve(__dirname, 'data'), { encoding: 'UTF-8', flag: fsConstants.O_RDONLY });
    const formatted = contents.split('\n').filter(value => value.trim()).map(value => parseInt(value.trim()));
    return formatted.reduce((prev, current) => prev + current);
}

module.exports = index;