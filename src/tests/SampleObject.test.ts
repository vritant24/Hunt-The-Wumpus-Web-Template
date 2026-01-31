import {beforeEach, expect, test} from 'vitest'
import type ISampleObject from '../interfaces/ISampleObject'
import SampleObject from '../implementations/SampleObject'

// this variable will hold the object that we will be testing
let sampleObject : ISampleObject;

// Any code inside beforeEach will run before each of the tests.
// We will use it to CREATE the object that we want to test and store it
// in our sampleObject variable so that it's available in each of our tests
beforeEach(() => {
    sampleObject = new SampleObject();
})

test('add 2 positive numbers', () => {
    const result = sampleObject.add(1, 2);
    expect(result).toBe(3);
})

test('add a negative number with a positive number', () => {
    const result = sampleObject.add(-4, 5);
    expect(result).toBe(1);
})

test('add 2 negative numbers', () => {
    const result = sampleObject.add(-4, -5);
    expect(result).toBe(-9);
})

test('subtract 2 positive numbers, the first larger than the second', () => {
    const result = sampleObject.subtract(10, 5);
    expect(result).toBe(5);
})

test('subtract 2 positive numbers, the first smaller than the second', () => {
    const result = sampleObject.subtract(4, 6);
    expect(result).toBe(-2);
})

test('subtract 2 negative numbers', () => {
    const result = sampleObject.subtract(-4, -5);
    expect(result).toBe(1);
})