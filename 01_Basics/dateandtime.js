// let myDate = new Date ()
// console.log(myDate.toString()); //Fri Dec 15 2023 18:04:59 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Fri Dec 15 2023
// console.log(myDate.toLocaleString()); //12/15/2023, 6:06:00 PM
// console.log(typeof myDate); //object

// let myCreateddate = new Date(2023,0,23)
// console.log(myCreateddate.toDateString()); //Mon Jan 23 2023

// let myCreateddate = new Date(2023,0,23,5,7)
// console.log(myCreateddate.toLocaleString()); //1/23/2023, 5:07:00 AM

// let myCreateddate = new Date("2023-12-17")
// console.log(myCreateddate.toLocaleString); //[Function: toLocaleString]

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1702747291220
// console.log(myCreateddate.getTime()); //1702771200000
// console.log(Math.floor(Date.now()/1000));
// console.log(Date.now());

let newDate = new Date ()
console.log(newDate); //2023-12-16T17:33:48.081Z
console.log(newDate.getDay()); //6
console.log(newDate.getMonth()+1); //12
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`); //6 and the time is 1702748290710

newDate.toLocaleString('default',{
    weekday: "long"
})