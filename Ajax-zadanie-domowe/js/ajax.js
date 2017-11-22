$("button").click(function () {

    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {

        console.log(data)
        $('button').after($('<div id="dane-programisty"></div>'));
        $("#dane-programisty").text(data.imie + ' ' + data.nazwisko + ' ' + data.zawod + ' ' + data.firma + ' ');
    })

});
