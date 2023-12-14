const name = "Aman"
const repoCount = 15
// console.log(name + repoCount + " value"); this is the old method. neaver use it. latest method below.
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Amangg33')
console.log(gameName[0]); //A
console.log(gameName.__proto__); //{}
console.log(gameName.length); //8
console.log(gameName.toUpperCase()); //AMANGG33
console.log(gameName.charAt(2)); //a
console.log(gameName.indexOf('n')); //3

const newstring = gameName.substring(0,4)
console.log(newstring); // Aman

const anotherString = gameName.slice(1,4)
console.log(anotherString); //man

const newStringone = "            Aman      "
console.log(newStringone.trim()); //Aman

const url = "https://AmanAkash.com/aman%30Akash"
console.log(url.replace('%30','_')); //https://AmanAkash.com/aman_Akash
console.log(url.includes('Akash')); //true

console.log(gameName.split('gg')); // ['Aman', '33']
