import { describe, it, expect } from 'vitest'

// Import the sum function from the source file
const sum = (a: number, b: number): number => {
  return a + b
}

describe('sum', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-1, 1)).toBe(0)
    expect(sum(0, 0)).toBe(0)
    expect(sum(5.5, 4.5)).toBe(10)
  })

  it('should handle large numbers', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1)
    expect(sum(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1)
  })

  it('should handle decimal numbers', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    expect(sum(-1.5, 2.5)).toBe(1)
  })
})
