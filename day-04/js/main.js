// LOGIC

// if
if (true) {
    console.log('1. this code runs if true');
}

//  if / else
if (true) {
    if (true) {
    console.log('2. this code runs if true');
}
} else {
    console.log('2. this code runs if false');
}

// else / if
if (false) {
    if (true) {
    console.log('3. this code runs if true');
}
} else if (true) {
    console.log('3. this is a second condition');
} else {
    console.log('3. this code runs if false');
}
// once one statement is successful in else if's, then none of the other statements will run
// else if can be thought of as "OR IF"

// FALSEY & TRUTHY STATEMENTS
// all strings are truthy

if (true) {
    console.log('truthy');
}

if (false) {
    console.log('truthy');
}
// this won't log because false is a falsey

if (1) {
    console.log('truthy');
}

if (0) {
    console.log('truthy');
}
// this won't log because 0 is a falsey

// TERNARY
// X ? function : function
// short hand for if/else statement
// the advantage of regular if/else is that you can run blocks of code (i.e. multiple functions)

true ? console.log('truthy') : console.log('falsey');
// truthy will log

false ? console.log(truthy) : console.log('falsey');
// falsey will return

// SWITCH STATEMENTS
const faveFood = prompt('what is your favorite food?');

switch (faveFood) {
    case 'pizza':
        console.log('I love pizza!');
        break;
    
    case 'burgers':
        console.log('burgers are not my fave');
        break;
    
    case 'ice cream':
        console.log('... okay');
        break;

    default:
        console.log('I never tried ' + faveFood + ' before.');
}