let str = "Any String";
let str3 = "Any String";

// console.log(str === str3); // true

// console.log(str);

let str2 = new String("Any String");

// console.log(str === str2); // true


// Escape Characters

// console.log('Hello\nWorld'); // Hello
//                             // World

// console.log('Hello\tWorld'); // Hello\tWorld
// console.log('Hello\\World'); // Hello\tWorld



// String Template
let name = 'Sani'

// console.log(`Hello, ${name}!`);


// String Method
// length
// let a = "This is a string"
// console.log(a.length)


// charAt()
// console.log(a.charAt(3))

// charCodeAt
// return ascii value
// console.log(a.charCodeAt(3))


// at()
// console.log(a.at(2));

let b = "This is a string"

// String[]
// console.log(b[6]);


// slice
// let slicePart = b.slice(1, 4) //last value is excluded
let slicePart = b.slice(-4) //last value is excluded
// console.log(slicePart);

// split

let splitPart = "my, name, is, sani".split(',', 3) // limit is 3 that is the length of  the result array 
console.log(splitPart);


// Substring

let substringPart = b.substring(-1, 4)  // does not take negative index
// console.log(substringPart);

// subStr

let substrPart = b.substr(1, 5) //length is 4

// console.log(substrPart);



// uppercase
console.log("small".toUpperCase());
// lowercase
console.log("BIG".toLowerCase());

// string concat
let p = "one "
let q = "two "
// let concat = p + q
// console.log(concat);

console.log(p.concat(q));

// trip

let s = "   hello world   "
console.log(s.trim());

console.log(s.trimStart())
console.log(s.trimEnd())


// search()

console.log(s.search("hello")) // returns index of first occurrence
console.log(s.search("WORLD")) // returns -1 if not found


// padStart()

let str4 = "123"
console.log(str4.padStart(5, '@')) // first argument is length
console.log(str4.padEnd(5, '@')) // first argument is length


// repeat

console.log("repeat ".repeat(5));

// replace

let str5 = "Hello, World!"
console.log(str5.replace("World", "Sani"))

// match

let str6 = "Hello, World! Hello, Sani!"
console.log(str6.match("Sani"))



// string loop
for (let i = 0; i < str6.length; i++) {
    console.log(str6[i]);
}



