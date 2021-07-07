// pre-built data objects:

console.dir(document);

console.dir(Math);

console.dir(Date);
console.dir(new Date());

const div = document.querySelector('div');
console.dir(div);
// to use these ^, there must be an HTML element of that type in the DOM in order for the JS to select it

// try looking in console, going to the bottom of the list to find the proto: Object & find all the different JS things possible for JS objects

// NOTE: console.dir provides "un-prettified" info about the thing, vs. console.log provides just what seems important

console.dir('test');

// 
// FUNCTIONS
// 

function myFunction() {
    alert('my function ran');
}
// functions should only do one thing
// the above on its own wont do anything, a function needs to be called:

myFunction();

// in the parentheses, functions take parameters. parameters are just variables, but they are called parameters / arguments when they are in a function

const test1 = alert('I am an alert');
const test2 = confirm('Are you sure?');
const test3 = prompt('What is your name?', 'J Doe')

console.log(test1, test2, test3);

// alert, prompt, and confirm are pre-defined functions, so whenever they appear in our JS is when we are calling them?
