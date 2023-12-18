const myArr = [0, 1, 2, 3, 4, 5, 6]
// console.log(myArr);

// const myHero = ["spiderman", "superman", "Deadpool"]
// console.log(myHero);

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2);

// console.log(myHero[0]);


// Array Methods 

// myArr.push (7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(-1)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9)); // False. because 9 is not available in myArr.
// console.log(myArr.indexOf(7)); //-1

// const NewArr = myArr.join
// console.log(myArr);
// console.log(NewArr); //[Function: join]
// console.log(typeof NewArr); //function


// Slice, Splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1); //[ 1, 2 ] //  slice(1, 3) creates a new array (myn1) containing elements from index 1 to index 2 of myArr. In other words, it captures the elements at positions 1 and 2.  stop slicing just before reaching the element at index 3. It's like taking a snapshot of a portion of the array.

console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2); //  splice(1, 3), it modifies myArr by removing elements starting from index 1, up to 3 elements. The removed elements [1, 2, 3] are assigned to myn2. So, it prints: [ 1, 2, 3 ]

