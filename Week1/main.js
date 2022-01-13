var array=[2,5,3];

function sum(a,b){
    return a+b;
}

//console.log(sum(...array)); //spread operator

function sumN(...args){
    let numSum=0;

    for(const arg of args){
        numSum=arg;
    }
    return numSum;
}

//console.log(sumN(1,2,3,4,5));

function calculate(a,b,...args){
    let mult=1;
    let sumn=0;
    sumn=sum(a,b);
    for(const arg of args){
        mult=mult*arg;
    }
    return[sumn,mult]
}
console.log(calculate(1,2,3,4,5));

