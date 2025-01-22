import { describe, it, expect } from 'vitest';
import { parse } from './num';

describe('parse', () => {
  it('should parse integer numbers correctly', () => {
    expect(parse(42)).toBe(42);
    expect(parse(0)).toBe(0);
    expect(parse(-123)).toBe(-123);
  });

  it('should truncate floating point numbers', () => {
    expect(parse(3.14)).toBe(3);
    expect(parse(-2.9)).toBe(-2);
    expect(parse(0.9)).toBe(0);
  });
});
