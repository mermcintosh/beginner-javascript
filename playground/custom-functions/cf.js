

// this is a function definition
//billAmount and taxRate are parameters (placeholders)
function calculateBill(billAmount, taxRate){
    //this is the function body
    console.log("running calculate bill")
    const total = billAmount * (1 + taxRate)
    return total;

}

//function call or **run**
// const myTotal = calculateBill(100, 0.13)
//100 and 0.13 and these are arguments being passed in (actual values)


// function sayHiTo(){
//     return `Hello ${firstName}`;
// }

// const greeting = sayHiTo()

