// const tinderuser = new Object
// console.log(tinderuser); //{} singleton object

// const tinderuser = {}
// console.log(tinderuser); //{}  non singleton onj.

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.email = "abc@gmail.com"
tinderuser.isLoggedIn = false
// console.log(tinderuser);

const regularuser = {
    email: "Aman@google.com",
    Fullname: {
        userfullname: {
            Firstname: "Aman",
            Lastname:"Akash"
        }
    }
}
// console.log(regularuser); //{
//     email: 'Aman@google.com',
//     Fullname: { userfullname: { Firstname: 'Aman', Lastname: 'Akash' } }
//   }
// console.log(regularuser.Fullname.userfullname.Firstname); //Aman

// console.log(Object.keys(tinderuser)); //[ 'id', 'email', 'isLoggedIn' ]
// console.log(Object.values(tinderuser)); //[ '123abc', 'abc@gmail.com', false ]
// console.log(Object.entries(tinderuser)); //  [ 'isLoggedIn', false ]
// console.log(tinderuser.hasOwnProperty('isLoggedIn')); //true

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
// const obj4 =  {obj1 , obj2 , obj3}
// console.log(obj4);
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);