$.getJSON("https://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108", function (data) {
    $("button").click(function () {
        $('button').after($('<div id="dane-programisty"></div>'));
        $("#dane-programisty").text(data.imie + ' ' + data.nazwisko + ' ' + data.zawod + ' ' + data.firma + ' ');
    })

});
