const {largestPrimeFactor, isPrime} = require('./problem3');

test("2 should be prime", () => {
    expect(isPrime(2)).toBe(true);
})

test("6857 should be be prime (true)", () => {
    expect(isPrime(6857)).toBe(true);
})

test("55 should be be not prime (false)", () => {
    expect(isPrime(55)).toBe(false);
})

test("largestPrimeFactor(2) should return 2.", () => {
    expect(largestPrimeFactor(2)).toBe(2);
})

test("largestPrimeFactor(3) should return 3.", () => {
    expect(largestPrimeFactor(3)).toBe(3);
})

test("largestPrimeFactor(5) should return 5.", () => {
    expect(largestPrimeFactor(5)).toBe(5);
})

test("largestPrimeFactor(7) should return 7.", () => {
    expect(largestPrimeFactor(7)).toBe(7);
})

test("largestPrimeFactor(13195) should return 29.", () => {
    expect(largestPrimeFactor(13195)).toBe(29);
})

test("largestPrimeFactor(600851475143) should return 6857.", () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
})
