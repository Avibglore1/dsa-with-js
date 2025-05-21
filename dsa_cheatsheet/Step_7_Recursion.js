const n=50;
function countGoodNumbers(n){
let MOD=1_000_000_007n;
function modPow(base,exponent){
    let result=1n;
    base=BigInt(base);
    exponent=BigInt(exponent);
    base=base%MOD;
    while(exponent>0){
        if(exponent%2n===1n) result=(result*base)%MOD;
        
    
    base=(base*base)%MOD;
    exponent=exponent/2n;
    }
    return result;
}
let evenCount=Math.ceil(n/2);
let oddCount=Math.floor(n/2);

let evenWays=modPow(5n,evenCount);
let oddWays=modPow(4n,oddCount);

return Number((evenWays*oddWays)%MOD);
}

console.log(countGoodNumbers(n));
