'use strict';
//sposób 2 dodawania zdarzenia
var secondLink = document.getElementsByTagName('a')[1];

function alarm(event) {
    event.preventDefault();
    alert('Kliknieto w link');
}
//sposób 3 dodawania zdarzenia Wazne: z tego sposobu powinniśmy korzystać
secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a')[2];

thirdLink.addEventListener('click', alarm);
thirdLink.removeEventListener('click', alarm);

function klikHeader() {
    console.log('Kliknąłeś w header')
}

document.getElementsByTagName('header')[0].addEventListener('click', klikHeader);

function klikH1(e) {
    console.log('Kliknąłęś w h1');
}

document.getElementsByTagName('h1')[0].addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Kliknąłeś w h1');
})

