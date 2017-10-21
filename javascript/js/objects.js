'use strict';

var osoba = {
    imie: 'Kamil',
    wzrost: 189,
    przedstawOsobe: function() {
        console.log(this.imie);
    }    
}

console.log(osoba.imie);
console.log(osoba['imie']);

osoba.przedstawOsobe();

//jak sie odwołujemy do własciwości elementu z jego wnętrza to uzywamy "this" np. console.log(this.imie)

osoba.nazwisko = 'Obuchiewicz';

console.log(osoba.nazwisko);