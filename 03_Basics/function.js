// function SayMyName() {
//     console.log("A");
//     console.log("M");
//     console.log("A");
//     console.log("N");
// }
// SayMyName ()


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(5,7)

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
}
const result = addTwoNumbers (5,3)
// console.log("Result:",result);

function loginUserMessage(username) {
    return `${username} just logged in`
}
// console.log(loginUserMessage("Aman"));

function loginUserMessage(username) {
    if(username === undefined){
        // console.log("please enter username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(2, 5, 7));

const user= {
    username: "Aman",
    price: 98
}
function handleObject(anyObject) {
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject (user)

handleObject({
    username: "Sam",
    price: 199
})

const myNewArray = [200, 400, 500, 1000]
function returnSecondvalue(getArray) {
    return getArray[3]
}
console.log(returnSecondvalue(myNewArray));