const inputs = document.querySelectorAll('input');
console.log(inputs);
const streetNumberInput = inputs[0];
const streetNameInput = inputs[1];
const cityInput = inputs[2];
const select = document.querySelector('select');

// !! the value of THIS changes to whatever is calling the function
streetNumberInput.addEventListener('change', function() {
    console.log(this.value);
    if(this.value && parseInt(this.value)) {
        console.log('yay AND you typed a number!');
    }
})
streetNameInput.addEventListener('change', function() {
    console.log(this.value);
    this.value && streetNumberInput.value ? console.log('you did it AND did it for street number first') : alert('boo');
})
cityInput.addEventListener('change', function() {
    console.log(this.value);
    if(this.value) {
        console.log('yay again!');
    } else {
        console.log('booo again');
    }
})
select.addEventListener('change', function() {
    console.log(this.value);
    switch(this.value) {
        case 'ca':
            console.log('golden state');
            break;
        case 'az':
            console.log('grand canyon state');
            break;
        case 'or':
            console.log('beaver state');
            break;
        case 'nm':
            console.log('land of enchantment');
    }
})