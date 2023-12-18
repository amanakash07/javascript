const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); //[ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'Superman', 'Flash' ] ]
// console.log(marvel_heros[3][1]); //Superman

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros); //[ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'Superman', 'Flash' ]

const all_heros = [...marvel_heros, ...dc_heros] // spread function
console.log(all_heros); //[ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'Superman', 'Flash' ]

const myarr = [1,2,3,[4,5,6],7,[6,7,[4,9]]]
const Actualarr = myarr.flat(Infinity)
console.log(Actualarr); //[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     9
//   ]

console.log(Array.isArray("Aman")); //false
console.log(Array.from("Aman")); //[ 'A', 'm', 'a', 'n' ]

console.log(Array.from({Name: "Aman"})); //[]


let Score1 = 100
let Score2 = 200
let Score3 = 300
console.log(Array.of(Score1, Score2, Score3)); //[ 100, 200, 300 ]
