const name = 'meredith'
const middle = 'hannah'
const last = 'mcintosh'

{/* // SNOB'N'US or SNOBUSN
//string
//number
//boolean
//null
//undefined
//symbol
//object */}

//this is an object or collection
//order doesn't matter in an object
// use . notation o be able to see specific data
// person.first will return 'meredith'
const person = {
    first: 'meredith',
    last: 'mcintosh',
    age: 28
};

//null
//null is a value of nothing
//literally has a value of null
const somethingNull = null;

//null example below
//Teller is a magician who legally changed his name to only be Teller
//so in this example, he values his lastname to null because he doesn't have one
//where for example Cher might have a last name but we just don't know it,
//so her name could return undefined
const teller = {
    first: 'Raymond',
    last: 'Teller'
}

teller.first = "Teller";
teller.last = null


//undefined
//undefined comes about when you try to access a variable
//and it hasn't been set
let dog;
console.log(dog);