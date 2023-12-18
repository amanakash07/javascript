//singleton: if we declare as literals then it not formet.
// : if we declare as Literals then it always formed singleton.

// Object Literals.


const mysym = Symbol("key1")

const Jsuser = {
    Name: "Aman",
    "FullName": "Aman Akash",
    age: 24,
    Location: "bangalore",
    Email: "Aman@google.com",
    isLoggedIn: false,
    LastLoggedIn: ["Monday", "Wednesday"],
    [mysym]: "key1"
}

// console.log(Jsuser.Email);
// console.log(Jsuser["Email"]);

Jsuser.Email = "Aman@openai"

console.log(Jsuser.Email);
// Object.freeze(Jsuser) // after this we can't change anything into Js user.
Jsuser.Email = "Aman@bardai"
console.log(Jsuser.Email);

Jsuser.greating = function(){
    console.log("Hello Js user");
}

console.log(Jsuser.greating());

Jsuser.greatingTwo = function(){
    console.log(`Hello Js user, ${this.FullName}`);
}

console.log(Jsuser.greatingTwo());