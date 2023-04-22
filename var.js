var x=1;
function add1(y){
    var x=2;
    return x+y;
}
console.log(add1(3));
function add2(y){
    return y+x;
}
console.log(add2(3));
console.log(z);//hoisitng causes it to not throw an error
var z=1;
console.log(z);