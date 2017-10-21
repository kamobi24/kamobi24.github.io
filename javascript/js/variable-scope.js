'use strict';

var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var iloscOsoba4 = 2000;
 
//zmienna sumaKasy która jest na poczatku i nie jest zawarta w funkcji jest zmienna globalna do której możemy się odwołac w kazdym momencie pisania naszego kodu
var sumaKasy;

sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;

console.log(sumaKasy);

function policzSumeKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3) {
    var sumaKasy;
    sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3 + iloscOsoba4;
    console.log(sumaKasy);
    var sumaKasyLokalnie = sumaKasy;
    console.log("Kasa Lokalnie wewnatrz funkcji:" +sumaKasyLokalnie);
}

policzSumeKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3);
console.log("Kasa lokalnie poza funkcja:" + sumaKasyLokalnie);