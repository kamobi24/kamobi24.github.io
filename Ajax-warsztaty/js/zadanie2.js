function pobierzDane(){
$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data){
    console.log(data);
    console.log(data.userId);
    console.log(data.userId);
    console.log(data.userURL);
});
}