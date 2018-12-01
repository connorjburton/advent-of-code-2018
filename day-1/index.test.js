const fs = require('fs');
const { partOne, partTwo } = require('./index.js');

describe('day 1', () => {
    describe('part one', () => {
        test('positive result works', async () => {
            const data = `+1
            +1
            +1
            `;
            fs.promises.readFile = jest.fn(() => data);

            await expect(partOne()).resolves.toBe(3);
        });

        test('zero result works', async () => {
            const data = `+1
            +1
            -2
            `;
            fs.promises.readFile = jest.fn(() => data);

            await expect(partOne()).resolves.toBe(0);
        });

        test('negative result works', async () => {
            const data = `-1
            -2
            -3
            `;
            fs.promises.readFile = jest.fn(() => data);

            await expect(partOne()).resolves.toBe(-6);
        });
    });

    describe('part two', () => {
        test('0 first reach', async () => {
            const data = `+1
            -1
            `;
            fs.promises.readFile = jest.fn(() => data);

            await expect(partTwo()).resolves.toBe(0);
        });

        test('10 first reach', async () => {
            const data = `+3
            +3
            +4
            -2
            -4
            `;
            fs.promises.readFile = jest.fn(() => data);

            await expect(partTwo()).resolves.toBe(10);
        });

        test('5 first reach', async () => {
            const data = `-6
            +3
            +8
            +5
            -6
            `;
            fs.promises.readFile = jest.fn(() => data);

            await expect(partTwo()).resolves.toBe(5);
        });

        test('14 first reach', async () => {
            const data = `+7
            +7
            -2
            -7
            -4
            `;
            fs.promises.readFile = jest.fn(() => data);

            await expect(partTwo()).resolves.toBe(14);
        });
    });
});