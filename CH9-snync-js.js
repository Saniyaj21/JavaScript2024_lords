// console.log("Hellow")
// function demo(){
//         console.log("After 2 seconds")  
// }

// setTimeout(demo, 2000)

// console.log("End");


// // Callback
// function printResult(result) {
//     console.log("The result is :", result);
// }

// const sum = (a, b, printResult) => {
//     let result = a + b
//     printResult(result)
// }

// sum(9, 1, printResult)

// // 2nd example
// const dif = (a, b, sani) => {
//     sani(a, b)
// }

// dif(8, 3, (a, b) => {
//     console.log(a - b)
// })



// Promise
// States -> pending, fulfilled [resolved], reject

// const promise = new Promise((resolve, reject) => {
//     console.log("Cheking my balance");
//     resolve(100)
//     // reject("I don't have 100 rs")
// })

// console.log(promise);

// // to handle reject cases 
// promise.then((e) => {
//     console.log(e);

// }).catch((error) => {
//     console.log("Error happened");

// })



// async-await
// always return a promise

// const matchPassword = (password) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (password == 111) {
//                 resolve(true)
//             } else {
//                 reject("This is a error message")
//             }
//         }, 2000)
//     })
// }


// async function login(password) {
//     console.log("getting user");
//     try {


//         let isMatched = await matchPassword(password)
//         console.log("jiiiii");

//         console.log(isMatched);
//         let match = await matchPassword(111)
//         console.log(match);

//     } catch (error) {
//         console.log(error);

//     }

// }
// login(9988)


// map
// returns a new array
const num = [1, 2, 3, 4, 5];

// Square each number
const squares = num.map(num => num * num);

console.log(squares); // Output: [1, 4, 9, 16, 25]



// filter
// returns a new array
const ages = [18, 21, 16, 25, 30, 14];

// Filter out people who are not adults
const adults = ages.filter(age => age >= 18);

console.log(adults); // Output: [18, 21, 25, 30]


// reduce
// reduces an array to a single value
const numbers = [1, 2, 3, 4, 5];

// Sum up all numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Output: 15





