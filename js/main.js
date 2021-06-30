// const --> "the next thing is going to be a variable name"; keyword to declare a variable
    // there are other ways to declare variables that will mean you can do different things with that variable

    const myButton = document.querySelector('#thisButton');
    // querySelector is a method which will have parenthesis with params inside, followed by a semi-colon
    // querySelector looks for an element inside the document
    // CSS selectors are the same for JS
    
    // JS can contain all your CSS 
    myButton.style.color = 'tomato';
    myButton.style.fontSize = '50px';
    
    // .style is a selector (?)
    
    // CSS properties use snake case
    
    
    myButton.innerText = "changed"
    myButton.innerHTML = "different"
    
    // 
    myButton.addEventListener('click', function() {
        alert('hello')
    });
    // the first parentheses after addEventListener indicate some action that will happen; there aren't always parentheses
    
    // mouseover = hover
    // mouseout = inverse hover
    myButton.addEventListener('mouseout', function() {
        myButton.innerText ="click me!"
    })
    myButton.addEventListener('mouseover', function() {
        myButton.innerText ="different"
    })
    
    // JS is about making actions happen in a certain order
    
    
    // CREATE AN HTML ELEMENT
    const difButton = document.createElement('button');
    // PLACE THE ELEMENT ON THE BODY
    document.body.appendChild(difButton);
    // CHANGE THE INNER HTML OF THE ELEMENT
    difButton.innerHTML = "second button"
    
    
    // PRIMITIVE VALUES / DATA TYPES
    const tag = 'button';
    // string
    const fontSize = 50;
    // integer
    const isActive = true;
    // boolean - more for conditionals
    
    // organizational data types: 
    // OBJECT - uses colons & commas
    const object = {
        tag: 'h1',
        fontSize: 30,
        isActive: true
    }
    // ARRAY - kind of like an ordered list; when logged in the console, you can see the index (which starts at 0)
    const array = [tag, fontSize, isActive]
    
    // innerText will be literal text
    // innerHTML will render any HTML and inline styling it sees
    
    console.log(myButton);
    
    // like console log, but provides all the object info associated with the thing being dir'd
    console.dir(myButton);
    // when we use createElement, it's creating a JS object w/ all that info, but we just need to define the TYPE of object. neato