console.log('it works')
// Make a div
const div = document.createElement('div')

// add a class of wrapper to it
// div.className = "wrapper"
div.classList.add('wrapper')

// put it into the body
document.body.appendChild(div)

// make an unordered list
const ul = document.createElement('ul')
// const anotherUl = `<ul>
// <li>one</li>
// <li>two</li>
// <li>three</li>
// </ul>
// `

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
image.height = 250
//we can add height so it doesn't jump around on the page
// add a class of cute
// image.ClassName = "cute"
image.classList.add('cute')

// add an alt of Cute Puppy
image.alt = "Cute Puppy"
// Append that image to the wrapper
div.append(image)

// with HTML string, make a div, with two paragraphs inside of it
const div2 = document.createElement("div")
div2.innerHTML = `
<p class="remove">This is the first paragraph.</p>
<p class="warning">This is the second paragraph.</p>
`
div.append(div2)

// put this div before the unordered list from above
ul.insertAdjacentElement("beforebegin", div2)

// add a class to the second paragraph called warning
//DONE


// remove the first paragraph
const removeParagraph = document.querySelector(".remove")
removeParagraph.remove()


// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height){

}

function generatePlayerCard(name, age, height){
    const html = `
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be tall!</p>
    </div>
    `;
    return html
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div')
cards.className = "cards"


// make 4 player cards using generatePlayerCard

let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);

// append those cards to the div
cards.innerHTML = cardsHTML
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
//will work on this later
