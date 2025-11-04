import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 3, action: Action.Add })).toBe(8);
    expect(simpleCalculator({ a: 10, b: 20, action: Action.Add })).toBe(30);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 3, action: Action.Subtract })).toBe(7);
    expect(simpleCalculator({ a: 5, b: 10, action: Action.Subtract })).toBe(-5);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 3, action: Action.Multiply })).toBe(15);
    expect(simpleCalculator({ a: 7, b: 6, action: Action.Multiply })).toBe(42);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 15, b: 3, action: Action.Divide })).toBe(5);
    expect(simpleCalculator({ a: 20, b: 4, action: Action.Divide })).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(
      8,
    );
    expect(simpleCalculator({ a: 5, b: 2, action: Action.Exponentiate })).toBe(
      25,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 5, b: 3, action: 'invalid' })).toBeNull();
    expect(simpleCalculator({ a: 5, b: 3, action: '%' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(
      simpleCalculator({ a: 'string', b: 3, action: Action.Add }),
    ).toBeNull();
    expect(simpleCalculator({ a: 5, b: null, action: Action.Add })).toBeNull();
    expect(
      simpleCalculator({ a: undefined, b: 3, action: Action.Subtract }),
    ).toBeNull();
  });
});
