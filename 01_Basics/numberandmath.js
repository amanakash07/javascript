const score = 500
console.log(score); //500

const balance = new Number(200)
console.log(balance); //[Number: 200]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //200.00

const othernumber = 123.8956
console.log(othernumber.toPrecision(4)); //123.9

const hundreds = 500000
console.log(hundreds.toLocaleString()); //500,000
console.log(hundreds.toLocaleString('eng-In')); //5,00,000

//********************************Maths*********************************/

console.log(Math); //object [Math] {}
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,9,7,2,6,5)); //2
console.log(Math.max(4,9,6,8,5,3)); //9
console.log(Math.random());
console.log(Math.random()*10);
// console.log(Math.random()*10+1); // avoid due to bodmas problem
console.log((Math.random()*10)+1); // this is the better way
console.log(Math.floor(Math.random()*10)+1); //used floor for reducing decimals.

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);
