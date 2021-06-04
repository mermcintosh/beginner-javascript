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
butts.addEventListener('click', function() {
console.log("ive been clicked")
});

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
