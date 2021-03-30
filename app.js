window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
})
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
/*
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
*/

/* Display the objects in the DOM*/
/*
var str = JSON.stringify(firstShoes);
console.log(str);
var displayShoes = document.getElementsByClassName("shoes").innerHTML = str;
*/
//console.log(displayShoes);
/*console.log(typeof this.size); Precises type of object*/

/* IF and ELSE statements */
// User login check
/*
let user = "Edomiyas";
let enter;

if(user){
    enter = 1;
}
else{
    enter = 0;
}
console.log(enter);
*/

/* Iteration exercise FOR */
/*
let produit = 6;

for(let iteration = 0; iteration <= 6; iteration++){
    console.log(iteration);
}
console.log("This is the total number of product : " + produit);
*/

/* Exception Handling TRY CATCH*/

// 3 types d'erreurs : erreur de syntaxe, erreur logique (if/while...), erreur d'éxecution(try/catch)

/* DOM MANIPULATING */
let displayShoes = document.getElementById("name").innerHTML = "Nike";

