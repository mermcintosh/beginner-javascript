const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// 

// Console Methods
// console.error
// console.warn
// console.table
// console.count
// console.group or console.groupCollasped
// console.groupEnd

// Callstack, Stack Trace 

// Grabbing Elements
//go to dev tools and select something on the page
//then go to the console and type $0 and it will show 
//what you have currently selected
//then if you type $1 it will show you the second most recent
//one you selected

//you can also go to a site and type $('p') and this will return the first paragraph
//on the page for example or
//type $$('p') to see all the paragraphs on the page

// Breakpoints (15 minute mark)
//you can type debugger in a function and it will pause
//javascript from running
//you can see the breakpoint(debugger) in the devtools under sources

// can also go to the sources tab and look at the js file and put a breakpoint (like a debugger)
//by clicking a line of code and it will add a blue error

// Scope

// Network Requests

// Break On Attribute
//if you trying to find a specific piece of javascript functionality
//you can right click on the line of code that is changing in the html and click break on and select
//practice using those resources

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
