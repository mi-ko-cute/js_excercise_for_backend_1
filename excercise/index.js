const math = require('./math.js');

const resultOfAdd = math.add(1, 2);
const resultOfSub = math.sub(3, 4);
const resultOfMul = math.mul(5, 6);
const resultOfDiv = math.div(7, 8);

console.log('math.add(1, 2)', resultOfAdd);
console.log('math.sub(3, 4)', resultOfSub);
console.log('math.mul(5, 6)', resultOfMul);
console.log('math.div(7, 8)', resultOfDiv);