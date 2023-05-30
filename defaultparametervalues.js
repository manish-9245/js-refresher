const DownloadButtonRenderer = ({ value }) => (
  <button
    className="download-button"
    onClick={() => {
      const element = document.createElement('a');
      const file = new Blob([value], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'text.txt';
      element.click();
    }}
  >
    <FontAwesomeIcon icon={faDownload} />
  </button>
);






//ES5

function increment(x, y){
    return (y == undefined)? (x + 1): (x + y);
}

console.log(increment(5));
console.log(increment(5, 3));


//ES6
const increment2 = (x, y = 1) => x + y;
console.log(increment2(5));
console.log(increment2(5, 3));


//using destructuring
function greet([firstname, lastname = '']){
    console.log(`hello ${firstname} ${lastname}`)
};
greet(['Bill']);

function addup({item = 'bananas', price = 0, quantity = 0} = {}){
    console.log(`Please pay $${price * quantity} for ${quantity} ${item}`);
}

addup({item: 'bananas', price: 1, quantity: 5});
addup({});
addup();