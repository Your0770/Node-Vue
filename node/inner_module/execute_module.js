// execute_module.js

const cal = require('./calculator.js');
const { add, mul } = require('./calculator.js');

let result = cal.add(10,5);
console.log(result);

result = add(20, 50);
console.log(result);

result = mul(2, 30);
console.log(result);