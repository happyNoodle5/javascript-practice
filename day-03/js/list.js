const list = [];

const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerHTML = 'List';

const itemInput = document.createElement('input');
document.body.appendChild(itemInput);
itemInput.placeholder = "Add to the list"

const itemButton = document.createElement('button');
document.body.appendChild(itemButton);
itemButton.innerHTML = 'add';

const itemList = document.createElement('ol');
document.body.appendChild(itemList);

itemButton.addEventListener('click', function() {
    sortList();
    showList();
});

function sortList() {
    const value = itemInput.value;
    list.push(value);
    list.sort();
    console.log(list);
}

function showList() {
    itemList.innerHTML = '';
    list.forEach(function(value) {
        const li = document.createElement('li');
        li.innerHTML = value;
        itemList.appendChild(li);
    });
    itemInput.value = '';
};

// take aways: there's a bunch of methods for strings and arrays; I should try to learn what they are really well so that I can know what's possible