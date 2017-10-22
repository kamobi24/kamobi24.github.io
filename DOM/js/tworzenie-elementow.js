'use strict';

var istniejacyWezel = document.getElementById('parSecond');

console.log(istniejacyWezel);

//tworzenie nowego elementu
var newElement = document.createElement('p'); 

//tworzenie teksu dla nowego elementu
var newElementContent = document.createTextNode('To jest nowy paragraf');

//dodaj tekst do element p
newElement.appendChild(newElementContent);

console.log(newElement);

istniejacyWezel.appendChild(newElement);

//usuwanie stworzonego paragrafu
istniejacyWezel.removeChild(newElement);

//var parFirstDiv = document.getElementById('parFirst');
//var linkWParagrafie = document.getElementById('parFirst').children[2];
//console.log(linkWParagrafie);
//parFirstDiv.replaceChild(newElement, linkWParagrafie);

//Zadanie
//dodaj znacznik <br> po kazdym linku i usun z nich atrybut klasy

var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

for (var i = 0; i < allLinks.length; i++){
    var br = document.createElement('br');
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
    allLinks[i].removeAttribute('class'); //usun atrybut klasy
    allLinks[i].setAttribute('id', 'link-id-' +i);
} 