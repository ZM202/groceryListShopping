////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */
//notes...trying to set the value in this case...
//go to doc (HTML) querySelector=find the link .. get the attribute of that link to set it to something..
// document.querySelector('link').href = 'styles.css';

/* 1.2) Set the class of the image to "list-img" */
// document.querySelector('.header img').className = 'list-img';

/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */

//declare variable..
// let nodeList = document.querySelectorAll('input');

//nodelist is like array. NodeList is used as variable in this case.

// for (i = 0; i <= nodeList.length; i++){
//         nodeList[i].className = 'btn';
// }

////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */
'$("#grocery-list").apprend("#li")';
let groceryList = ("itemsOne", "itemsTwo");


/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */

let orderItems = prompt ("Please input the name of the items you would like to add.");

let x = document.createElement("li");

let textNode = document.createTextNode('userInput');

node.appendChild(textnode); 

function newList(){
        $("#grocery-list").append('<li></li>');
        }


/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by setting the total-area class to just "total-area"
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */




////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

