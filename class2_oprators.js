
// 1 : arithmatic operator
// 2 : assignment operator
// 3 : comparisons operator
// 4 : string operator
// 5 : logical operator
// 6 : bitwise operator
// 7 : type operator


// 1 : arithmatic operator

// addition
// let a = 8
// let b = 2

// console.log(a + b)

// subtract
// let a = 8
// let b = 2


// multiplication
// let a = 8
// let b = 2

// console.log(a * b)

// multiplication
// let a = 8
// let b = 2

// console.log(a / b)


// exponentiation (power of)
// let a = 8
// let b = 2

// console.log(a ** b)


// modulus
// let a = 9
// let b = 2

// console.log(a % b)

// increment
// let a = 9
// a ++
// console.log(a)

// decrement
// let a = 9
// a --
// console.log(a)



// 2 : assignment operator

// =
// let a = 10
// console.log(a);

// // +=
// let a = 10
// // a = a + 3
// a += 3
// console.log(a);

// // -=
// let a = 10
// // a = a - 3
// a -= 3
// console.log(a);

// // *=
// let a = 10
// // a = a * 3
// a *= 3
// console.log(a);

// // /=
// let a = 10
// // a = a / 3
// a /= 3
// console.log(a);


// // %=
// let a = 10
// // a = a % 3
// a %= 3
// console.log(a);

// // **=
// let a = 10
// // a = a ** 3
// a **= 3
// console.log(a);



// 3 : comparisons operator -> boolean value

// equal to  value
// let a = "8"
// let b = 8

// console.log(a == b)

// equal to value and type 
// let a1 = "8"
// let b1 = 8


// console.log(a1 === b1)

// not equal to value
// let a = 9
// let b = 10
// console.log(a != b);

// not equal to value and type

// let a1 = "9"
// let b1 = 9
// console.log(a1!== b1);

// greater than
// let a1 = 7
// let b1 = 9
// console.log(a1 > b1);

// less than
// let a1 = 87
// let b1 = 9
// console.log(a1 < b1);

// greater than or equal to
// let a1 = 8
// let b1 = 9
// console.log(a1 >= b1);

// less than or equal to
// let a1 = 8
// let b1 = 9
// console.log(a1 <= b1);


// 4 : string operator

// string comparision
// console.log('a' < 'b')
// a = 97
// b = 98
// c = 99
// ascii

// string concatenation
// let first = "Saniyaj"
// let last = "Mallik"
// let name = first + " " + last
// console.log(name);

// let str1 = "Welcone to"

// str1 += " Lords JS"

// console.log(str1);






// 5 : logical operator


// // logical and &&

// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

if (2 < 3 && 3 > 4) {
    console.log('first case');
}



// logical or ||

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)


// if (true || false) {
//     console.log('first case');
// }


// logical not  !

// console.log(!true)
// console.log(!false)

// if (!false) {
//     console.log('first case');
// }





// 6 : bitwise operator

// binary number

// 8 -> 1000

// and ->
// console.log(5 & 1)

// 8 4 2 1

// 0 1 0 1 -> 5
// 0 0 0 1 -> 1
// ---------------
// 0 0 0 1 -> 1

// bitwise or
// console.log(5 | 1)

// 8 4 2 1
// 0 1 0 1 -> 5
// 0 0 0 1 -> 1
// ---------------
// 0 1 0 1 -> 5

// bitwise not
// console.log( ~5)

// 8 4 2 1
// 0 1 0 1 -> 5
// ---------------
// 1 0 1 0 -> 10


// xor

// xor operator compares between two bits and retuen 1 for each different bit else  0 
// 8 4 2 1
// 0 1 0 1 -> 5
// 0 0 0 1 -> 1
// ---------------
// 0 1 0 0 -> 4

// console.log(5 ^ 1)

// righ shift
// 8 4 2 1

// 0 1 0 1 -> 5

// ---------------
// 0 0 1 0  -> 2

// console.log(5 >> 1)

// left shift
// 8 4 2 1

// 0 1 0 1 -> 5

// ---------------
// 1 0 1 0 -> 
// console.log(5 << 1)




// 7 : type operator

console.log(typeof 5)
console.log(typeof "5")
console.log(typeof true)

// instance of

console.log(5 instanceof Number)

class myCar { }

let car = new myCar()
// car is a object of myCar class
console.log(car instanceof myCar)
console.log(car instanceof Object)


// ****************** end *****************

