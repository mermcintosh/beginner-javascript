const butts = document.querySelector('.butts')

// A callback function is just a regular function, 
//it's just a word we use to describe when we pass a function 
//to a method that will then be called at a later point in time.

// The callback function is our way of saying to the browser
// "hey, when the butts button is clicked, 
//can you please do me a favour and call this function?"

// One of the more common ways to pass the callback function 
//is as an anonymous function.

// For example,
// butts.addEventListener('click', function() {
// console.log("ive been clicked")
// });

// above is an anonymous function because there is no name to the 
//function, no way for us to reference that function 
//outside of the listener

// There are three steps with event listeners:
    // Go get something
    // Listen for something (such as a click)
    // Do something

// another way is we can create a named function and
// pass it in as a reference
//example below

function handleClick() {
    console.log('i have been clicked yo')
}

butts.addEventListener('click', handleClick)

// butts.addEventListener('click',
// handleClick());
// lines 38 and 39 will return 'i have been click yo' before the button 
// has even been clicked because handleClick() will do the function
//on page load.. so we need to do handleClick, not handleClick()

//whats the benefit of having a function that we are passing
//to the event listener outside of the function?

const coolButton = document.querySelector('.cool')

coolButton.addEventListener('click', handleClick)
//now this button can also use the handleClick function.
//so def good to pass in a function!

//another reason would be if i wanted to remove an Eventlistener

butts.removeEventListener('click', handleClick)
//now that event listener no longer works
//this is called unbinding

//what is binding?
//binding is essentially means taking a function and 
//listening for a specific click within an element

//if i ever in the future might want to remove an event listener,
//remember to NOT USE AN ANONYMOUS FUNCTION

// const horray = () => console.log("HORRAY");
// coolButton.addEventListener('click', hooray)

// Shown above 👆is how you would add an event listener 
// with an arrow function.

// The hooray function is technically an anonymous function, 
//but because we have stored it in a variable, 
//it will infer the function from the variable name and 
//we can still reference it because it's stuck in a variable.




//NEXT SECTION is listening to events on multiple elements
//we created 10 buttons all with the same class ("buy")

const buyButtons = document.querySelectorAll("button.buy")
console.log(buyButtons)
//this gives us a node list of all of the buttons

// You might think, why can't we just go ahead and 
//take our buy buttons and add an event listener of click like so

// function buyItem() {
//     console.log('BUYING ITEM');
//   }
//   buyButtons.addEventListener('click', buyItem);

// the above function will return an error saying
// buyButtons.addEventListener is not a function

//sure enough if we look console.log(buyButtons), and open up one of 
//button varialbes, addEventListener is not an available method

// if we do 
// console.dir(butts)
//we weill see addEventListener somewhere in the giant list

//if we want to add the event listener to ALL the buy buttons,
//we will have to loop over and for each element attach it individually

//in the buyButtons prototype, there was a method called forEach. That is going to allow
//us to loop over each of the items

// FOREACH
// forEach is a method that will run a function for each item in our node list.
// We can pass it an anonymous function, 
//which is common when we are looping since we don't have the 
//same limitations as we did in event listeners.

//forEach function will give you an argument that is the each of
//the individual buttons, and we can name it whatever we want

//we can call it buyButton. it is just a parameter (aka a placeholder)
//and the browser will pass us a variable called buyButton when it runs it for us

// buyButtons.forEach(function(buyButton) {
//     console.log('Binding the buy button');
//     buyButton.addEventListener("click", buyItem)
// })


buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick)
})

function handleBuyButtonClick(event) {
    console.log('You are buying it')
    //below will return the number as a number,not a string
    // console.log(parseFloat(event.target.dataset.price))
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.target === event.currentTarget)
}

// event.target is the thing that actually got clicked.

// event.currentTarget is the thing that fired the event listener.