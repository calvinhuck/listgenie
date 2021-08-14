//
//  Functions:
//  User enters list item
//  When user clicks on "add item" or enter key, the item will be added to the list -- DONE
//   
//  When list is empty, "List is Currently Empty" will be displayed --- DONE
//  
//  User can change styles by clicking on either "Light" or "Dark" --- DONE
//  
//  User can click on "Start Over" to clear list --- DONE
//  
//  User can cross list-items off by clicking on item which will toggle a strikethrough -- DONE
//  
//  User can remove individual items by selecting "X" --- DONE
//  


// GLOBAL VARIABLE DECLARATIONS

var darkModeButton = document.getElementById('dark-mode');
var lightModeButton = document.getElementById('light-mode');
var startOverButton = document.getElementById('clear-list');
var listItemCheck = document.getElementsByTagName('li');
var emptyList = document.getElementById('empty-list');
var addItemButton = document.getElementById('enter-item');
var listInput = document.getElementById('list-input');
var ul = document.querySelector('ul');

// DARK MODE FUNCTION
function darkMode() {
    var body = document.body;
    var titleBorder = document.getElementById('title-section');
    var themeButton = [...document.getElementsByTagName('button')];
    var listInput = document.getElementById("list-input");
    var listSection = document.getElementById("list-section");
    body.classList.add('dark');
    body.classList.remove('light');
    titleBorder.classList.add('dark-border');
    titleBorder.classList.remove('light-border');
    themeButton.forEach(themeButton => {   
    themeButton.classList.add('dark-button');
    themeButton.classList.remove('light-button');
    listInput.classList.add('dark-input');
    listInput.classList.remove('light-input');
    listSection.classList.add('dark-border');
    listSection.classList.remove('light-border');
    }) 
}

// LIGHT MODE FUNCTION
function lightMode() {
    var body = document.body;
    var titleBorder = document.getElementById('title-section');
    var themeButton = [...document.getElementsByTagName('button')];
    var listInput = document.getElementById("list-input");
    var listSection = document.getElementById("list-section");
    body.classList.remove('dark');
    body.classList.add('light');
    titleBorder.classList.remove('dark-border');
    titleBorder.classList.add('light-border');
    themeButton.forEach(themeButton => {   
    themeButton.classList.remove('dark-button');
    themeButton.classList.add('light-button');
    listInput.classList.remove('dark-input');
    listInput.classList.add('light-input');
    listSection.classList.remove('dark-border');
    listSection.classList.add('light-border');
    }) 
}

// TOGGLES LIST IS CURRENTLY EMPTY
function listCurrentlyEmpty() {
    if (listItemCheck.length === 0) {
        emptyList.classList.toggle('empty-list');
    }
}

// FUNCTION TO REMOVE ALL LIST ITEMS
function removeListItems() {
    // var listItem = document.querySelector('ul');
    listCurrentlyEmpty();
    var child = ul.lastElementChild;
        while (child) {
        ul.removeChild(child);
        child = ul.lastElementChild;
    }
    listCurrentlyEmpty();
}

// FUNTION TO ADD ITEMS TO LIST
function createListElement() {
    var ul = document.querySelector('ul');
    var li = document.createElement('li');
    var button = document.createElement('button');
    button.classList.add('remove-button');
    if (listItemCheck.length === 0) {
        emptyList.classList.toggle('empty-list');
    }
    li.appendChild(document.createTextNode(listInput.value));
    button.appendChild(document.createTextNode("X"));
    li.appendChild(button);
    ul.appendChild(li);
    listInput.value = "";
}

function addListItem() {
    if (listInput.value.length > 0) {
        createListElement();
    }
}

function enterListItem(event) {
    if (listInput.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// FUNCTION TO ADD STRIKE THROUGH
function listItemDone(task) {
    if (task.target.tagName === "LI"){
		task.target.classList.toggle("strike-through");
    }
}

// FUNCTION TO REMOVE LIST ITEM
function deleteListElement(element) {
    if (element.target.className === 'remove-button') {
        element.target.parentElement.remove();
    }
    listCurrentlyEmpty();
}

// FUNCTION INVOKED WHEN ELEMENT IS CLICKED
function handleUlClick(element) {
    listItemDone(element);
    deleteListElement(element);
}

// DISPAYLS "LIST CURRENTLY EMPTY" AT PAGE START
listCurrentlyEmpty();

// ADD CLICK EVENT TO "START OVER" BUTTON WHICH INVOKE THE removeListItems FUNCTION WHICH REMOVES ALL LIST ITEMS AND SHOWS EMPTY LIST DIALOGUE
startOverButton.addEventListener('click', removeListItems);

// ADD CLICK EVENT TO "LIGHT" AND "MIDNIGHT" BUTTONS WHICH INVOKES THE FUNCTIONS TO CHANGE THEME
darkModeButton.addEventListener('click', darkMode);
lightModeButton.addEventListener('click', lightMode);

// ADDS USER LIST ITEM ON CLICK OR ENTER BY INVOKING THE ADDLISTITEM FUNCTION
addItemButton.addEventListener('click', addListItem);
listInput.addEventListener('keypress', enterListItem);

// ADDS STRIKETHROUGH OR REMOVES ITEM ON CLICK BY INVOKING THE HANDLEULCLICK FUNCTION
ul.addEventListener('click', handleUlClick);