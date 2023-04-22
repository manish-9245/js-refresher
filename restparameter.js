function printAll(x, ...y){
    console.log(x);
    console.log(y);
}
printAll(1,2,3,4,5);

function pcheck(fn,ln,...bel){
    console.log(`Passenger name: ${fn} ${ln}`);
    console.log(`and the belongings are ${bel}`);
}
pcheck("John","Doe","laptop","mobile","wallet");