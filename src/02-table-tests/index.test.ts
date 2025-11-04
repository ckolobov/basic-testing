import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 5, b: 3, action: Action.Add, expected: 8 },
  { a: 10, b: 20, action: Action.Add, expected: 30 },
  { a: 10, b: 3, action: Action.Subtract, expected: 7 },
  { a: 5, b: 10, action: Action.Subtract, expected: -5 },
  { a: 5, b: 3, action: Action.Multiply, expected: 15 },
  { a: 7, b: 6, action: Action.Multiply, expected: 42 },
  { a: 15, b: 3, action: Action.Divide, expected: 5 },
  { a: 20, b: 4, action: Action.Divide, expected: 5 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected when $a $action $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each([
    { a: 5, b: 3, action: 'invalid', expected: null },
    { a: 5, b: 3, action: '%', expected: null },
  ])(
    'should return null for invalid action $action',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each([
    { a: 'string', b: 3, action: Action.Add, expected: null },
    { a: 5, b: null, action: Action.Add, expected: null },
    { a: undefined, b: 3, action: Action.Subtract, expected: null },
  ])(
    'should return null for invalid arguments a=$a, b=$b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
