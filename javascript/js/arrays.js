'use strict';

var imiona = ['Wojtek', 'Krystian','Łukasz'];

console.log(imiona);

imiona[3]= 'Piotrek';

console.log(imiona);

var ileEmelentow = imiona.push('Gerard');
console.log(imiona);

console.log(ileEmelentow);

var zdjetyElement = imiona.pop();

console.log(imiona);

console.log(zdjetyElement);

console.log('Ile elementów w tablicy:' + imiona.lenght);

//console.log(imiona.join(' - '));

imiona.reverse();
console.log(imiona);

imiona.sort();
console.log(imiona);