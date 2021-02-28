/* Changing color  
const background = document.querySelector('h1');

function changeColor(){
    background.style.color = 'yellow';
}

changeColor();
*/

/* Display input 
const prenom = prompt("Entrez votre prénom: ");
alert(`Bonjour, ${prenom}`);
*/

/* Creating a class */
class myShoes{
    constructor(name, size, brand){
        this.name = name,
        this.size = size,
        this.brand = brand
    }
}

let firstShoes = new myShoes("AirForce", 43, "Nike"); 
console.log(firstShoes);
let secondShoes = new myShoes("Jordan mid 1", 44, "Jordan");
console.log(secondShoes);

/* Display the objects in the DOM*/
var str = JSON.stringify(firstShoes);
console.log(str);
var displayShoes = document.getElementsByClassName("shoes").innerHTML = str;
//console.log(displayShoes);
