'use strict';
//tekst piszemy w apostrofach a liczby nie

var wzrost = 189;
var wiek = 24;
var wiekKamila = wiek;


console.log(wzrost);
console.log(wiek);
console.log(wiekKamila);
//console.log słuzy do wyswietlania czegos w konsoli
function wyswietlZmienna() {
    var imie = 'Karolina';
    console.log(imie);
}

var wyswietlWiek = function() {
    console.log(wiek);
}

wyswietlZmienna();

//wyswietlWiek;
wyswietlWiek();

function mnozenie(parametr1, parametr2) {
    var wynik = parametr1 * parametr2;
    console.log('Wynik:' +wynik);
    
    return wynik;
//    jezeli chcemy gdzies uzyc wynik ponownie to musimy uzyc "return"
}

mnozenie(5, 6);
mnozenie(4,10);

var wynikMnozenia = mnozenie(3,5);
console.log('wynik mnozenia:' + wynikMnozenia);
