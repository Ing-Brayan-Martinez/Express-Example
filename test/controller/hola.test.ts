import {describe, expect, test} from '@jest/globals';
import {getHola, getResult, sum} from "../../src/controller/hola";

describe('Hola', () => {

    test('getHola()', () => {
        expect(getHola()).toBe('hola');
    });

    test('getResult()', () => {
        expect(getResult().isPresent()).toBe(false);
    });

    test('sum()', () => {
        expect(sum(1, 2)).toBe(3);
    });
});