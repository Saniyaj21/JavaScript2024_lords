

// function sendMessage() {
//     console.log("welcome " + "Saniyaj");
// }

// sendMessage();

// here user is a parameter
// function sendMessage(user) {
//     console.log("welcome " + user );
// }
// function sendMessage(user = "Saniyaj") {
//     console.log("welcome " + user);
// }

// sendMessage();
// sendMessage("Shubha");
// sendMessage("Rohit");


// function sum(a, b) {
//     return a + b;
//     console.log(a + b);
// }

// console.log(sum(2, 3))

// let result = sum(3, 3);

// console.log(result)

// // method overriding
// function mul(a, b) {
//     return a * b
// }
// console.log(mul(2, 3))

// function mul(a, b, c) {
//     return a * b * c
// }

// console.log(mul(2, 3)) //NaN -> Not a number
// console.log(mul(2, 3, 2))

// anynomous function
// let sum2 = function(a,b){
//     console.log(a + b);
// }
// sum2(2, 3);



// arrow function
const printname = (name) => console.log(name);
// printname("Sani")

const checkEven = (num) => {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// let result = checkEven(2)
// console.log(result);


// higher order function
const upper = (str) => {
    return str.toUpperCase();
}
const lower = (str) => {
    return str.toLowerCase()
}

// console.log(upper("sani"));
// console.log(lower("SANI"));

// const transform = function (str, func) {
//     return func(str);
// }

// console.log(transform("java", upper));
// console.log(transform("PYTHON", lower));

// const printClass = function (className) {
//     console.log(`Welcome to ${className} class`);
// }
// const printAge = function (age) {
//     console.log(`Your age is ${age}`);
// }

// let higherOrder = function (arg, func) {
//     return func(arg)
// }
// higherOrder("20", printAge)
// higherOrder("VI", printClass)

// Immediately invoked function
(function (name) {
    console.log("Immediate execution " + name);
})('Saniyaj')


// setTime out function
const demo = () => console.log("Demo")


// setTimeout(demo, 3000)

// setTimeout(() => {
//     console.log("Demo")
// }, 3000)


// setinterval
// loop

// setInterval(demo, 2000)
// setInterval(() => {
//     console.log("Demo")
// }, 2000)   //2000ms = 2s


// function hoisting in js
hoist1(89)


function hoist1(a) {
    console.log(a);
}


// it will return a error 
// hoist2(78)

// let hoist2 = (a) => console.log(a)



