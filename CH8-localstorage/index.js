




























console.log("Local Storage")
// set item
localStorage.setItem('name', 'saniyaj') // key , value
localStorage.setItem('age', '21')


console.log(localStorage)
console.log(localStorage.name)
console.log(localStorage.getItem('age'))


// update
localStorage.age = 26
localStorage.setItem('age', 50)
console.log(localStorage.getItem('age'))

localStorage.removeItem('age')
console.log(localStorage.getItem('age'))

// storing array or objects in locak storage
let arr = [{id:1, name:'saniyaj'}, {id:2, name:'shubha'}]

localStorage.setItem('arr',JSON.stringify(arr))
console.log(localStorage)

let getArr = localStorage.getItem('arr')
console.log('arr storage ',JSON.parse(getArr))