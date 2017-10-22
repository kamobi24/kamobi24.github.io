'use strict';

var mainHeader = document.getElementById('main-header'); //przypisujemy nagłowek strony do zmiennej

mainHeader.innerHTML = 'Treść nagłowka'; // dodajemy tresc do nagłowka 

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej

link.href = 'http://akadademia108.pl'; //nadpisuje atrybut href w linku

//link.className = 'nowa klasa'; // nadpisuje nazwe klasy linku

link.className = ' nowa klasa'; //dodajemy klase w linku

mainHeader.style.color = '#11aa22';
