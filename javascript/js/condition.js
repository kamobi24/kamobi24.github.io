'use strict'

var wzrostMateusz = 190;
var wzrostOlgi = 190;

//warunek if

if (wzrostOlgi < wzrostMateusz) {
    console.log('Olga jest nizsza ;p');
}

//warunek if-else

if (wzrostOlgi > wzrostMateusz) {

    console.log('Olga jest wyzsza');
} else {
    console.log('Olga jest nizsza');
}

//warunek if else if 

if (wzrostOlgi > wzrostMateusz) {

    console.log('Olga jest wyzsza');
} else if (wzrostOlgi == wzrostMateusz) {
    console.log('Olga jest tak wysoka jak Mateusz');
} else {
    console.log('Olga jest nizsza');
}

//warunek switch

var kolor = 'zielony';

switch (kolor) {

    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('inny kolor');

}
