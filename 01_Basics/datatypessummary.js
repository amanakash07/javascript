primitive : 7 types: String
                     Numbers
                     Boolean
                     null
                     undefined
                     Symbol
                     BigInt

ReferenceType : (non primitive): Array
                                 objects
                                 functions

// *********************************************/

           primitive

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false

const bigNumber = 34573258n
console.log(typeof bigNumber);

// *********************************************/

          Reference (non-primitive)  //

const heros = ["Deadpool", "spiderman", "Ironman"];
console.log(typeof heros); // object - arrays treated as object in js.


let myob ={ 
    name: "Aman"
    age: 24
}   // object.

const myFunction = function(){
    console.log("hello world")
}   // function.

