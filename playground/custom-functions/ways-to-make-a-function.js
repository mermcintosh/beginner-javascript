//different ways to declare a function

// function doctorize(firstName){
//     return `Dr. ${firstname}`
// }

//anonymous function - function without a name
//currently not able to use this function without a name
// function (firstName){
//     return `Dr. ${firstname}`
// }

//function expression
// const doctorize = function(firstName){
//     return `Dr. ${firstname}`
// }

//arrow function
//these functions have concise syntax!
//dont have their own scope with the 'this' keyword
const inchToCM = inches => inches * 2.54

//typing return is an explicit return
//not putting return in an implicit return
//implict return is all on one line, no return keyword and curly brackets

//if only one argument, dont need paranthesis 

//here is a normal function
function add(a, b=3){
    const total = a + b
    return total
}

//here is the same function as above but as an arrow function
const add = (a, b = 3) => a + b

//IIFE
//Immediately Invoked Function Expression
(function(){
    console.log('running the anon function')
    return 'you are cool'
})()