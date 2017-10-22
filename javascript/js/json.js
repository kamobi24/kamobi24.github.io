'use strict';

var jsonOsoby = {
    'osoby':[
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania: [
                {nazwa: 'podroze'},
                {nazwa: 'gotowanie'}
            ]
        },
        {
            imie: 'Dominik',
            nazwisko: 'Gomuła',
            wzrost: 190,
            zainteresowania: [
                {nazwa: 'sport'},
                {nazwa: 'gotowanie'}
            ]
        },
         {
            imie: 'Klaudia',
            nazwisko: 'Gomuła',
            wzrost: 160,
            zainteresowania: [
                {nazwa: 'programowanie'},
                {nazwa: 'motoryzacja'} 
                ]
         }
    ]
}

console.log(jsonOsoby);

console.log(jsonOsoby.osoby[0].imie);

jsonOsoby.osoby.forEach(function(element, index){
    console.log(element.imie);
});
