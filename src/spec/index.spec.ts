import * as index from '../index';

describe('the index.ts module', () => {
    describe('the add function', () => {
        it('should add two numbers together', () => {
            let sum = index.add(4, 5);
            expect(sum).toBe(9);
        });
    });
});