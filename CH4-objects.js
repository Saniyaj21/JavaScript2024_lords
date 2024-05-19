// Previous class
function print(a, b, ...others) {
    console.log(a, b, others);
}

// print(10, 30, 60, 40, 80, 888 , 99)

// Object in JS

// let person = {
//     name: "Sani",
//     age: 20,
//     city: "Dhaka"
// }

// console.log(person);
// console.log(person.name);
// console.log(person['age']);

// value update

// person.name = "Saniyaj"
// console.log(person.name);

// person['name'] = "Saniyaj"
// console.log(person.name);


// delete a key value
// console.log(person);
// delete person.city
// console.log(person);

// let person = {
//     name: "Sani",
//     age: 20,
//     city: "Dhaka",
//     getAge: function (yob) {
//         return 2024 - yob
//     }
// }

// let age = person.getAge(2001)
// console.log(age);

// this keyword
let ex2 = {
    name: "Sani",
    born: 2001,
    city: "Dhaka",
    getAge: function () {

        return 2024 - this.born
    }
}
let age = ex2.getAge()
console.log(age);

// nested object
// let car = {
//     name: "BMW",
//     model: "X5",
//     year: 2020,
//     owner: {
//         name: "Sani",
//         age: 20,
//         city: "Dhaka"
//     }
// }

// console.log(car.owner.name)

let mainPlain = {
    bookings: [],
    book: function (name, airLine, sit) {
        this.bookings.push({
            name, sit, airLine
        })
    }
}

// mainPlain.book("sani", "airIndia", 1)
// mainPlain.book("Shubha", "airIndia", 1)

let childPlain = {
    bookings: []
}

// console.log("bookings", childPlain.bookings);
// let bookVar = mainPlain.book
// mainPlain.book.call(childPlain, "sani", "airIndia", 1)
// bookVar.call(childPlain, "sani", "airIndia", 1)
// mainPlain.book.apply(childPlain, ["sani", "airIndia", 1])



// console.log("bookings", childPlain.bookings);

// bind method
// function greeting() {
//     console.log(this.user);
// }

// let obj2 = {
//     user: "Shubha"
// }

// let greet = greeting.bind(obj2)

// greet()

let person = {
    name: "Sani",
    age: 20,
    city: "Dhaka"
}

// for in loop
for (key in person) {
    console.log(key, person[key]);
}

// object methods
console.log(Object.keys(person))

console.log(Object.values(person))
console.log(Object.entries(person))

console.log(Object)

// object freeze 
// let obj3 = {
//     id: 1
// }


// Object.freeze(obj3)
// obj3.id = 2
// console.log(obj3.id);

// object seal 
let obj3 = {
    id: 1
}


Object.seal(obj3)
obj3.id = 2
delete obj3.id  // no impact will happen
console.log(obj3.id);