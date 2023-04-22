let x=1;
//let x=3; redeclaration throws an error
function add (y){
    return y+x;
}
console.log(add(3));
function add2(y){
    let x=2;
    return y+x;
}
console.log(add2(3));
//console.log(z);//throws an error since its not hoisted
let z;
console.log(z);//shows undefined