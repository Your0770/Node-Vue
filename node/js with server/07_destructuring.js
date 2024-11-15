// 07_destructuring.js

// 1) Object
let person = {
  firstName : "John",
  lastName : "Doe",
  age : 37,
  email : "john@gmail.com",
  country : "USA"
};

let {lastName, email} = person;
console.log(lastName);
console.log(email);

function getFullName({firstName, lastName}){
  return `${lastName}, ${firstName}` ;
};
console.log(getFullName(person));

// 2) Array
let scores = [70, 80, 90];

let [a, b, c] = scores;
console.log(a);
console.log(b);
console.log(c);
