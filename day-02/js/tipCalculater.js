// rename the HTML
document.title = 'Tip Calculator';
const h1 = document.querySelector('h1');
h1.innerText = 'Tip Calculator';

// create inputs
const billTotal = document.createElement('input');
billTotal.placeholder = "what's the bill total?"
billTotal.type = 'number';
document.body.appendChild(billTotal);

const tipPercent = document.createElement('input');
tipPercent.type = 'number';
tipPercent.placeholder = "what % will you tip?";
document.body.appendChild(tipPercent);

// create button
const calculate = document.createElement('button');
calculate.innerHTML = "Tip Me!"
document.body.appendChild(calculate);

// calculate the inputs on click
calculate.addEventListener('click', function() {
    console.log('click');

    const total = Number(billTotal.value);
    const tip = Number(tipPercent.value);

    // math
    const result = total * tip / 100;

    // put the math result in the HTML
    const finalTip = document.createElement('h3');
    finalTip.innerText = '$' + result;
    document.body.appendChild(finalTip);
    

})