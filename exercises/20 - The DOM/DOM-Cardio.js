console.log('it works')
// Make a div
const div = document.createElement('div')
console.log(div)
// add a class of wrapper to it
div.className = "wrapper"
// put it into the body
document.body.append(div)

// make an unordered list
const ul = document.createElement('ul')
console.log(ul)

// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li')
li1.innerText = "one"
const li2 = document.createElement('li')
li2.innerText = "two"
const li3 = document.createElement('li')
li3.innerText = "three"
const list = document.body.append(ul)
ul.append(li1, li2, li3)

// put that list into the above wrapper
div.append(ul)


// create an image
const image = document.createElement('img')
// set the source to an image
image.src = "https://thehappypuppysite.com/wp-content/uploads/2018/10/miniature-pug-long.jpg"
// set the width to 250
image.width = 250
// add a class of cute
image.ClassName = "cute"
// add an alt of Cute Puppy
image.alt = "Cute Puppy"
// Append that image to the wrapper
div.append(image)

// with HTML string, make a div, with two paragraphs inside of it
const paragraphs = document.createElement("p")
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
