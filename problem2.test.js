const fiboEvenSum = require('./problem2');

test("fiboEvenSum(10) should return 44.", () =>{
    expect(fiboEvenSum(10)).toBe(44);
})

test("fiboEvenSum(18) should return 3382.", () => {
    expect(fiboEvenSum(18)).toBe(3382);
})

test("fiboEvenSum(23) should return 60696.", () => {
    expect(fiboEvenSum(23)).toBe(60696);
})

test("fiboEvenSum(43) should return 350704366.", () => {
    expect(fiboEvenSum(43)).toBe(350704366);
})

test("Your function should return an even value.", () => {
    expect(fiboEvenSum(5)%2).toBe(0);
})