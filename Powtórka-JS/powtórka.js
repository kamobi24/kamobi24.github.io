//for, forEach, while, do...while

var tablica = [4,5,10,12,13];


//funkcja for
for(var i=0; i<tablica.length; i++) {
    console.log(tablica[i]);
}


//funkcja forEach
tablica.forEach(function(element, index){
    console.log(element);
});


//funkcja while
var i = 0;
while(i<tablica.length){
    console.log(tablica[i]);
    i++;
}

var zmienna = true;

while(zmienna) {
    if(tablica[i]  % 2 == 1){
        zmienna = false;
    } else  {
    console.log(tablica[i]);
        }
    i++;
//    break - przerywa funkcje
//    continue - przerywa bieżący obieg pętli i zaczyna od nowa
}

//pętla do while

do {
    
} while()