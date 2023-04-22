let cars=[];
for(let i=0;i<3;i++){
    cars[i]=function(){
        console.log(i);
    };
}
cars[0]();
cars[1]();
cars[2]();

var bikes=[];
function f(x){
    return function(){
        console.log(x);
    };
}
for(var i=0;i<3;i++){
    bikes[i]=f(i);
}