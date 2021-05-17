

// this is a function definition
//billAmount and taxRate are parameters (placeholders)
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15){
    //this is the function body
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate)
    return total;

}

//function call or **run**
// const myTotal = calculateBill(100, 0.13)
//100 and 0.13 and these are arguments being passed in (actual values)


// function sayHiTo(){
//     return `Hello ${firstName}`;
// }

// const greeting = sayHiTo()

//if you want to use the default value, you need to put undefined in the argument
