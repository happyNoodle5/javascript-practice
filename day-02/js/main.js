// style existing HTML
document.body.style.backgroundColor = 'rebeccapurple';

// get an element & style it
const h1 = document.querySelector('h1');
h1.style.backgroundColor = 'tomato';
// note: if we change querySelector('p'); then the h1 variable will not be anything since there is no p element in the page already. this would create a console error
h1.innerText = 'changed';

// VARIABLES ARE ADDRESSES IN MEMORY
const fontColor = 'white';
h1.style.color = fontColor;

// let is another variable type -- we'll talk more about it later
let score = 100;
h1.style.fontSize = score + 'px';

// const array = [strings, score];

/* not sure why this is breaking everything
const object = {
    fontColor = fontColor,
    score = score,
    body : {
        style: {
            backgroundColor = 'white';
        }
    }
}
*/

// let

// CONST assigns variables with immutable values
// LET assigns variables with values that can change:
// score = 40;
// note that changing the value is NOT assigning it again with let score = 40;

// MODULUS (%) - looks at the remainder EX: 21 % 7 -- console will show 0 since there is no remainder

score += 5;
// the above lets us say "add 5 to whatever score's value already is"

const values = [5 + 5, 5-3, 5*2, 5/2, 32 % 8];
console.log(score);
console.log(values);

console.log(score += values);