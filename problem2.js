function fiboEvenSum(len){
    let a = 1, b = 1, c, sum = 0;
    for(let i = 2; i <= len; i++){
        c = a + b;
        a = b;
        b = c;

        if(c % 2 == 0) sum += c;
    }
    return sum;
}

module.exports = fiboEvenSum;