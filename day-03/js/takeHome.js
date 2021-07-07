// Ask for the user's first & last name
const fullName = prompt("Submit your first & last name");

// find where the first name ends
const wordBreak = fullName.indexOf(' ');
// get the characters of the string up through the space
const firstName = fullName.slice(0, wordBreak);
console.log(firstName);
// get the characters of the string after the space
const lastName = fullName.slice(wordBreak + 1);
alert(lastName);

// BONUS
// Ask for the user's birthday
const birthday = prompt("enter your date of birth (YYYY MM DD)");
// Ask the user to confirm their birthday input
confirm("Please confirm that you input " + birthday);
// Alert the user's birthday
const formattedBirthday = new Date(birthday).toDateString();
alert(formattedBirthday);

// QUESTIONS
/*
1. how to validate input (i.e. info provided in the format asked for)?
*/