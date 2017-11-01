function ajax(ajaxOptions) {

    window.onscroll = function () {
        var d = document.documentElement;

        var height = d.offsetHeight;
        var offset = d.scrollTop + window.innerHeight;

        //    console.log('offset = ' + offset);
        //    console.log('height =' + height);

        if (offset >= height) {

            ajax({
                type: "GET",
                url: " https://jsonplaceholder.typicode.com/users ",
                onError: function (msg) {
                    console.log(msg);
                },
                onSuccess: function (response) {

                    //            console.log("połączenie działa i dane są pobierane :)");

                    var jsonObjArray = JSON.parse(response);
                    //        console.log(jsonObjArray);

                    jsonObjArray.forEach(function (element) {
                        console.log(element);

                        var par = document.createElement('p');
                        par.innerHTML = element.name;

                        document.body.appendChild(par);

                    });


                }
            });

        }

    }

