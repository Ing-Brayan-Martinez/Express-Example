import {describe, expect, test} from '@jest/globals';
import {getResult, sum} from "../../src/controller/hola";

describe('Hola', () => {

    test('sum()', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('getResult()', () => {
        expect(getResult().isPresent()).toBe(false);
    });
});