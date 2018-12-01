const fs = require('fs');
const index = require('./index.js');

describe('day 1', () => {
    test('positive result works', async () => {
        const data = `+1
        +1
        +1
        `;
        fs.promises.readFile = jest.fn(() => data);

        await expect(index()).resolves.toBe(3);
    });

    test('zero result works', async () => {
        const data = `+1
        +1
        -2
        `;
        fs.promises.readFile = jest.fn(() => data);

        await expect(index()).resolves.toBe(0);
    });

    test('negative result works', async () => {
        const data = `-1
        -2
        -3
        `;
        fs.promises.readFile = jest.fn(() => data);

        await expect(index()).resolves.toBe(-6);
    });
});