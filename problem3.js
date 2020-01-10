function isPrime(x){
    let lim = Math.ceil(Math.sqrt(x));
    for(let i = 2; i < lim; i++){
        if(x % i == 0) return false;
    }
    return true;
}

function largestPrimeFactor(n) {
    //check if the number itself is prime
    // if(isPrime(n)) return n;
    for(let i = 2; i <= Math.floor(n/2) ; i++){
        //if i is a factor - factorize n and try for next factor
        while(n % i == 0 && n != i) n /= i;
    }
    return n;
}


module.exports = {largestPrimeFactor, isPrime};