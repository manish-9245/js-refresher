const person = {name: 'John', age: 41};
const {name: n, age: a} = person;
console.log(n, a); // John 41

//deep matching
const {country: c, address:{postcode: p, housenumber: hn}} = {country: 'UK', address:{postcode: 'S', housenumber: 1}};
console.log(c, p, hn); // UK S 1

const {name, age}=person;
console.log(name,age);

//default values
const obj={city: 'Bangalore'}
const {city: city, country: country='India'} = obj;
console.log(city, country);