

function factorial(n) {

    if(typeof(n) !== 'number' || !Number.isInteger(n)){
        return 'error!';
        //n = n* (n -1)*(n -2) ....*1
    }

    if(n>=1 ){
        return n * factorial(n -1);
    }
    else {
        return 1;
        }
        //    return n ? n * factorial(n -1): 1;
        //return fact;
}
console.log(factorial(4));
console.log(factorial(5.9));