//nazwy klas piszemy z wielkiej litery

class Osoba {
constructor(imie, nazwisko) {
 this.imie = imie;
    this.nazwisko = nazwisko;
    }
wyswietlInfo() {
        console.log( "Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko);
    }
} 
var krystian = new Osoba('Krystian', 'Dziopa');

var wojtek = new Osoba('Wojtek', 'Potocki');

krystian.wyswietlInfo();

wojtek.wyswietlInfo();

console.log(krystian.imie);