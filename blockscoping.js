let y = 2;
{
  let x = 1;
  let z = 5;
  console.log (z);
}
{
  //console.log(x); throws an error
  let z = 4; //no errors
  console.log (z);
  console.log (y); //globally available
}
//Block Scoping using IIFe(Fake Scoping)
(function () {
  let x = 1;
  let z = 5;
  console.log (z);
});
//global scope helps get pass value
let pass;
let mark = 80;
if (mark > 50) {
  pass = true;
} else {
  pass = false;
}
console.log (pass);

greet (); //hoisiing gets hey
function greet () {
  console.log ('hey');
}
{
  function greet () {
    console.log ('hello');
  }
  greet (); //hello
  {
    function greet () {
      console.log ('hey there');
    }
  }
}
greet ();//hello