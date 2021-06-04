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

// There are three steps with event listeners:
    // Go get something
    // Listen for something (such as a click)
    // Do something
