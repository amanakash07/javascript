// primitive : 7 types: String
//                      Numbers
//                      Boolean
//                      null
//                      undefined
//                      Symbol
//                      BigInt

// ReferenceType : (non primitive): Array
//                                  objects
//                                  functions

// // *********************************************/

//            primitive

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail; //undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId); // false

// const bigNumber = 34573258n
// console.log(typeof bigNumber);

// // *********************************************/

//           Reference (non-primitive)  //

// const heros = ["Deadpool", "spiderman", "Ironman"];
// console.log(typeof heros); // object - arrays treated as object in js.


// let myob ={ 
//     name: "Aman"
//     age: 24
// }   // object.

// const myFunction = function(){
//     console.log("hello world")
// }   // function.


//***********************************************************************************************//
//*******************************Stack and Heap Memory********************************************
//                         Stack(primitive), Heap(Non-primitive)
// Stack - in stack gives copy of the oridinal value. 
// Heap - in heap gives reference of the original value. if you change any value it Will change original value. 

let myYoutubename = "AmanAkash"
let anothername = myYoutubename
    anothername = "AkashYoutube"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "Aman@google.com"
console.log(userOne.email);
console.log(userTwo.email);