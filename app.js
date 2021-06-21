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

/*var str = JSON.stringify(firstShoes);
console.log(str);*/
//var displayShoes = document.getElementsByClassName("shoes").innerHTML = str;
let firstShoesName = document.getElementById('name').innerHTML = firstShoes.name;
let firstShoesSize = document.getElementById('size').innerHTML = firstShoes.size;
let firstShoesBrand = document.getElementById('brand').innerHTML = firstShoes.brand;

let image = document.createElement('img');
image.src = "nike.png";
let src = document.getElementById('img'); 
src.appendChild(image);


let secondShoesName = document.getElementById('nameTwo').innerHTML = secondShoes.name;
let secondShoesSize = document.getElementById('sizeTwo').innerHTML = secondShoes.size;
let secondShoesBrand = document.getElementById('brandTwo').innerHTML = secondShoes.brand;

let imageTwo = document.createElement('img');
imageTwo.src = "jordan.png";
let srcTwo = document.getElementById('img'); 
srcTwo.appendChild(imageTwo);
imageTwo.style.position = "absolute";
imageTwo.style.margin = "20rem 0rem 0rem -15rem";
//console.log(displayShoes);
/*console.log(typeof this.size); Precises type of object*/
function verifBrand(){
    if(firstShoesBrand == 'Nike'){
        document.getElementById('verifBrand').innerHTML = "Yes, you're brand is Nike."
        document.getElementById('verifBrand').style.color = 'green';
        
    }
    else{
        document.getElementById('verifBrand').innerHTML = "No, the brand isn't Nike."
        document.getElementById('verifBrand').style.color = 'red';
    }
}

verifBrand();

function verifBrandTwo(){
    if(secondShoesBrand == 'Nike'){
        document.getElementById('verifBrandTwo').innerHTML = "Yes, you're brand is Nike."
        document.getElementById('verifBrandTwo').style.color = 'green';
        document.getElementById('verifBrandTwo').style.position = 'absolute';
        document.getElementById('verifBrandTwo').style.margin = '10rem 0rem 0rem 32rem';
        
    }
    else{
        document.getElementById('verifBrandTwo').innerHTML = "No, the brand isn't Nike."
        document.getElementById('verifBrandTwo').style.color = 'red';
        document.getElementById('verifBrandTwo').style.position = 'absolute';
        document.getElementById('verifBrandTwo').style.margin = '10rem 0rem 0rem 32rem';
    }
}

verifBrandTwo();

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

/* DOM MANIPULATING
let displayShoes = document.getElementById("name").innerHTML = "Nike";
*/