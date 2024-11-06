// console.log(document.URL)


// // Log all <p> elements in the document
console.log(document.querySelectorAll('h1'));

let h = document.querySelectorAll('.head')
h[0].innerText = "SANIYAJ"
h[0].style.backgroundColor = "green"
console.log(h)


// // DOM selectors
// // document.querySelector('')           // Selects the first matching element
// // document.querySelectorAll('')        // Selects all matching elements
// // document.getElementById('')          // Selects an element by its ID
// // document.getElementsByClassName('')  // Selects elements by their class name



// Attributes
let link = document.querySelector("a");
console.log(link.getAttribute('href'));  // Gets the relative href attribute



// Set a new link and update its text and color
link.setAttribute('href', "https://saniyajmallik.vercel.app");
console.log(link.getAttribute('href'));
link.innerText += " Saniyaj";
link.style.color = "red";













let head = document.querySelector("p")

// // Modify the class list
head.classList.add('active');             // Add class 'active'
head.classList.remove('active');          // Remove class 'active'
head.classList.replace('previousClass', 'newClass'); // Replace a class

// // Parent-Child Relationship
let parentDiv = document.querySelector('.box');
console.log(parentDiv)
console.log(parentDiv.children);         // Log all children of the parent
console.log(parentDiv.children[0]);      // Log the first child

// // Finding the parent from a child
const childP = document.querySelector(".child");
console.log(childP.parentElement);       // Log the parent element
console.log(childP.nextSibling);         // Log the next sibling (might include text nodes)

// // Event handling for multiple list items
const elements = document.querySelectorAll('li');

// Adding a click event to cross out items
// elements.forEach((element) => {
//     element.addEventListener('click', (e) => {
//         e.target.style.textDecoration = "line-through";
//         console.log(e.target.innerText);
//     });
// });

// // Adding a click event to remove items
// elements.forEach((element) => {
//     element.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

// // Adding new items to a list
const ul = document.querySelector('ul');
const addItem = document.querySelector('button');
console.log(ul)


addItem.addEventListener('click', () => {
    let li = document.createElement('li');  // Create a new <li> element
    li.innerText = 'Something new added';
    ul.append(li);                          // Append the new <li> to the end of <ul>
    // ul.prepend(li);                      // Uncomment to add at the top
});


// // Cut, Copy, and Paste Events
// let copyP = document.querySelector('.copy');
// copyP.addEventListener('copy', () => {
//     console.log("Can't copy");
// });

// // Mouse events - tracking cursor position
let hoverBox = document.querySelector('.hover-box');
let score = document.querySelector('.score');
console.log(score)
hoverBox.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, e.offsetY); // Logs the mouse X, Y position relative to the box
    score.innerText= e.offsetX
    score.innerText += e.offsetX
});

// // Form events - Prevent default form submission
let input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    console.log(e.target.value); // Logs the mouse X, Y position relative to the box
 
});