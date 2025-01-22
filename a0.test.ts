import { describe, it, expect } from 'vitest';
import { greet } from './a0';

describe('greet', () => {
  it('should return greeting with name', () => {
    expect(greet('John')).toBe('Hello John');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello ');
  });
});
