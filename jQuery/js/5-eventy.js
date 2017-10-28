'use strict';
$(function () {
    $('#first').mouseenter(function () {
        $('#second').toggle(function (){
        $(this).css({'background-color': 'yellow', 'text-decoration' : 'underline'});
    });
});

    //    $('#first').on({
    //        'mouseover' : function(){
    //            $(this).css('background-color', 'yellow');
    //            
    //        },
    //        'mouseleave': function() {
    //            $(this).css('background-color', 'green');
    //        },
    //        'click' : function() {
    //            console.log('click click');
    //            
    //        }
    //        
    //    })


});
