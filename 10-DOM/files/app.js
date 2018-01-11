
// BODY
document.getElementsByTagName('body');
console.log(document.getElementsByTagName('body'));
let removeBgAqua = () => {
  let element = document.body;
  element.classList.remove("bg-aqua");
}
removeBgAqua();
let addBgOlive = () => {
  let element = document.body;
  element.classList.add("bg-olive");
}
addBgOlive();

// Work on First PARAGRAPH
let removeBgLimeAndGray = () => {
  let element = document.getElementById("first-paragraph");
  element.classList.remove('bg-lime','gray');
}
removeBgLimeAndGray();

let addAqua = () => {
  let element = document.getElementById("first-paragraph");
  element.classList.add("aqua");
}
addAqua();

// Work on BLOCKQUOTES
let addBgTeal = () => {
  let element = document.querySelector(".bg-silver");
  element.classList.add("bg-teal");
}
addBgTeal();

let removeBgSilver = () => {
  let element = document.querySelector(".bg-silver");
  element.classList.remove("bg-silver");
}
removeBgSilver();



let addBgWhite = () => {
  let elements = document.getElementsByTagName("blockquote");
  console.log(elements);
  for (i=0; i <elements.length;i++) {
    elements[i].classList.add("bg-white");
  }
}
addBgWhite ();



// EXERCISE 2 CSS SELECTOR
document.querySelector("#my-table");
let addBgPurple = () => {
  let element = document.querySelector("#my-table");
  element.classList.add("bg-purple");
}
addBgPurple();

document.querySelectorAll('.container p');
console.log(document.querySelectorAll('.container p'));
let addShadow = () => {
  let elements = document.querySelectorAll('.container p');
  for (i=0; i< elements.length;i++){
    elements[i].classList.add('shadow');
  }
}
addShadow();


//EXERCISE 3  directly modifying HTML via JavaScript

let addStyles = () => {
  let elements = document.getElementsByTagName('pre');
  for (i=0;i<elements.length;i++) {
    elements[i].style.color = "red";
    elements[i].style.backgroundColor = "white";
    elements[i].style.borderTop = "3px solid red";
    elements[i].style.borderBottom = "3px solid red";
  }
}
addStyles();

let modifyFirstH3 = () => {
  let element = document.getElementsByTagName('h3')[0];
  console.log(element);
  element.innerHTML = "<em>Italic title ! yeah !</em>";
}
modifyFirstH3 ();

let modifyFirstH2 = () => {
  let element = document.getElementsByTagName('h2')[0];
  console.log(element);
  element.innerHTML = "<strong>HTML doens't work !</strong>";
}
modifyFirstH2();

// EXERCISE 4
let modifyUl =() => {
  let element = document.getElementsByTagName('ul')[0];
  let createdLi = document.createElement('LI');
  element.appendChild(createdLi);
  createdLi.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
  let ulLink = element.getElementsByTagName('a')[0];
  ulLink.style.color = 'red';
}
modifyUl ();


// EXERCISE  5 CREATING AND DELETING MULTIPLE ITEMS
let olFirst= document.getElementsByTagName('ol')[0];
console.dir(olFirst);

let olChildren = olFirst.children;
console.log(olChildren);

while (olFirst.firstChild) {
  olFirst.removeChild(olFirst.firstChild);
}
let codeGames = ["Silent Teacher","Code Monkey", "CodeCombat"];

for (i=0;i<codeGames.length;i++) {
  //create list element
  let element = document.createElement('li');
  //set its contents
  element.appendChild(document.createTextNode(codeGames[i]));
  // append the li to the Ol
  olFirst.appendChild(element);
}
