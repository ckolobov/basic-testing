import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    await expect(resolveValue('Hello')).resolves.toBe('Hello');
    await expect(resolveValue(42)).resolves.toBe(42);
    await expect(resolveValue(null)).resolves.toBeNull();
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('Custom error message')).toThrow(
      'Custom error message',
    );
    expect(() => throwError('Another message')).toThrow(Error);
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
    expect(() => throwError()).toThrow(Error);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
    expect(() => throwCustomError()).toThrow(
      'This is my awesome custom error!',
    );
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
    await expect(rejectCustomError()).rejects.toThrow(
      'This is my awesome custom error!',
    );
  });
});
