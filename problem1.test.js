const multiplesOf3and5 = require('./problem1');

//trivial case
test("Sum of multiples of 3 and 5 less than 10", () => {
    expect(multiplesOf3and5(10)).toBe(23);
})

//multiplesOf3and5(1000) should return 233168. 
test("Sum of multiples of 3 and 5 less than 1000", () => {
    expect(multiplesOf3and5(1000)).toBe(233168);
})
//multiplesOf3and5(49) should return 543.  
test("Sum of multiples of 3 and 5 less than 49", () => {
    expect(multiplesOf3and5(49)).toBe(543);
})

//multiplesOf3and5(19564) should return 89301183. 
test("Sum of multiples of 3 and 5 less than 19564", () => {
    expect(multiplesOf3and5(19564)).toBe(89301183);
})

//multiplesOf3and5(8456) should return 16687353. 
test("Sum of multiples of 3 and 5 less than 49", () => {
    expect(multiplesOf3and5(8456)).toBe(16687353);
})