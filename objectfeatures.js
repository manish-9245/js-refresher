//function definition
const phone = {
    ring: function(i){
        console.log("tring ".repeat(i));
    }
}
phone.ring(3);

//computed property keys
const x='make';
function g(){
    return "ring";
}
const phone2={
    [x]: "Samsung",
    [g()](i){
        console.log("tring ".repeat(i));
    }
}
console.log(phone2);
phone2.ring(5);
